# Soporte — Encolado Masivo de Score de Renovación por Lotes (Arrendamientos)

Este documento detalla el script Apex utilizado para reprocesar de manera masiva el cálculo de score/riesgo de renovación de pólizas de **Arrendamientos** que están próximas a vencer y que presentan fallas técnicas (`Error de integración`) o ausencia de datos en su calificación.

## Propósito
Cuando un volumen alto de pólizas no logra calcular su score de renovación debido a caídas temporales del servicio externo u otros problemas de red, se requiere este script anónimo para filtrar los casos fallidos y encolar el reprocesamiento en lotes pequeños (máximo 15 registros por ejecución, divididos en batches de 5), evitando saturar los límites transaccionales de Salesforce y de la API destino.

## Código Apex (Consola Anónima)

Para asegurar que el script anónimo sea ejecutable de forma directa sin errores de compilación, se ha integrado inline la lógica de consulta a metadatos personalizados en lugar de declarar un método de ayuda.

```apex
String SCORE_ERROR_RENOVACION = 'Error de integración';

// Consulta inline a los metadatos de configuración de renovaciones
Sura_Renovaciones__mdt consultaRiesgo = [
    SELECT Dias_minimos_de_renovacion__c 
    FROM Sura_Renovaciones__mdt 
    WHERE DeveloperName = 'Consulta_Riesgo' 
    LIMIT 1
];
Integer diasMinimosDeRenovacion = consultaRiesgo.Dias_minimos_de_renovacion__c.IntValue();
Date fechaLimiteRenovacion = Date.today().addDays(diasMinimosDeRenovacion);

// 1. Obtener pólizas de Arrendamientos válidas próximas a expirar
List<InsurancePolicy> policyList = [
    SELECT Id, Name, NameInsuredId, Sura_LimiteIndemnizacion__c, Sura_PagosPendientes__c, 
           SURAPoliticasRenovacion__c, SURAScoreRenovacion__c, SURAUrlRenovacion__c, 
           NameInsured.SURANumeroIdentificacion__c, SURAFamiliaProducto__c, SURATomador__c, 
           SURATomador__r.SURANumeroIdentificacion__c, SourceQuote.SURALead__c,
           SourceQuote.SURALead__r.SURAIdentificadorEjecucion__c, ExpirationDate
    FROM InsurancePolicy 
    WHERE ExpirationDate > :Date.today()
      AND ExpirationDate <= :fechaLimiteRenovacion
      AND Sura_LimiteIndemnizacion__c = 'Si'
      AND Sura_PagosPendientes__c = 'No'
      AND SURAFamiliaProducto__c = 'Arrendamientos'
      AND SURAFamiliaProducto__c != ''
      AND SURAPoliticasRenovacion__c = 'Pasa Riesgos'
      AND Status = 'Emitida'
];

List<InsurancePolicy> filteredPolicies = new List<InsurancePolicy>();

// 2. Filtrar únicamente las pólizas con score vacío o con error de integración (Límite 15)
for (InsurancePolicy policy : policyList) {
    if ((policy.SURAScoreRenovacion__c == null || 
         policy.SURAScoreRenovacion__c.trim() == '' || 
         policy.SURAScoreRenovacion__c == SCORE_ERROR_RENOVACION) && 
        filteredPolicies.size() < 15) {
        filteredPolicies.add(policy);
    }
}

System.debug('Total de pólizas a reprocesar en esta corrida: ' + filteredPolicies.size());

// 3. Procesar en batches de 5 registros y encolar el Queueable
Integer batchSize = 5;
Integer endIndex = 0;
for (Integer i = 0; i < filteredPolicies.size(); i += batchSize) {
    List<InsurancePolicy> subListPolicies = new List<InsurancePolicy>();
    List<String> idSubListPolicies = new List<String>();

    for (Integer j = i; j < Math.min(i + batchSize, filteredPolicies.size()); j++) {
        subListPolicies.add(filteredPolicies[j]);
        idSubListPolicies.add(filteredPolicies[j].Name);
        endIndex = j;
    }

    try {
        System.enqueueJob(
            new SURA_RateServiceQueueable(
                subListPolicies,
                new Map<String, Object>(),
                new List<InsurancePolicy>()
            )
        );
        System.debug('Se encoló job para bloque de pólizas desde índice ' + i + ' hasta ' + endIndex);
        System.debug('Pólizas encoladas: ' + idSubListPolicies);
    } catch (Exception e) {
        System.debug('Error al encolar bloque desde índice ' + i + ' hasta ' + endIndex + ': ' + e.getMessage());
        System.debug('Pólizas con error: ' + idSubListPolicies);
    }
}
```

## Instrucciones y Buenas Prácticas
1. Abra la consola de desarrollo de Salesforce (`Ctrl + E`).
2. Pegue y ejecute el script anterior.
3. El script limita el proceso a un máximo de **15 registros** por ejecución (`filteredPolicies.size() < 15`) para cumplir de forma segura con las llamadas concurrentes de API en Salesforce.
4. **Monitoreo**: Revise la sección de **Apex Jobs** en configuración de Salesforce para observar la ejecución y conclusión de los trabajos encolados de `SURA_RateServiceQueueable`.
5. Si necesita procesar más pólizas, puede volver a ejecutar el script transcurridos unos minutos.

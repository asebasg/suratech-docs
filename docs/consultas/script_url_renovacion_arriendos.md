# Soporte — Encolado Manual de Score de Renovación (Arrendamientos)

Este documento detalla el script de Apex utilizado para forzar el recálculo y actualización de la calificación de riesgo (score) y URL de renovación de una póliza individual de **Arrendamientos**.

## Propósito
Cuando el flujo automático de cotización/renovación falla o no genera la URL de renovación (`SURAUrlRenovacion__c`) para una póliza determinada, se ejecuta este script asíncrono para reevaluar la póliza llamando al servicio calificador mediante la clase `SURA_RateServiceQueueable`.

## Código Apex (Consola Anónima)

```apex
Id policyId = '0YTQo0000009yWPOAY'; // Reemplace con el ID de la póliza a procesar
 
List<InsurancePolicy> policyList = [
  SELECT Id, Name, NameInsuredId, Sura_LimiteIndemnizacion__c, Sura_PagosPendientes__c,
         SURAPoliticasRenovacion__c, SURAScoreRenovacion__c, Status,
         NameInsured.SURANumeroIdentificacion__c,
         SURAFamiliaProducto__c,
         SURATomador__c,
         SURATomador__r.SURANumeroIdentificacion__c,
         SourceQuote.SURALead__c,
         SourceQuote.SURALead__r.SURAIdentificadorEjecucion__c
  FROM InsurancePolicy
  WHERE Id = :policyId
];

if (policyList.isEmpty()) {
  System.debug('No se encontró la póliza con el ID suministrado: ' + policyId);
} else {
  System.enqueueJob(
      new SURA_RateServiceQueueable(
          policyList,
          new Map<String, Object>(),
          new List<InsurancePolicy>()
      )
  );
  System.debug('Se encoló exitosamente el score para la póliza.');
}
```

## Instrucciones de Uso
1. Identifique el ID de la póliza de arrendamiento que presenta el inconveniente.
2. Abra **Salesforce Developer Console** e ingrese al ejecutor de código anónimo.
3. Copie el código anterior y reemplace `'0YTQo0000009yWPOAY'` de la primera línea por el ID obtenido.
4. Presione **Execute**.
5. Valide que el log de Salesforce muestre la traza: `"Se encoló exitosamente el score para la póliza."`
6. Pasados unos segundos (dependiendo de la velocidad de integración de los servicios asíncronos), consulte nuevamente la póliza y verifique que la URL de renovación (`SURAUrlRenovacion__c`) y la evaluación de riesgos (`SURAScoreRenovacion__c`) se hayan guardado adecuadamente.

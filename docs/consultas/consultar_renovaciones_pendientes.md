# Operaciones — Consulta de Renovaciones Pendientes de Arrendamientos

Este documento detalla la consulta SOQL utilizada para extraer pólizas del ramo de **Arrendamientos** que están próximas a vencer y cumplen con los criterios comerciales y de riesgo exigidos para habilitar su renovación.

## Propósito
Identificar de forma preventiva la lista de pólizas vigentes aptas para el proceso de renovación. Aquellas que cumplan los filtros serán evaluadas para generar de forma masiva o individual su link de renovación, asegurando continuidad en el recaudo.

## Consulta SOQL

```sql
SELECT 
    Id, 
    Name, 
    NameInsuredId, 
    Sura_LimiteIndemnizacion__c, 
    SURAUrlRenovacion__c, 
    Sura_PagosPendientes__c, 
    SURAPoliticasRenovacion__c, 
    SURAScoreRenovacion__c, 
    NameInsured.SURANumeroIdentificacion__c, 
    SURAFamiliaProducto__c, 
    SURATomador__c, 
    SURATomador__r.SURANumeroIdentificacion__c, 
    SourceQuote.SURALead__c,
    SourceQuote.SURALead__r.SURAIdentificadorEjecucion__c, 
    ExpirationDate
FROM InsurancePolicy 
WHERE ExpirationDate > TODAY 
  AND ExpirationDate <= 2026-07-30T17:41:17.807-05:00 
  AND Sura_LimiteIndemnizacion__c = 'Si'
  AND Sura_PagosPendientes__c = 'No'
  AND SURAFamiliaProducto__c = 'Arrendamientos'
  AND SURAFamiliaProducto__c != ''
  AND SURAPoliticasRenovacion__c = 'Pasa Riesgos'
  AND Status = 'Emitida'
```

## Reglas de Negocio Aplicadas en los Filtros
* **`ExpirationDate > TODAY AND ExpirationDate <= 2026-07-30...`**: Determina la ventana de tiempo o fecha límite de renovación. Las pólizas deben vencer después del día actual pero antes de la fecha límite definida.
* **`Sura_LimiteIndemnizacion__c = 'Si'`**: Valida que la póliza no haya superado los límites de reclamaciones o indemnizaciones permitidas.
* **`Sura_PagosPendientes__c = 'No'`**: Requisito crítico. El tomador debe estar al día con su cartera de pagos para permitirle renovar.
* **`SURAPoliticasRenovacion__c = 'Pasa Riesgos'`**: El resultado de la matriz de riesgos del motor de suscripción debe ser satisfactorio.
* **`Status = 'Emitida'`**: La póliza original debe encontrarse activa y vigente.

## Cómo Utilizar
1. Ajuste el rango de fechas en la condición `ExpirationDate <= YYYY-MM-DDThh:mm:ss.sss-TZ` al período mensual o quincenal que se vaya a procesar.
2. Ejecute la consulta mediante **Salesforce Inspector**.
3. El resultado sirve de insumo directo para correr el script de encolamiento masivo de scores de renovación (`SURA_RateServiceQueueable`).

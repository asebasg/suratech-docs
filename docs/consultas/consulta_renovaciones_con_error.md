# Monitoreo — Pólizas de Renovación con Incidencias

Este documento describe la consulta SOQL utilizada para inspeccionar el avance del proceso de renovación de pólizas específicas y diagnosticar posibles interrupciones.

## Propósito
Cuando se reporta que ciertas pólizas fallaron en su proceso de renovación automática, esta consulta permite identificar el paso exacto en el que quedó el flujo, su subestado de integración y recuperar el enlace directo para que el cliente pueda reintentar o completar el proceso de renovación de forma manual.

## Consulta SOQL

```sql
SELECT Id, Name, SURA_RenewalCurrentStep__c, Substatus, SURAUrlRenovacion__c
FROM InsurancePolicy 
WHERE Name IN (
    'P-XXXXXX', -- Reemplazar por los números de póliza correspondientes
    'P-YYYYYY'
)
```

## Estructura de Campos Clave
* **`SURA_RenewalCurrentStep__c`**: Indica la etapa actual dentro del pipeline de renovación (ej: `'Score Calculado'`, `'Validación de Riesgos'`, `'Llamada de Emisión'`, etc.).
* **`Substatus`**: Estado interno detallado de la póliza (ej: `'Renovación fallida'`, `'Renovación en proceso'`, `'Renovación emitida'`).
* **`SURAUrlRenovacion__c`**: URL generada para que el tomador acceda a completar la renovación de la póliza de arrendamiento o viajes desde el portal.

## Cómo Utilizar
1. Reemplace el marcador `'P-XXXXXX'` por los números de póliza originales del caso de soporte.
2. Ejecute la consulta en el **Data Export** de **Salesforce Inspector**.
3. **Análisis de Resultados**:
   * Si `SURAUrlRenovacion__c` está poblada, compártala con el equipo operativo para que el cliente intente realizar el pago manual.
   * Si `SURA_RenewalCurrentStep__c` está vacío o indica error, ejecute los scripts de reprocesamiento masivo o individual (como `SURA_RateServiceQueueable`) según corresponda.

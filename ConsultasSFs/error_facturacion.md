# Soporte — Identificación de Errores de Facturación (CxC)

Este documento detalla la consulta SOQL empleada por el equipo de soporte técnico para identificar y diagnosticar fallas en el proceso de facturación e integración de Cuentas por Cobrar (CxC).

## Propósito
Detectar aquellos registros de plazos de pago (`vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c`) que no pudieron generar su factura en SAP debido a problemas técnicos o inconsistencias en los datos, permitiendo leer el mensaje de error retornado para su corrección.

## Consulta SOQL

```sql
SELECT 
    Id, 
    vlocity_ins_fsc__InsurancePolicyId__r.Name, 
    SURANumeroDocumentoPago__c, 
    vlocity_ins_fsc__Status__c, 
    vlocity_ins_fsc__IsPaid__c, 
    SURAStatusIntegration__c, 
    SURATextoMensaje__c, 
    vlocity_ins_fsc__ScheduleDate__c, 
    SURAFamiliaProducto__c, 
    FORMAT(CreatedDate), 
    FORMAT(LastModifiedDate)
FROM vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c 
WHERE SURAStatusIntegration__c = 'ErrorGeneracionFactura' 
  AND vlocity_ins_fsc__InsurancePolicyId__r.Status = 'Emitida'
ORDER BY vlocity_ins_fsc__ScheduleDate__c DESC
```

## Estructura de Campos Clave
* **`SURAStatusIntegration__c = 'ErrorGeneracionFactura'`**: Filtra de forma específica las integraciones fallidas durante el envío o procesamiento en el backend de facturación.
* **`SURATextoMensaje__c`**: Contiene la descripción exacta del error devuelto por la integración (ej: "Error de comunicación con SAP", "El cliente no tiene RFC/Identificación válido", etc.).
* **`vlocity_ins_fsc__ScheduleDate__c`**: Fecha programada del cobro. Ordenar de forma descendente ayuda a dar prioridad a los errores más recientes.
* **`vlocity_ins_fsc__InsurancePolicyId__r.Status = 'Emitida'`**: Asegura que solo auditemos cobros sobre pólizas activas y emitidas, descartando pólizas que hayan sido canceladas con posterioridad.

## Acciones de Mitigación Recomendadas
1. Ejecute la consulta y extraiga la lista de registros con error.
2. Analice la columna `SURATextoMensaje__c`:
   * **Errores de Datos de Cliente**: Modifique la información correspondiente en el Objeto Cuenta/Contacto de Salesforce y vuelva a procesar la CXC.
   * **Errores de Conectividad o Timeout**: Una vez restablecidos los servicios, proceda a retransmitir la CXC mediante los scripts de reenvío manual (`envioCXCManual.envioCXC('ID_CXC')`).

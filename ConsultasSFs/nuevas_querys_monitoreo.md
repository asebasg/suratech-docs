# Monitoreo — Consultas de Control Diario de Pre-pólizas y CxC (SAP)

Este documento detalla dos consultas SOQL críticas utilizadas para el monitoreo diario de la creación de pre-pólizas y la posterior integración con SAP de las Cuentas por Cobrar (CxC).

---

## 1. Control de Emisión de Pre-pólizas y Enlaces de Pago

Esta consulta identifica qué pre-pólizas se enviaron para proceso de pago durante las últimas 24 horas y valida si el flujo completó correctamente la emisión y activación de la póliza de seguros en Salesforce.

### Consulta SOQL
```sql
SELECT 
    Id,
    SURAPrepolizaId__c, 
    SURALead__r.Id,
    SURALead__r.Name,
    SURALead__r.SURAUrlPago__c,
    SURAPolizaEmitida__c,
    SURAPolizaActiva__c
FROM Quote
WHERE RecordType.Name = 'Pre-póliza'
  AND SURAFamiliaProducto__c IN ('Arrendamientos', 'Viajes')  
  AND CreatedDate = LAST_N_DAYS:1
```

### Propósito y Análisis:
* **Filtros**: Limita la búsqueda a cotizaciones de tipo de registro `'Pre-póliza'` para los productos clave de Arrendamientos y Viajes, creadas en el último día.
* **Diagnóstico**: Si se encuentra una pre-póliza con una URL de pago activa (`SURAUrlPago__c`) pero los flags de emisión (`SURAPolizaEmitida__c` / `SURAPolizaActiva__c`) siguen en `false` después de confirmarse la recepción del pago, es indicio de una interrupción en el webhook o en el proceso batch de emisión.

---

## 2. Monitoreo de Transmisión de CxC a SAP (Ayer)

Esta consulta lista las Cuentas por Cobrar (CxC) de Arrendamientos y Viajes programadas para el día de ayer, filtrando solo aquellas que fueron generadas y pagadas de manera exitosa en SAP.

### Consulta SOQL
```sql
SELECT 
    vlocity_ins_fsc__InsurancePolicyId__r.Name, 
    SURAFamiliaProducto__c, 
    vlocity_ins_fsc__Status__c, 
    SURAStatusIntegration__c, 
    SURANumeroDocumentoPago__c, 
    vlocity_ins_fsc__ScheduleDate__c, 
    LastModifiedDate 
FROM vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c 
WHERE SURAFamiliaProducto__c IN ('Arrendamientos', 'Viajes')
  AND vlocity_ins_fsc__ScheduleDate__c = YESTERDAY
  AND SURAStatusIntegration__c IN ('FacturaGeneradaSAP', 'FacturaPagada')  
  AND vlocity_ins_fsc__Status__c IN ('FacturaGenerada', 'FacturaPagada')
```

### Propósito y Análisis:
* **Filtros**: Filtra por fecha de cobro programada para el día anterior (`YESTERDAY`). Valida que los estados de integración técnicos (`SURAStatusIntegration__c`) y lógicos (`vlocity_ins_fsc__Status__c`) coincidan con valores exitosos.
* **Utilidad**: Permite verificar que el proceso nocturno de integración transmitió correctamente las facturas esperadas sin arrojar excepciones de comunicación o de estructura de datos.

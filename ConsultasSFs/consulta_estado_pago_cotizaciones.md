# Monitoreo — Estado de Pago de Cotizaciones y Pre-pólizas

Este documento contiene la consulta SOQL orientada a validar el estado del procesamiento de pagos y la correspondiente generación de pólizas a partir de cotizaciones (`Quote`) o pre-pólizas específicas.

## Propósito
Permite realizar el seguimiento a un lote de identificadores de prepóliza (`SURAPrepolizaId__c`) para diagnosticar por qué no se han emitido o si el proceso de pago en la pasarela externa reportó éxito, error o está en un estado pendiente.

## Consulta SOQL

```sql
SELECT 
    Id, 
    SURAPrepolizaId__c, 
    SURAEstadoProcesoDePago__c, 
    SURADescripcionProcesoDePago__c, 
    SURAFamiliaProducto__c, 
    SURAPolizaEmitida__c, 
    SURAPolizaActiva__c, 
    FORMAT(CreatedDate), 
    FORMAT(vlocity_ins__EffectiveDate__c),  
    vlocity_ins__TotalAmount__c
FROM Quote 
WHERE SURAPrepolizaId__c IN (
    '512300050406',
    '512300050908',
    '584410078129',
    '584410078136',
    '584410078205',
    '512300050629',
    '512300051183',
    '512300051255',
    '512300051204'
)
```

## Estructura de Campos Clave
* **`SURAPrepolizaId__c`**: Código de identificación de la prepóliza generada antes del pago.
* **`SURAEstadoProcesoDePago__c`**: Estado devuelto por la pasarela de pagos (ej: `'Aprobado'`, `'Rechazado'`, `'Pendiente'`).
* **`SURADescripcionProcesoDePago__c`**: Mensaje aclaratorio de la transacción de pago.
* **`SURAPolizaEmitida__c` y `SURAPolizaActiva__c`**: Checkbox o referencias para validar si, tras el pago aprobado, el sistema completó el flujo de emisión y activación de la póliza de seguros definitiva.
* **`vlocity_ins__TotalAmount__c`**: Valor total cotizado.

## Cómo Utilizar
1. Remplace la lista dentro de `SURAPrepolizaId__c IN (...)` con los códigos de prepóliza que requiera investigar.
2. Ejecute la consulta mediante **Salesforce Inspector**.
3. **Diagnóstico**:
   * Si `SURAEstadoProcesoDePago__c` es `'Aprobado'` pero `SURAPolizaEmitida__c` es `false`, existe una falla en el trigger o clase batch encargada de gatillar la emisión tras la confirmación de pago.
   * Si `SURADescripcionProcesoDePago__c` muestra errores de comunicación, valide el estado de integración en los logs correspondientes.

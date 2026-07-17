# Monitoreo — Cantidad de Registros SAP

Este documento describe la consulta SOQL utilizada para verificar y auditar el volumen de registros procesados por la integración de Cuentas por Cobrar (CXC) con SAP en los últimos 10 días, agrupados por su estado de integración.

## Propósito
Monitorear el estado de sincronización y detectar posibles cuellos de botella o acumulaciones de errores en la integración con SAP. Permite a los desarrolladores y al equipo de soporte obtener de un vistazo el volumen de facturas generadas, pagadas o con fallos de integración de manera consolidada en un periodo reciente.

## Consulta SOQL

```sql
SELECT SURAStatusIntegration__c, COUNT(Id)
FROM vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c
WHERE LastModifiedDate >= LAST_N_DAYS:10
GROUP BY SURAStatusIntegration__c
```

## Estructura de Campos Clave
* **`SURAStatusIntegration__c`**: Campo personalizado que define el estado técnico de la integración en SAP (ej: `FacturaGeneradaSAP`, `FacturaPagada`, `ErrorGeneracionFactura`, etc.).
* **`vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c`**: Objeto de Vlocity FSC que representa los plazos de pago y el calendario de cobranza asociados a las pólizas de seguro.

## Cómo Utilizar
1. Copie la consulta anterior.
2. Ejecútela en **Salesforce Developer Console** (Query Editor) o a través de la herramienta **Salesforce Inspector** (Data Export).
3. Analice los resultados agrupados. Si observa un conteo elevado en estados de error como `ErrorGeneracionFactura`, proceda a profundizar en la auditoría con consultas de detalle.

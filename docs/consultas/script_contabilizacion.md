# Soporte — Script de Envío Manual de CxC (Contabilización)

Este documento detalla el script de Apex utilizado para reenviar y procesar de forma manual una Cuenta por Cobrar (CxC) específica en Salesforce.

## Propósito
Cuando una cuenta por cobrar (registro de plazo de pago) presenta fallas automáticas de integración (como el estado `ErrorGeneracionFactura`), y tras haber corregido las causas subyacentes del error, se utiliza este script en la consola anónima de Salesforce Developer Console para forzar una retransmisión inmediata al sistema de facturación/SAP.

## Código Apex (Consola Anónima)

```apex
envioCXCManual.envioCXC('ID_CXC');
```

## Instrucciones de Uso
1. Identifique el ID único de 18 caracteres de la cuenta por cobrar en Salesforce. El objeto es:
   `vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c`
2. Abra **Salesforce Developer Console**.
3. Vaya a **Debug** $\rightarrow$ **Open Execute Anonymous Window** (o presione `Ctrl + E`).
4. Reemplace `'ID_CXC'` con el identificador del registro obtenido en el paso 1.
5. Seleccione e ingrese la línea de código.
6. Haga clic en **Execute**.
7. Verifique el estado de la integración en el registro correspondiente para asegurar que cambie a `FacturaGeneradaSAP` o el estado de éxito definido.

# Manual — Cancelación Masiva de Cuentas por Cobrar (CxC) en Salesforce

Este documento proporciona una guía paso a paso para identificar y cancelar de forma masiva los registros de Cuentas por Cobrar (CxC) en Salesforce que quedaron en estado **Pendiente** pero cuya póliza asociada ya fue **Cancelada**. Esto evita envíos erróneos a cobro y regulariza la información en la integración.

---

## Objetivo
Obtener el listado de plazos de pago (calendario de pago / `vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c`) en estado **'Pendiente'** asociadas a pólizas en estado **'Cancelado'**, y actualizarlos masivamente a estado **'Cancelado'** (tanto a nivel de registro de Salesforce como en su estado técnico de integración). Esto aplica especialmente para los periodos de facturación posteriores a la fecha de cancelación de la póliza.

---

## Requisitos Previos
* Cuenta de Salesforce con permisos de consulta y edición sobre el objeto: `vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c`.
* Extensión de navegador **Salesforce Inspector** instalada.

---

## Procedimiento Paso a Paso

### Paso 1: Obtener el Listado de Registros a Cancelar
1. Inicie sesión en Salesforce.
2. Abra la extensión **Salesforce Inspector** en el panel lateral.
3. Haga clic en **Data Export**.
4. Introduzca y ejecute la siguiente consulta SOQL para identificar los registros candidatos. Es fundamental incluir el campo `Id` para poder realizar la posterior actualización:

```sql
SELECT 
    Id,
    vlocity_ins_fsc__Status__c,
    SURAStatusIntegration__c,
    SURANumeroDocumentoPago__c,
    vlocity_ins_fsc__InsurancePolicyId__r.Name,
    vlocity_ins_fsc__InsurancePolicyId__r.Status,
    vlocity_ins_fsc__InsurancePolicyId__r.CancellationDate
FROM vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c
WHERE vlocity_ins_fsc__InsurancePolicyId__r.Status = 'Cancelado'
  AND vlocity_ins_fsc__Status__c = 'Pendiente'
```

5. **Validación visual preliminar**:
   * Asegúrese de que el `Status` de la póliza relacionada sea efectivamente `'Cancelado'`.
   * Confirme que el estado del registro de cobro sea `'Pendiente'`.
   * Valide que la columna `Id` contenga datos válidos en todas las filas.

---

### Paso 2: Preparar el Archivo para la Actualización Masiva
1. Exporte el resultado de la consulta haciendo clic en **Download CSV** (o copie los datos al portapapeles y péguelos en Microsoft Excel).
2. **Importante**: Guarde una copia de este extracto original sin modificaciones a modo de respaldo y para propósitos de auditoría/reversión si fuera necesario.
3. En la hoja de Excel activa, deje únicamente las columnas requeridas para ejecutar el `update`:
   * `Id`
   * `vlocity_ins_fsc__Status__c`
   * `SURAStatusIntegration__c`
4. Reemplace los valores en todas las filas con los nuevos estados de cancelación:
   * **`vlocity_ins_fsc__Status__c`** $\rightarrow$ `Cancelado`
   * **`SURAStatusIntegration__c`** $\rightarrow$ `Cancelado`
5. Guarde el archivo resultante o cópielo en formato de texto plano con tabulaciones (listo para pegar).

---

### Paso 3: Ejecutar la Actualización Masiva en Salesforce
1. En **Salesforce Inspector**, regrese al menú principal y seleccione **Data Import**.
2. Configure los parámetros de importación como se describe a continuación:
   * **Action**: `Update`
   * **Object**: `vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c`
   * **Format**: `Excel` (si copió y pegó directamente desde las celdas de Excel) o `CSV`.
3. Pegue los datos (incluyendo la fila de encabezados) en la caja de texto **Data**.
4. Valide el mapeo de campos automático:
   * `Id` $\rightarrow$ `Id`
   * `vlocity_ins_fsc__Status__c` $\rightarrow$ `vlocity_ins_fsc__Status__c`
   * `SURAStatusIntegration__c` $\rightarrow$ `SURAStatusIntegration__c`
5. Verifique que no se estén mapeando de forma inadvertida columnas adicionales del reporte de auditoría.
6. Haga clic en **Run Update**.

---

### Paso 4: Verificación y Reporte de Errores
1. Una vez concluido el proceso, revise las estadísticas de finalización de Salesforce Inspector:
   * **Success**: Los registros se actualizaron correctamente.
   * **Failed**: Revise el mensaje de error para las celdas fallidas (por ejemplo, reglas de validación activas, bloqueos de registros o falta de permisos). Reprocese únicamente este subconjunto de fallas una vez solucionada la causa raíz.

---

### Paso 5: Validación Posterior (Post-Ejecución)
1. Vuelva a la sección de **Data Export** en Salesforce Inspector.
2. Corra la siguiente consulta SOQL de control. El resultado esperado del conteo debe ser **0**:

```sql
SELECT COUNT()
FROM vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c
WHERE vlocity_ins_fsc__InsurancePolicyId__r.Status = 'Cancelado'
  AND vlocity_ins_fsc__Status__c = 'Pendiente'
```

3. Tome una muestra aleatoria de IDs que formaron parte de la actualización, búsquelos directamente en Salesforce y valide visualmente que tanto el estado de la CxC como el de integración hayan cambiado a `Cancelado`.

---

### Paso 6: Evidencias de Soporte y Cierre
Se sugiere guardar las siguientes evidencias como respaldo del caso de soporte o ticket operativo:
1. Consulta SOQL empleada en la extracción.
2. Archivo de respaldo inicial (sin modificar).
3. Captura del resultado exitoso del **Data Import**.
4. Captura del conteo final en cero (0) de validación posterior.

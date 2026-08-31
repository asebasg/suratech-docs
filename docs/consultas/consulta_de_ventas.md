# Monitoreo — Consulta de Ventas (Pólizas Creadas Hoy)

Este documento detalla la consulta SOQL utilizada para monitorear en tiempo real la creación de pólizas durante el transcurso del día actual.

## Propósito
Proporcionar una vista rápida y directa al equipo técnico o de negocio para comprobar las ventas entrantes (pólizas registradas) del día en curso. Es especialmente útil durante salidas a producción, eventos comerciales de alta demanda o campañas para verificar la salud y disponibilidad del canal transaccional.

## Consulta SOQL

```sql
SELECT Id, Name, SURAFamiliaProducto__c, FORMAT(CreatedDate), CreatedBy.Name
FROM InsurancePolicy
WHERE CreatedDate = TODAY
```

## Estructura de Campos Clave
* **`SURAFamiliaProducto__c`**: Segmenta los registros por tipo de producto (Arrendamientos, Viajes, Motos, Autos, etc.).
* **`CreatedBy.Name`**: Muestra quién (o qué usuario de integración / API) dio de alta la póliza. Si el canal es digital, comúnmente aparecerá el usuario integrador de Salesforce.
* **`FORMAT(CreatedDate)`**: Muestra la fecha y hora de creación de la póliza ajustada a la zona horaria local del usuario que ejecuta la consulta.

## Cómo Utilizar
1. Ejecute la consulta SOQL en la consola anónima, Salesforce Inspector o un dashboard rápido de monitoreo.
2. Si desea filtrar por una familia de producto en particular, puede extender la cláusula `WHERE`:
   ```sql
   WHERE CreatedDate = TODAY 
     AND SURAFamiliaProducto__c = 'Viajes'
   ```
3. Si desea ver pólizas de días anteriores, cambie el operador temporal `TODAY` por `YESTERDAY` o `LAST_WEEK`.

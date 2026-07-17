# Auditoría — Información de Centro de Costos por Póliza

Este documento detalla la consulta SOQL utilizada para extraer la información financiera y de atribución de ventas de las pólizas de seguro en estado "Emitida".

## Propósito
Esta consulta permite auditar la correcta asignación de centros de costos, oficinas comerciales, familias de producto y los códigos del productor o asesor encargado de la venta. Es fundamental para reportes de conciliación financiera, validación de comisiones y auditorías operativas sobre pólizas vigentes.

## Consulta SOQL

```sql
SELECT CreatedDate, Id, Name, Producer.SURACodigo__c, SuraCentroCosto__c, SURAOficina__c, SURAFamiliaProducto__c
FROM InsurancePolicy 
WHERE Status = 'Emitida'
```

## Estructura de Campos Clave
* **`Producer.SURACodigo__c`**: Relación con el objeto `Producer` para obtener el código identificador del asesor o canal de venta en SURA.
* **`SuraCentroCosto__c`**: Centro de costos financiero al cual se imputan los ingresos y egresos de la póliza.
* **`SURAOficina__c`**: Sucursal u oficina responsable de la expedición o gestión de la póliza.
* **`SURAFamiliaProducto__c`**: Línea o familia a la que pertenece la póliza (ej: Autos, Motos, Viajes, Arrendamientos).
* **`Status`**: Filtra únicamente las pólizas con valor `'Emitida'`.

## Cómo Utilizar
1. Copie la consulta y ejecútela en **Salesforce Inspector** o **Developer Console**.
2. Puede agregar filtros adicionales en la cláusula `WHERE` para acotar la búsqueda, por ejemplo, por fecha de creación o por familia de producto específica:
   ```sql
   AND CreatedDate = THIS_MONTH
   AND SURAFamiliaProducto__c = 'Arrendamientos'
   ```

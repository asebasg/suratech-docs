# Envío y Reenvío de CXC
## Pólizas y Renovaciones

Este documento contiene los scripts de Apex y consultas SOQL necesarios para gestionar y retransmitir los procesos de Cuentas por Cobrar (CXC), emisiones de renovación y carátulas según el producto.

> [!NOTE]
> Para identificar los productos, consulte la siguiente tabla de equivalencias de códigos:
>
> | Código | Producto        |
> |--------|-----------------|
> | 51     | Arrendamientos  |
> | 58     | Viajes          |
> | 54     | Motos y autos   |

---

## 1. Envío de Primera CXC (Emisión Local)

Estos scripts se utilizan para encolar el trabajo de notificación de la primera cuenta por cobrar (CXC) tras la emisión local de una póliza. Deben ejecutarse en la consola anónima de Salesforce Apex, reemplazando el ID de ejemplo por el ID real de la póliza.

### 1.1. Arriendos

Ejecuta el proceso de notificación para pólizas del ramo de Arriendos.

```apex
Id jobId = System.enqueueJob(
  new ArriendosLocalEmisionNotificationHandler('IdPoliza')
);
```

### 1.2. Autos

Ejecuta el proceso de notificación para pólizas del ramo de Autos.

```apex
Id jobId = System.enqueueJob(
  new AutosLocalEmisionNotificationHandler('IdPoliza')
);
```

### 1.3. Motos

Ejecuta el proceso de notificación para pólizas del ramo de Motos.

```apex
Id jobId = System.enqueueJob(
  new MotosLocalEmisionNotificationHandler('a70Qo00000CuOTlIAN')
);
```

### 1.4. Viajes

Ejecuta el proceso de notificación para pólizas del ramo de Viajes.

```apex
Id jobId = System.enqueueJob(
  new ViajesLocalEmisionNotificationHandler('0YTQo000000F0KfOAK')
);
```

---

## 2. CXC Renovación Arriendos

Este script realiza la llamada de emisión de renovación (`emisionCall`) específicamente para el producto de **Arrendamientos**. Si la respuesta del servicio de integración es exitosa, se actualiza el subestado de la póliza original a `"Renovación emitida"`.

### Instrucciones de uso

1. Reemplace el parámetro `'ID_POLIZA_RENOVACION'` por el ID de la póliza de renovación correspondiente.
2. Ejecute el script desde la consola anónima de Apex.

```apex
public static final String NEW_SUBSTATUS = 'Renovación emitida';
public static final String SUCCESS = 'success';
public static final String PROCESSPRODUCT = 'SURAEmisionRenovaciones__c';

public static void emisionCall(String renewalPolicyId, String producto){
  String proceso = 'SURA_ArrendamientoEmisionCall';
  Type t = Type.forName(proceso);
  SURA_EmisionCall emisionCall = (SURA_EmisionCall) t.newInstance();
  SURA_EmisionResponseDTO response = (SURA_EmisionResponseDTO) emisionCall.run(renewalPolicyId, producto);
  
  String originalPolicyId = [
    SELECT Id, RenewedFromPolicyId 
    FROM InsurancePolicy 
    WHERE Id = :renewalPolicyId 
    LIMIT 1
  ].RenewedFromPolicyId;
  
  if (response.status == SUCCESS) {
    update new InsurancePolicy(Id = originalPolicyId, Substatus = NEW_SUBSTATUS);
  }            
}

emisionCall('ID_POLIZA_RENOVACION', 'Arrendamientos');
```

---

## 3. CXC Renovación Otros (Viajes, Movilidad)

Para retransmitir la cuenta por cobrar (CXC) en renovaciones de otros ramos (como **Viajes** o **Movilidad**), se utiliza el método de envío manual directamente sobre el ID del registro de la CXC.

### Instrucciones de uso

1. Identifique el ID de la cuenta por cobrar (registro de `vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c`).
2. Reemplace `'ID_CXC'` con dicho identificador en el script.
3. Ejecútelo en la consola anónima de Apex.

```apex
envioCXCManual.envioCXC('ID_CXC');
```

---

## 4. Consultas y Procesos de Apoyo

### 4.1. Listado de Pólizas para Reenvío de CXC

Consulta SOQL útil para verificar el estado de integración de las entradas de cobro asociadas a una lista de pólizas específicas.

```sql
SELECT
  Id,
  vlocity_ins_fsc__InsurancePolicyId__r.Id,
  vlocity_ins_fsc__InsurancePolicyId__r.Name,
  vlocity_ins_fsc__InsurancePolicyId__r.IsRenewedPolicy,
  vlocity_ins_fsc__InsurancePolicyId__r.vlocity_ins_fsc__AttributesSelectedValues__c,
  SURANumeroDocumentoPago__c,
  vlocity_ins_fsc__Status__c,
  SURAStatusIntegration__c,
  LastModifiedBy.Name,
  FORMAT(CreatedDate)
FROM vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c
WHERE vlocity_ins_fsc__InsurancePolicyId__r.Name IN (LISTADO_POLIZAS_REENVIO_CXC)
```

### 4.2. Generación de Carátulas

Script Apex para forzar el reenvío de la carátula de marketing de una póliza.

```apex
SURAPaymentManager.sendCaratulaMarketing('0YTQo000000QSQTOA4');
```

### 4.3. Consultar Generación de CXC por Fecha (Histórico)

Consulta SOQL para buscar pólizas renovadas creadas hasta el día de hoy ordenadas por fecha descendente.

```sql
SELECT Id, Name, FORMAT(CreatedDate)
FROM InsurancePolicy
WHERE CreatedDate <= TODAY
  AND IsRenewedPolicy = True
ORDER BY CreatedDate DESC
```

### 4.4. Verificar CXC de Renovación (Creadas Hoy)

Consulta SOQL para verificar las pólizas renovadas que fueron creadas durante el día en curso.

```sql
SELECT Id, Name, FORMAT(CreatedDate)
FROM InsurancePolicy
WHERE CreatedDate = TODAY
  AND IsRenewedPolicy = True
```

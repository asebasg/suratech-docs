# Gestión de CXC

> **Nota:** Cambiar el nombre del producto en **plural y en español** según el código de producto:
>
> | Código | Producto        |
> |--------|-----------------|
> | 51     | Arrendamientos  |
> | 58     | Viajes          |
> | 54     | Motos y autos   |

---

## 1. Emisión de Póliza de Renovación

```apex
public static final String NEW_SUBSTATUS = 'Renovación emitida';
public static final String SUCCESS       = 'success';
public static final String PROCESSPRODUCT = 'SURAEmisionRenovaciones__c';
public static void emisionCall(String renewalPolicyId, String producto) {
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

## 2. Script CXC — Sin Renovación

```apex
Id jobId = System.enqueueJob(
    new ArriendosLocalEmisionNotificationHandler('ID_POLIZA')
);
```

---

## 3. Listado de Pólizas para Reenvío de CXC

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

---

## 4. Consultar Generación de CXC por Fecha

```sql
SELECT Id, Name, FORMAT(CreatedDate)
FROM InsurancePolicy
WHERE CreatedDate <= TODAY
  AND IsRenewedPolicy = True
ORDER BY CreatedDate DESC
```

---

## 5. Verificar CXC de Renovación (Hoy)

```sql
SELECT Id, Name, FORMAT(CreatedDate)
FROM InsurancePolicy
WHERE CreatedDate = TODAY
  AND IsRenewedPolicy = True
```

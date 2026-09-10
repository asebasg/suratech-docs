# Guía de Cancelación Manual de Pólizas

1. Ejecutar la query con las pólizas requeridas:

```soql
SELECT Id, Name, Status, CancellationReason, CancellationReasonType, SURAFecha_de_solicitud_de_cancelacion__c
FROM InsurancePolicy 
WHERE Name  IN (
    '584410108768',
    '584410106981'
)
```


2. Copiar y pegar el resultado en Excel, modificar los datos necesarios:

<img width="1496" height="161" alt="image" src="https://github.com/user-attachments/assets/6d91625c-5d99-40c2-af72-469a408ec50a" />

Nota: la fecha debe tener formato AAAA-MM-DD

3. Ir a Data import y hacer la actualización:

<img width="1535" height="722" alt="image" src="https://github.com/user-attachments/assets/dde53c69-31c9-4bbd-a6f1-9bbc07cdf174" />

4. Resultado esperado:

<img width="1454" height="281" alt="image" src="https://github.com/user-attachments/assets/5097816f-0717-4f00-a70c-671041fde3bc" />

Al correr la query nuevamente debe aparecer así:

<img width="1136" height="252" alt="image" src="https://github.com/user-attachments/assets/f49fa1d8-60b2-44c3-b63a-b25f387f6f61" />

## Cancelar recibos

1. Ejecutar la query con todas las facturas de la póliza:

> Reemplazar el valor `IdPoliza` por la ID de la póliza la cual se quieren cancelar los recibos.

```soql
SELECT Id, SURANumeroDocumentoPago__c, vlocity_ins_fsc__Status__c, SURAStatusIntegration__c FROM vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c  WHERE vlocity_ins_fsc__InsurancePolicyId__r.Id = 'IdPoliza'
```

2. Copiar y pegar el resultado en Excel, y cambiarles el estado a `Cancelado`.
3. Ir a Data import y hacer la actualización.

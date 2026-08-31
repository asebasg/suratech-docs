# Expedir contrato y carátula — Póliza renovada

***Nota:** Se debe reemplazar `ID_POLIZA_RENOVADA` con el Id de la póliza renovada correspondiente.*

```apex
Id renewalPolicyId = 'ID_POLIZA_RENOVADA';

for(String title : new List<String>{
   'Sura_Arrendamientos_CaratulaRenovada',
   'Sura_Arrendamientos_ContratoRenew'
}) {
   Map<String, Object> output =
       (Map<String, Object>) vlocity_ins.IntegrationProcedureService.runIntegrationService(
           'Arrendamiento_GeneratePDF',
           new Map<String, Object>{
               'PolicyId' => renewalPolicyId,
               'Template' => title,
               'Id' => renewalPolicyId
           },
           new Map<String, Object>()
       );
}
```

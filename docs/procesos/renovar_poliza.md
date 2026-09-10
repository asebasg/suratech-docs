# Renovar Póliza

Este script corresponde a la renovación de pólizas en SFI. Generalmente se ejecuta cuando existen polizas con renovación por cúmulo.

```apex
Id policyId = 'PolizaId';
 
List<InsurancePolicy> policyList = [
   SELECT Id, Name, NameInsuredId, Sura_LimiteIndemnizacion__c, Sura_PagosPendientes__c,
          SURAPoliticasRenovacion__c, SURAScoreRenovacion__c, Status,
         NameInsured.SURANumeroIdentificacion__c,
          SURAFamiliaProducto__c,
          SURATomador__c,
         SURATomador__r.SURANumeroIdentificacion__c,
          SourceQuote.SURALead__c,
         SourceQuote.SURALead__r.SURAIdentificadorEjecucion__c
   FROM InsurancePolicy
   WHERE Id = :policyId
];
 
if (policyList.isEmpty()) {
   System.debug('No se encontró la póliza');
} else {
   System.enqueueJob(
       new SURA_RiskServiceQueueable(
           policyList,
           new List<SFSura__EventLog_Subset__c>(),
           new List<InsurancePolicy>(),
           new Map<String, Object>()
       )
   );
   System.debug('Se encoló risk para la póliza.');
 
   System.enqueueJob(
       new SURA_RateServiceQueueable(
           policyList,
           new Map<String, Object>(),
           new List<InsurancePolicy>()
       )
   );
   System.debug('Se encoló score para la póliza.');
}
```

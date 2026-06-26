# Expedir poliza

```apex
 Quote prepoliza = [SELECT Id, vlocity_ins__EffectiveDate__c, vlocity_ins_fsc__PrimaryProducerId__c, SURALead__c, SURAFamiliaProducto__c FROM Quote WHERE Id = '0Q0Qo00000uaWnVKAU' Limit 1];
 
 String quoteId = prepoliza.Id;
 String leadId = prepoliza.SURALead__c;
 String producerId = prepoliza.vlocity_ins_fsc__PrimaryProducerId__c;
 Datetime fechaTime = prepoliza.vlocity_ins__EffectiveDate__c;
 String effectiveDate = fechaTime.format('yyyy-MM-dd', 'GMT');
 String familiaProducto = prepoliza.SURAFamiliaProducto__c;
 
 system.debug(quoteId);
 system.debug(leadId);
 system.debug(producerId);
 system.debug(effectiveDate);
 system.debug(familiaProducto);
SFSura.NotifyingProductHandler.issuePolicyAsync(quoteId, leadId, producerId, effectiveDate, familiaProducto);
```

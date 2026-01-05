public with sharing class topAccountWithOppController {
    @AuraEnabled(cacheable=true)
    
    public static List<Account> displayTopOppwithAcc() {
        List<Account> acclist = [SELECT Id, Name, AnnualRevenue, Industry, Phone, (SELECT Id, Name, CloseDate, Amount, StageName FROM Opportunities WHERE IsClosed = false ORDER BY Amount DESC LIMIT 5) FROM Account WHERE AnnualRevenue != null ORDER BY AnnualRevenue DESC LIMIT 10];
        return acclist;
    }
}
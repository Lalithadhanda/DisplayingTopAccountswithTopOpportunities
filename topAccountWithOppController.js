import { LightningElement, wire} from 'lwc';
import displayTopOppwithAcc from '@salesforce/apex/topAccountWithOppController.displayTopOppwithAcc';


export default class TopAccountWithOppController extends LightningElement {
    accColumns=[{'label':'Account Name','fieldName':'name','type':'text'},{'label':'Phone Number','fieldName':'phone','type':'phone'},{'label':'Annual Revenue','fieldName':'annualRevenue','type':'currency'},{'label':'Industry','fieldName':'industry','type':'text'}];
    accountsdata=[];
    oppsdata=[];
    errors='';
    selectedAccount;
    selectedAccountName;
    oppColumns=[{'label':'Opportunity Name','fieldName':'name','type':'text'},{'label':'Amount','fieldName':'amount','type':'currency'},{'label':'Closed Date','fieldName':'closeddate','type':'date'},{'label':'StageName','fieldName':'stagename','type':'text'}];
    
    @wire(displayTopOppwithAcc)wiredAccounts({data,error}){
        if(data){
            console.log('data is'+this.accountsdata);
          this.accountsdata= data.map((currItem)=>{
                return{id:currItem.Id,
                    name:currItem.Name,
                    industry:currItem.Industry||'',
                    phone:currItem.Phone||'',
                    annualRevenue:currItem.AnnualRevenue,
                    opportunities:currItem.Opportunities||''
                }
            })
            this.error=null;

        }
        if(error){
            console.log('error' +error);
            this.errors=error.body.message;
            this.accountsdata=null;

        }
    }
    handleRowSelection(event) {
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        const row=selectedRows[0];
        console.log('selected row',row);
        this.selectedAccount=row;
        this.selectedAccountName=row.name;
        const opportunities=row.opportunities|| [];
        console.log('Opportunities',opportunities);
        this.oppsdata = opportunities.map(currItem => ({
    name: currItem.Name,
    amount: currItem.Amount,
    closeddate: currItem.CloseDate,
    //annualRevenue: row.AnnualRevenue,  // From Account, not Opportunity
    stagename: currItem.StageName||''
}))
        }
    
    
    get hasOpportunities(){
        return this.oppsdata.length>0;
    }

    }

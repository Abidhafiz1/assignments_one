class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

  deposit(taka) {
        this.balance +=taka;
    }

   withdraw(taka){
        if(  taka>= this.balance){
            console.log("insufficient fund");
        }else{
            this.balance -=taka;
        }
        
   }
    getBalance() {
        return this.balance;
    }
    accountInformation(){
        console.log("Account Number: "+ this.accountNumber);
        console.log("ownerName: "+ this.ownerName);
    }
  
}

const account1 = new BankAccount(1001, "Abid", 1000);
const account2 = new BankAccount(1002, "Hafiz", 500);

account1.accountInformation();
account1.deposit(200);
account1.withdraw(100);

console.log("Balance " + account1.getBalance());

account2.accountInformation();
account2.deposit(200);
account2.withdraw(800);

console.log("Balance " + account2.getBalance());


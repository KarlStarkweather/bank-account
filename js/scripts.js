// Business Logic

function BankAccount(initialBalance, accountHolder) {
  this.balance = initialBalance;
  this.accountHolder = accountHolder;
  this.transactions = {};
}

function Transaction(amount) {
  this.timeStamp = Date.now();
  if(amount>=0) {
    this.type = "Deposit";
  } else {
    this.type = "Withdrawal";
  }
  this.amount = amount;
}

BankAccount.prototype.recordTransaction = function(amount) {
  let transaction = new Transaction(amount);
  this.transactions[transaction.timeStamp] = transaction;
} 



BankAccount.prototype.deposit = function(amount) {
  if (typeof(amount) === 'number') {
    if (amount >= 0) {
      return this.balance += amount;
      this.recordTransaction(amount);
    } else {
      alert ("must deposit a positive amount!");
    };
  } else {
    alert("must enter a number");
  };
};

BankAccount.prototype.withdrawal = function(amount) {
  if (typeof(amount) === 'number') {
    if (amount >= 0 && amount < balance) {
      return this.balance -= amount;
    } else {
      alert ("withdraw request/invaild");
    };
  } else {
    alert("must enter a number");
  };
};





let BankAccount = new BankAccount();
let accountHolder = new accountHolder("200", "Karl");
let contact2 = new Contact("100", "tod");
BankAccount.recordTransaction(amount);
addressBook.addContact(contact2);
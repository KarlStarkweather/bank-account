// Business Logic

function BankAccount(initialBalance, accountHolder) {
  this.balance = initialBalance;
  this.accountHolder = accountHolder; 
  this.transactions = {};
  this.transactionID = 0;
}

BankAccount.prototype.assignTransactionID = function() { 
  this.transactionID += 1; 
  return this.transactionID; 
};

function Transaction(amount,type) {
  const d = new Date();
  this.timeStamp = d.toISOString();
  this.type = type;
  this.amount = amount;
};

BankAccount.prototype.recordTransaction = function(transaction) {
  transaction.id = this.assignTransactionID(); 
  this.transactions[transaction.id] = transaction; 
}; 

BankAccount.prototype.deposit = function(amount) {
  if (typeof(amount) === 'number') {
    if (amount >= 0) {
      let t = new Transaction(amount,"Deposit");
      this.recordTransaction(t);
      console.log(this);
      return this.balance += amount;
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
      this.recordTransaction(amount, "Withdrawal"); 
      return this.balance -= amount;
    } else {
      alert ("withdraw request/invaild");
    };
  } else {
    alert("must enter a number");
  };
};





let b = new BankAccount(100,"Joe");
b.assignTransactionID;
console.log(b)


// let accountHolder = new accountHolder("200", "Karl");
// let contact2 = new Contact("100", "tod");
// BankAccount.recordTransaction(amount);
// addressBook.addContact(contact2);





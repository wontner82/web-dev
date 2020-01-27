// object

let myAccount = {
  id: 'Joakim Wöntner',
  expenses: 0,
  income: 0
}
// add expense
let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount
}

// addincome - add income property

let addIncome = function(account, amount) {
  account.income = account.income + amount
}

//resetaccount - zero all properties

let resetAccount = function(account) {
  account.income = 0
  account.expenses = 0
}

//getaccountsummary - msg function

let accSummary = function(account) {
  console.log(
    `${account.id} has $${account.expenses} in expenses and $${account.income} in income`
  )
}

addExpense(myAccount, 2)
addExpense(myAccount, 25)
addIncome(myAccount, 24)
addIncome(myAccount, 11)
addIncome(myAccount, 100)
accSummary(myAccount)
resetAccount(myAccount)
addIncome(myAccount, 11)
addIncome(myAccount, 100)
console.log(myAccount)

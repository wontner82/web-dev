const account = {
  name: 'Joakim Wöntner',
  expenses: [],
  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  }
}

// getAccSummary -> total up all expenses - nice string

const getAccSummary = function() {
  let totalExpense = 0
  this.expenses.forEach(expenses => {
    totalExpense = totalExpense + expenses.amount
  })
  return `${this.name} $${totalExpense} in expenses`
}

account.addExpense('lunch', 50)
console.log(getAccSummary())

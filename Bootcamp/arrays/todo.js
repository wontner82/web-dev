const todo = [
  {
    text: 'buy shoes',
    complete: false
  },
  {
    text: 'run 5km',
    complete: true
  },
  {
    text: 'join the swingers club',
    complete: false
  },
  {
    text: 'cook a meal',
    complete: false
  },
  {
    text: 'count all ants in the farm',
    complete: true
  }
]

// functon to delete a single Todo.
const deleteTodo = function(todo, searchText) {
  const index = todo.findIndex(function(todo, index) {
    return todo.text.toLowerCase() === searchText.toLowerCase()
  })
  todo.splice(index, 1)
}

// function to filter all not completed todos.
const GetThingsTodo = function(todo) {
  return todo.filter(function(todo) {
    return !todo.complete
  })
}

const sortTodos = function(todo) {
  todo.sort(function(a, b) {
    if (a.complete > b.complete) {
      return 1
    } else if (b.complete > a.complete) {
      return -1
    } else {
      return 0
    }
  })
}

sortTodos(todo)
console.log(todo)

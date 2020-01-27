let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}
console.log(myBook)
console.log(myBook.title)
console.log(myBook.pageCount)

console.log(`${myBook.title} by ${myBook.author}`)

// their name
// age
// location
// a string with properties

let person = {
  name: 'Joakim',
  age: 37,
  location: 'sweden'
}

console.log(
  `my name is ${person.name} I am ${person.age} old and live in ${person.location}`
)

person.age = 38

console.log(
  `my name is ${person.name} I am ${person.age} old and live in ${person.location}`
)

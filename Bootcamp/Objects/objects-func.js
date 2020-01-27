let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = getSummary(myBook)
let pageSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(pageSummary.pageSummary)

let farConv = function(degree) {
  return {
    farenheit: degree,
    kelvin: Math.round((kelvin = ((degree + 459.67) * 5) / 9)),
    celsius: Math.round(((degree - 32) * 5) / 9)
  }
}

let convert = farConv(74)
console.log(convert.farenheit)
console.log(convert.kelvin)
console.log(convert.celsius)

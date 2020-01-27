let greetUser = function() {
  console.log('Welcome User')
}

greetUser()

let square = function(num) {
  let result = num * num
  console.log(result)
}

square(5)

let convertFarToCels = function(farenheit) {
  let celsius = ((farenheit - 32) * 5) / 9

  return celsius
}

let tempOne = convertFarToCels(50)
let tempTwo = convertFarToCels(100)

console.log(tempOne)
console.log(tempTwo)

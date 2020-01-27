// let num = 124.47433

// console.log(num.toFixed(1))

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// let min = 10
// let max = 20
// let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomNumber)

// challenge area

let randomGuessGame = function(guess) {
  let min = 1
  let max = 5

  if (guess === Math.floor(Math.random() * (max - min + 1)) + min) {
    return 'your guess was correct'
  } else {
    return 'your guess was false'
  }
}

let game = randomGuessGame(2)
console.log(game)

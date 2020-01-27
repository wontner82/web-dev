function tipCalc(total, percent) {
  return `The bill is total ${total} and the tip is ${total *
    percent} when ${percent * 100}% tip is expected`
}

message = tipCalc(1875, 0.15)
console.log(message)

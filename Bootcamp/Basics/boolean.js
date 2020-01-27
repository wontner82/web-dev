let age = 85
let child = 7
let senior = 65
let isChild = age <= child
let isSenior = age >= senior

if (age >= 65) {
  console.log('senior discount applied')
}
if (age <= 7) {
  console.log('junior discount applied')
}
if (age > 7 && age < 65) {
  console.log('the rest')
}

let temp = 35

if (temp <= 12) {
  console.log('it is freezing outside')
} else if (temp >= 34) {
  console.log('its superhot outside')
} else {
  console.log('its nice go for it')
}

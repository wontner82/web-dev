// let name = ' Joakim Wöntner '

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.includes('J'))

// console.log(name.trim())

// function is valid password
// true if length is 8chrs or longer
// can not contain Password

let isPasswordValid = function(psw) {
  return psw.length >= 8 && !psw.includes('password')
}

console.log(isPasswordValid('joakim1'))
console.log(isPasswordValid('password89'))
console.log(isPasswordValid('rakanBAKANpupp'))
console.log(isPasswordValid('joapassword'))

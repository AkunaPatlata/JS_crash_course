// task 1

const distance = prompt('Enter your distance(in km)')

alert(`Your distance in miles is ${distance*0.621371}`)

//task 2

const hours = +prompt('Enter hours(0-23)')
const minutes = +prompt('Enter minutes(0-59)')

let hrsleft = 23 - hours
let minleft = 60 - minutes

alert(`You have ${hrsleft} hours and ${minleft} minutes left today.`)


// task 3

const number = prompt('Enter your number')

let ones = number % 10
let tens = Math.floor(number % 100 / 10)
let hundreds = Math.floor(number / 100)

alert(`Your backwards number is ${ones * 100 + tens * 10 + hundreds}`)

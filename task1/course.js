console.log('Hello world!')

//task 1

const year_of_birth = prompt('When were you born?')

console.log(`He was born in ${year_of_birth}`)

//task 2

const radius = prompt('Enter the radius of the circle')

console.log(`Circles area is ${Math.PI*(radius**2)}`)

//task 3

const distance = prompt('Enter the distance(in km)')

const time = prompt('Enter the time(in hours)')

console.log(`You need to travel ${distance/time}km per hour`)

//task 4

const dollar = prompt('Enter dollars amount')

const euros = dollar*0.93

console.log(`${dollar}$ in euros will be ${euros}€`)

//task 5

const gb = prompt('Enter the capacity of a flash drive in gb')

console.log(`So, you will be able to save ${Math.floor(gb*1.024/0.82)} files wich size is 820mb`)
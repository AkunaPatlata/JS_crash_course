// task 1.1

const number = +prompt('Enter your number')

switch(number){
    case 1: alert('Your symbol is !'); break;
    case 2: alert('Your symbol is @'); break;
    case 3: alert('Your symbol is #'); break;
    case 4: alert('Your symbol is $'); break;
    case 5: alert('Your symbol is %'); break;
    case 6: alert('Your symbol is ^'); break;
    case 7: alert('Your symbol is &'); break;
    case 8: alert('Your symbol is *'); break;
    case 9: alert('Your symbol is ('); break;
    case 0: alert('Your symbol is )'); break;
    default: alert('Wrong number!')
}

// task 1.2

let year = +prompt('Enter your year')

if (year % 4 == 0) {
    alert('Your year is leap')
} else{
    alert('Your year is not leap')
}

// task 1.3

let day = +prompt('Enter day')
let month = +prompt('Enter month')
let yearr = +prompt('Enter year')
let month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

if (yearr % 4 == 0) {
    month_days[1] = 29
}

if (day < month_days[month-1]){
    day += 1
}
else{
    day = 1
    if (month < 12){
        month += 1
    }
    else{
        month = 1
        yearr +=1
    }
}

alert(`Tomorrow will be ${day}.${month}.${yearr}`)

// task 2.1

const a = +prompt('Enter your first number to find sum')
const b = +prompt('Enter your second number to find sum')
let s = 0

for(let i=a; i <= b; ++i){
    s+=i
}

alert(`Your sum is ${s}`)

// task 2.2

let dig = +prompt('Enter your numbeeer:)')
let counter = 0


while(dig !== 0){
    dig = Math.floor(dig / 10)
    counter+=1
}

alert(`You have ${counter} digits in your number`)

// task 2.3
let m = []

for(let i = 0; i<10; ++i){
    const some_numbers = +prompt('Enter your number');
    m.push(some_numbers)
}

let positive = 0
let negative = 0
let zeros = 0
let even = 0
let ods = 0


for(let i = 0; i < 10; ++i){
    if (m[i] > 0){
        positive++
    } else if(m[i] < 0){
        negative++
    } else if(m[i] == 0){
        zeros++
    }

    if (m[i] % 2 == 0) {
        even++
    } else{
        ods++
    }
}

alert(`So we have ${positive} positive numbers, ${negative} negative, ${zeros} zeros, ${even} even numbers and ${ods} ods numbers`)

// task 2.4
let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let i = 0
let next = true;

do {
    next = confirm(`${dayOfWeek[i]}. Do you want to see the next day?`)
    i = (i + 1) % 7
} while (true)
     
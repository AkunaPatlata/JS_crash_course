// task 1.1

const randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 100));

alert(`Your arrey is ${randomArr}`)

// task 1.2

a = ''

for (let i = 0; i < 20; ++i){
    a+=`[${i+1}] - ${randomArr[i]}\n`
}

alert(a)

// task 1.3

alert(`Arrey in descending order ${randomArr.sort().reverse()}`)

// task 1.5

for(let i = 0; i < 20; ++i){
    if (randomArr[i] % 7 == 0){
        alert('Yes, there is a number that is a multiple of 7 in your arrey')
        break
    }
}

// task 1.7

counter = 0

for(let i = 0; i < 20; ++i){
    if(randomArr[i] % 2 == 0){
        ++counter
    }
}

alert(`You have ${counter} even numbers in your arrey`)

// task 1.4

for(let b = 10; b < 20; ++b){
    randomArr[b] = 0
}

alert(randomArr)

// task 1.6

for(let i = 0; i < 3; ++i){
    randomArr.shift()
}

alert(`Here is your arrey without first 3 elements ${randomArr}`)




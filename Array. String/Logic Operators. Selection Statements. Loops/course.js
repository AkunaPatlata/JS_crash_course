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

// // task 1.8

// v = []

// for(let i = 0; i < 20; ++i){
//     if(!(randomArr[i] in v)){
//         v.push(randomArr[i])
//     }
//     else{
//         alert('Duplicate found')
//         break
//     }
// }

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


// task 2.1

let string = prompt('Enter your sentence.')

let arrey_of_words = string.split(' ')

alert(`You have ${arrey_of_words.length - 1} spaces.`)

// task 2.2

function capitalize(your_string){
    alert(`Your new sentence is ${your_string[0].toUpperCase() + your_string.slice(1)}`)
}

capitalize(string)

// task 2.3

alert(`You have ${arrey_of_words.length} words in your sentence`)

// task 2.4

a = ''

for(let i = 0; i < arrey_of_words.length; ++i){
    a = a + arrey_of_words[i][0].toUpperCase()
}

alert(`Your abbreviation is ${a}`)

// task 2.5


if(string == string.split("").reverse().join("")){
    alert('Your string is palindrome')
} else{
    alert('Your string is not palindrome')
}

// task 2.6

let url = prompt('Enter your url')

function url_detail(url){

    let protocol = ''
    let domain = ''

    for(let i = 0; i < url.length; ++i){
        if(url[i] != ':'){
            protocol = protocol + url[i]
        } 
        if(url[i] == ':'){
            break
        }
    }
    url = url.replace(protocol+'://', '')

    for(let i = 0; i < url.length; ++i){
        if(url[i] != '/'){
            domain = domain + url[i]
        } 
        if(url[i] == '/'){
            break
        }
    }
    

    let path = url.replace(domain+'/', '')

    alert(`Protocol: ${protocol}\nDomain: ${domain}\nPath: ${path}`)
}

url_detail(url)

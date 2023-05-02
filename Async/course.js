function getPromise(message, delay) {
    return new Promise((resolve, reject) => {
        if(message == '')
            reject(null)
        else {
            setTimeout(() => {
                resolve("Your message is " + message);
            }, delay);
        }
    })
}

getPromise("test promise", 2000).then(function(data) {
    console.log(data)
})


function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
      let product = 1;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
          product *= arr[i];
        } else {
          reject("Error! Incorrect array!");
          return; // додали вихід з функції, щоб продовжити ітерації несенсенсу
        }
      }
      resolve(product);
    });
  }
  
  calcArrProduct([3, 4, 5]).then((result) => console.log(result)); // 60
  calcArrProduct([5, "user2", 7, 12]).then((result) => console.log(result)).catch((error) => console.log(error)); // "Error! Incorrect array!"
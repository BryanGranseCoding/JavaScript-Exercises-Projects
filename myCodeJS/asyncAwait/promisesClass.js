const promiseMethod = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

promiseMethod.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
})

//basis: https://www.youtube.com/watch?v=DHvZLI7Db8E
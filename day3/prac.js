// `setTimeout`
// Immediately Invoked Function Expression (IIFE)
// storing fucntions in variables
// passing functions as arguments can only be done as callbacks which is just a reference to the function and is typed
// without the parentheses, if you type the parenthese with the function name as an argument, it will be invoked immediately
// the function will be invoked immediately and the return value will be passed as an argument
// the function constructor is a function that creates a new function
// arrow functions

function roll(num, delay, nextRoll) {
    setTimeout(
        ()=> {
            console.log("roll no : " + num);
            if (nextRoll) nextRoll();
        }, delay
    );
    
}

// introduction to callback hell
roll(1, 1000, () => {
    roll(2, 2000, () => {
        roll(3, 3000, () => {
            roll(4, 4000)
        });
    });
});

// intro to promises
const promise = new Promise(function (resolve, reject) {
    console.log('My first promise');
    resolve('resolved');
    reject('rejected');
});

// promise.then(console.log).catch(console.log);

// doing the previous rollNo thing with promises
function getRoll(num, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("roll no :", num);
            resolve();
        }, delay);
    });
}

getRoll(1, 1000).then(() => {
    getRoll(2, 2000).then(() => {
        getRoll(3, 3000).then(() => {
            getRoll(4, 4000);
        });
    });
});
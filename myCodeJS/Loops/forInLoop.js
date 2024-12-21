/* 
NOTE: 
You can use 'FOR In' Loop in Array but must avoid because there might be an unexpected behaviour in it,
probably just use it in OBJECT only and not in Array itself
*/

let stocks = ['Apple', 'Google', 'Microsoft', 'Verizon'];

//display the data/value of array
//for iterables
for(let stock of  stocks) {
//console.log(stock);
}
//display the Index Number
//Meant to enumerate object properties
for(let stock in stocks) {
    //console.log(stock);
}
//For-In To Display Value Instead of Indexes stocks[index]
//Meant to enumerate object properties
for (let index in stocks) {
    //console.log(stocks[index]);
}
//iterating this in For-Loop will not work
//Iterating in For-In will work
let stock ={
    "name": "Microsoft",
    "industry": "Tech",
    "price": 220,
    "dividend": "2",
    getDivYield() {
        return this.dividend / this.price * 100;
    }
}
//this code here will return error 'stock' is not iterable
/* for (let property of stock) {
    console.log(property);
} */

console.log("For in:");
for (let property in stock) {
    if(stock.hasOwnProperty(property)) {
        if (typeof stock[property] === "function") {
            continue;
        }
    console.log(property + " ->" + stock[property]);
    
    }
    
}

//To fix in For Of Loop with that object 'stock
console.log("=========FOR-OF Loop==========:");
console.log("Object.keys:");
//Loop to display only keys of an Object
for (let property of Object.keys(stock)) {
console.log(property);
}

console.log("Object.entries: (both keys and values)");
//Loop to display the keys as well as the value of an Object
for (let [key, value] of Object.entries(stock)) {
    console.log(key + " ->" + value);
}
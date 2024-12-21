let nums = [1,2,3,4,5];

for (let n of nums){

    console.log(n);
}
//for-of loop that will get the specific index
console.log("Index Value pairs:");
for (let [index, value] of arr.entries()) {

    console.log(index, value);

}

//some examples
console.log("Strings:");
const string = 'abc';
for (const letter of string) {
    console.log(letter);
}
console.log("Set:");
const set = new Set(["a", "b", "c"]);
for (const element of set) {
    console.log(element);
}

console.log("Map:");
const map = new Map([
    [1, "One"], //["Value", KEY_VALUE]
    [2, "Two"],
    [3, "Three"],
]);

for (const entry of map) {
    console.log(entry);
}
// get access of the KEY of '${entry[0]}' and gets the VALUE of '${entry.at(1)}'
for (const entry of map) {
    console.log(`At key ${entry[0]} we have value ${entry.at(1)}`);
}

//if you only want the KEYS then invoke the keys() Values Method
console.log("Keys:");
for (const key of map.keys()) {
    console.log(key);
}
//if you only want the values then invoke the Values() Values Method
console.log("Values:");
for (const value of map.values()) {
    console.log(value);
}

/* 
Extracting Keys and Values from Object that has Function as well Using 'For OF Loop'
*/
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
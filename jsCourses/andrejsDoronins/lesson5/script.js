['Apple', 'Google', 'Microsoft'].forEach( x => console.log(x));

['Apple', 'Google', 'Microsoft'].forEach((x, i, arr) => console.log(x, i, arr));

['a', 'b', 'c', 'd', 'e', 'f'].forEach(repeat);
function repeat(str) {
    console.log(str.repeat(3));
}

let arrWithAbsentValues = [10, null, 20, undefined, 50];

for (const num of arrWithAbsentValues) {
    console.log("ForOf",num);
}

arrWithAbsentValues.forEach(num => console.log("ForEACH",num));

console.log('=======================');
//Adding array which this time put into index 10 the for-off will put empty index as unddefined whereas the forEACH escape the empty index
arrWithAbsentValues[10] = 100;

for (const num of arrWithAbsentValues) {
    console.log("ForOf",num);
}
console.log('--------------forEACH------------');
arrWithAbsentValues.forEach(num => console.log("ForEACH", num));

//Leson 7: while loop
let prices = [20, 50, 120, 200];
console.log('=======================');
console.log('While loop:');
let i = 0;
while (i < prices.length) {
    console.log(prices.at(i));
    i++;
}
console.log('=======================');
console.log('Do While loop:');
i2 = 10;
while (i2 < prices.length) {
    console.log("Code Never Run");
    i2++
}
//do while loop
do {
console.log("Code Will Run Once")
} while(i2 < prices.length);
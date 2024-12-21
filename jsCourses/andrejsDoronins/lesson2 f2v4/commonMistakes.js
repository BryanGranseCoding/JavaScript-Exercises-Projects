for (let step = 0; step < 4; step++) {
    console.log(step);
} 
/* 

Common Mistakes in LOOPING:

1. you might forget adding the "LET" keyword inside the parenthesis

2. You will get outside the boundaries like
the code with expression "<="
ex: 
let strings = ["a", "b", "c"];
for (let step = 0; step <= strings.length; step++) {
    console.log("Element num" + strings[i]);
}
//there is a an end result which is "undefined" because array index starts with 0;

3. You will get infinite loop if you do it like 
for (let i = 1; i < array.length; i + 2) {}
it should be: for (let i = 1; i < array.length; i = i + 2) {}

4. Initializing cetain variables inside the loop and not outside

let nums = [5, 10, 3]; // sum 18
for (let j = 0; j < nums.length; j++) {
    var total = 0;
    total += nums[j];
}
console.log("total: " + total);

the "var total = 0;"" should be declared outside the loop because if you do it inside when loop is iterating the value of total keep resetting to zero (0) instead = always use 'LET' and 'CONST' for better code and easier debugging

*/


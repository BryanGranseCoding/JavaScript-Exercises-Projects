//Display only a basic math random
//console.log(Math.random()) //pseudo-random number that's greater than or equal to 0 and less than 1

//Display value with Math.random() with Math.Floor();
const rs = (Math.random() * 10);
const sr = Math.floor(rs); //always rounds down and returns the largest integer less than or equal to a given number.
console.log(sr);

//for Math.ciel()
//Read Here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
//Exercise at Lesson 45 - [ TutPig.com ] Frontend Master - JavaScript - From First Steps to Professional


function multiplyNumbers(firstNumber, secondNumber){
                    const product = firstNumber * secondNumber;
                    console.log("The Product of the Two Numbers are: " + product);
                    return product;
}

//yell
let yell = "This is a yell statement";
function yellStatement(yell){
console.log(yell.toUpperCase());
return yell;
}
function yellStatement(yell){
    return yell.toUpperCase();
}
//yell2 (called anonymous function)
const yell = function(saying){
    return saying.toUpperCase();
}


// longerthan array value
const longArray = function(array1, array2){
    if(array1.length > array2.length){
        return true;
    }else{
        return false;
    }
}

//longerthan array value without if statement and no function
[1,2,3].length > [1,2].length

//longerthan array value without if statement and with function
function longerThan2(a1, a2) {
   /* const result = a1.length > a2.length;
    return result;*/
    return a1.length > a2.length;
}

//arrow functions [Lesson 46]
const add = (x, y) => x + y;

//arrow functions above sames as
function add(x, y){
    return x + y;
}

const addAndLog = (x, y) =>{
    let sum = x + y;
    console.log('The sum is', sum);
    return sum;
}

//Arrow Function Syntax [Lesson47]
const divide = (num1, num2) => num1 / num2;

const whisper = (stringValue) => stringValue.toLowerCase();
//arrow function =>output log with return
const whisper2 = (text) => {
    const lc = text.toLowerCase();
    console.log(lc);
    return lc;
}
//arrow fat function display who is the shorter array
const shorterThan = (array1, array2) => array1.length < array2.length; //added length to ensure javascript get the exact value of the array
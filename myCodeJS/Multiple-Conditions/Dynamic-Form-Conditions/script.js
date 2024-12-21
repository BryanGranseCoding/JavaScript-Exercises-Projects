const printHere = document.querySelector('.results').children;
//Getting the value of X and y then use the IF STATEMENT ABOVE;
const xValue = document.querySelector('#xName');
const yValue = document.querySelector('#yName');
const compare = document.querySelector('#compare');
//let displayOutput = printHere[0].textContent;
//function to get VALUES
printResult = (x, y) =>{
  if(x > y){
    printHere[0].innerHTML = `${x} is greater than ${y}`;
  }else if(x < y){
    printHere[0].innerHTML = `${x} is less than than ${y}`;
  }else if(x < y){
    printHere[0].innerHTML = `${x} is equal to ${y}`;
  }else { printHere[0].innerHTML = "Kindly Input Valid Number";}
  
};
compare.addEventListener('click', () =>{
  printResult(xValue.value, yValue.value);
});
/* compare.addEventListener("click", () =>{
  printHere[0].innerHTML = printResult(xValue.value, yValue);
}); */
//compare.addEventListener("click", displayResultX);
//compare.addEventListener("click", displayResultX);
//call anonymous function printResult1(5, 6);

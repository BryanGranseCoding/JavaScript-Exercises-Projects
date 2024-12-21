const printHere = document.querySelector('#results').children;
const autoPrint = printHere[0].textContent;
let x = 15, y = 15;
const printResult = () =>{
  if(x > y){
    printHere[0].textContent = `${x} is greater than ${y}`;
  }else if(x < y){
    printHere[0].textContent = `${x} is less than ${y}`;
  }else{
    printHere[0].textContent = `${x} is equal to ${y}`;
  }
  
};
autoPrint === printResult();
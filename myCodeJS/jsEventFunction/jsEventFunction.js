//this code is to update/change the text of a BUTTON
//Event Handlers can only run 1 function at a time
//lets try to use multiple function event listener at the same time
//This is EVENT HANDLER
let btn = document.querySelector('.test-btn');
//this first function method quite missy and need not to use in the project or not recommended
/* function firstFunction(e) {
    e.preventDefault();
    btn.innerHTML = "Finally Text Change!";
} */
function firstFunction() {
    btn.innerHTML = "Finally You Change Text and Color!";
}
//2nd function to change button background color
function secondFunction() {
    btn.style.backgroundColor = "red";
}
//use 3rd function to combine 2 function you want to work at the same time
//1st function is change text, 2nd is change color, and remove e on first function then instead put it on the 3rd function below
function btnClick(e) {
    e.preventDefault();
    firstFunction();
    secondFunction();
}

btn.onclick = btnClick;
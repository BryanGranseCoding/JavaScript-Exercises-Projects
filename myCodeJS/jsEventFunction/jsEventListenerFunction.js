////This is EVENT HANDLER useful interms of multiple action
let btn = document.querySelector('.test-btn');

function firstFunction(e) {
    e.preventDefault();
    btn.innerHTML = "YAY! Text Updated!"
}

/* function secondFunction() {
    btn.style.backgroundColor = "red";
} */
// you can pass on 3 parameters but the 3rd is optional only 2 is required
btn.addEventListener("click", firstFunction); //pointing the event that needs to listen
//btn.addEventListener("click", secondFunction); //calling second function

//add the function directly to the eventlistener
 btn.addEventListener("click", function(){
    btn.style.backgroundColor = "blue";
});

btn.addEventListener("click", function(){
    btn.style.color = "white";
});

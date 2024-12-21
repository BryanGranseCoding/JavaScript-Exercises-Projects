////This is EVENT HANDLER useful interms of multiple action
let btn = document.querySelector('.test-btn');
//pass in parameter called NAME
function firstFunction(e, name) {
    e.preventDefault();
    btn.innerHTML = name;
}


//add the anonymous function directly to the eventlistener
 btn.addEventListener("click", function(e){
    firstFunction(e, "Bryan Devs");
});

btn.addEventListener("click", function(){
    btn.style.color = "white";
    btn.style.backgroundColor = "blue";
});
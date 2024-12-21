let randomTxt = "";
const possibleString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=/-<_>";
const passwordLength = document.querySelector('#inputPassLength');
const resultPass = document.querySelector('.resultPass');
const msg = document.querySelector('.msg');
/* const randomPassword = (inputtedValue) =>{
    for (let i = 0; i < inputtedValue; i++){
        randomTxt +=  possibleString.charAt(Math.floor(Math.random() * possibleString.length));
        document.querySelector('.myPass').innerHTML = randomTxt;
    }
    //return randomTxt;
    return randomTxt;
} */

const randomPassword = () =>{
    for (let i = 0; i < passwordLength.value; i++){
        randomTxt +=  possibleString.charAt(Math.floor(Math.random() * possibleString.length));
    }
    return randomTxt;
}
//Event Listener Logs and Displaying on HTML PAGE (index.html)
const clickBtn = document.getElementById('clickMe');
clickBtn.addEventListener('click', () =>{
    if (passwordLength.value == ''){
        msg.textContent = "please input password length...";
        msg.classList.add('alert');
        console.log('please input password length...');
    }else{
const myPass = randomPassword(passwordLength.value);
resultPass.textContent = randomTxt;
msg.classList.remove('alert');
msg.textContent = "";
console.log("Your Password is: " + myPass);
    }

    
});



const msg = document.querySelector('.msg');
const form = document.querySelector('.my-form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const btn = document.querySelector('.btn');
const displayUsers = document.querySelector('#users');
/* 
RegExp or Regular Expression:
https://regexr.com/2rhq7
*/
//let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let validRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

btn.addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();
    msg.classList.remove('hidden');
    msg.classList.remove('success');
    if (userName.value === '' || email.value === ''){
        msg.classList.add('error');
        userName.focus();
        //userName.classList.add('input-error');
        //email.classList.add('input-error');
        msg.textContent = 'Please enter a username and email address';
        //setTimeout( () => {msg.remove();}, 2600);
        setTimeout( () => {msg.classList.add('hidden')}, 5000);

    }else if (!validRegex.test(email.value)){
        msg.classList.add('error');
        email.focus();
        msg.textContent = 'Please input a valid email address';
        //clearing text input
        //email.value = '';
        //userName.value = '';
        //setTimeout( () => {msg.remove();}, 2600);
        setTimeout( () => {msg.classList.add('hidden')}, 5000);
    } else {
        let li = document.createElement('li');
        li.append(document.createTextNode(`${userName.value} / ${email.value}`));
        msg.classList.add('success');
        msg.textContent = 'Success!';
        displayUsers.append(li);
        setTimeout( () => {msg.classList.add('hidden')}, 5000);
        //clearing text input
        email.value = '';
        userName.value = '';
        
    }
}
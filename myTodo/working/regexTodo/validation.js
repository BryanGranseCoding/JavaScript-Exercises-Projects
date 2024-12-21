// validation script here
//src: https://www.youtube.com/watch?v=r6I-Ahc0HB4&list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD
//https://github.com/iamshaunjp/regex-playlist

const inputs = document.querySelectorAll('input');

const regexPattern = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/,
    telephone: /^\d{11}$/,
    slug: /^[a-z\d-]{8,20}$/
    
};

//regex function validation base on users input
function validate(field, regex) {
     if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
    //console.log(regex.test(field.value));
}

for (let input of inputs) {

    input.addEventListener('keyup', (e) =>{
       //console.log(e.target.attributes.name.value);
       validate(input, regexPattern[e.target.attributes.name.value]);
    })
}

/* inputs.forEach(input => {
    input.addEventListener('keyup', (e) =>{
        console.log(e.target.attributes.name.value);
    });
}) */
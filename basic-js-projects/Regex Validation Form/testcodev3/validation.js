//TODO1: select all input fields in the DOM
const inputForm = document.querySelectorAll('input');
//TODO2: regular expression pattern
const regexExpression = {
    username: /^[a-z\d]{5,12}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/,
    telephone: /^[\d]{11}$/,
    slug: /^[a-z\d-]{8,20}$/
}
//TODO3: use ForEach Loop or For Of Loop
for (let input of inputForm) {
    input.addEventListener('keyup', (e) =>{
        console.log(e.target.attributes.name.value);
        validateInputField(input, regexExpression[e.target.attributes.name.value]);
    })
}
//TODO4: Create Function to validate and test fields value if valid then add CSS class else invalid CSS class

function validateInputField(fields, regexTest){
    if(regexTest.test(fields.value)){
        fields.className = 'valid';
    } else {
        fields.className = 'invalid';
    }
}

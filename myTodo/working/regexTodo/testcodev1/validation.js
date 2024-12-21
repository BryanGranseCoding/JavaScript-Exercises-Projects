//select all input fields in the DOM
const inputs = document.querySelectorAll('input');

//regular expression pattern
const regexPattern = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/,
    telephone: /^[\d]{11}$/,
    slug: /^[a-z\d-]{8,20}$/
}
//use ForEach Loop or For Of Loop
for (const input of inputs) {

   input.addEventListener('keyup', (e) =>{
    //console.log(e.target.attributes.name.value);
    validateInput(input, regexPattern[e.target.attributes.name.value]); //need ti put into array bracket since 'inputs' variable is a collection of HTML base on query seletor all input fields
   });

}
//Create Function to validate and test fields value if valid then add CSS class else invalid CSS class
function validateInput(fields, regex){

       if(regex.test(fields.value)){
            fields.className = "valid";
       } else {
        fields.className = "invalid";
       }
}
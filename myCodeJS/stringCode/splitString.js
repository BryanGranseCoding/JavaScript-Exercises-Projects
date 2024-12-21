const url1 = {"status":"success","message":"https://images.dog.ceo/breeds/pomeranian/n02112018_6227.jpg"};

const mainUrl = url1.message;

const dogBreed = mainUrl.split('/'); //split the URL started from '/' and turm it into ARRAY

//console.log(dogBreed[4]);

// Code to "DESTRUCTURING" String in array
const fullName = "Bryan Devs Programmer";
const splitName = fullName.split(' '); // Split String
//console.log(splitName); //Display each string
let [firstname, middle, skills] = fullName.split(' '); // assign value to each string

/* test it and call using 'firstname' 'middle' or 'skills' */
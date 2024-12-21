const url1 = {"status":"success","message":"https://images.dog.ceo/breeds/pyrenees/n02111500_3672.jpg"}
const url2 = {"status":"success","message":"https://images.dog.ceo/breeds/poddle-standard/n02112018_6227.jpg"};
//extract dog breed in object
const url3 = url1.message;
let unsplitUrl = url3.split('/')[4]; //Split URL above and get the Dog Breed name 'poddle-standard'
let splitBreed = unsplitUrl.split('-'); // get rid the dash '-' from a url dog breed name 'poddle-standard' | ['poddle', 'standard']

let [breed, variety] = splitBreed; // Destructuring String "['poddle','standard']"

let breedName = [variety, breed].join(" "); // OUTPUT: ' pyrenees' |=> Issue: It returns a space then dog breed name (We need to use to trim() method in string to get rid the space)

let singleBreedString = breedName.trim();


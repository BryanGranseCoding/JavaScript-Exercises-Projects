const url1 = {"status":"success","message":"https://images.dog.ceo/breeds/poddle-standard/n02112018_6227.jpg"};
//extract dog breed in object
const url2 = url1.message;
let unsplitUrl = url2.split('/')[4]; //Split URL above and get the Dog Breed name 'poddle-standard'
let splitBreed = unsplitUrl.split('-'); // get rid the dash '-' from a url dog breed name 'poddle-standard' | ['poddle', 'standard']
let breedReverse = splitBreed.reverse(); // from "['poddle','standard']" to ["standard", "poddle"]
let dogName = breedReverse.join(" "); // Output: standard poodle | output array and remove comma (,) in it using join

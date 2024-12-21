let log = console.log;
const siblings = [
    {name: "Bryan", nickname: "Bry", age: 28},
    {name: "Ian A", nickname: "Ayana", age: 35},
    {name: "Ian V", nickname: "Ayanv", age: 12},
    {name: "Flordeliza", nickname: "flor", age: 24},
    {name: "Kristel Joyce", nickname: "Joy", age: 22},
    {name: "Francis", nickname: "Dodong", age: 19},
    {name: "Floresto III", nickname: "Toto", age: 13}
            ];
const items = [1, 2, 3, 4, 5];
// Use Find Method
const findUnderAge = siblings.find(s => s.age <= 17);

// Use Every Method to Check IF All Age in Array is below 18
const ageBelow19 = siblings.every(s => s.age <= 18);

// Use Filter to store the nichname that ends with letter "Y"
const newSiblings = siblings.filter(s => s.nickname.endsWith('y'));

//FILTER: filtering array if there is an age below 17 years old
const notLegalAge = siblings.filter(s => s.age <= 17);

// Check if There is an age on Object array below 17
const findUnderAge1 = siblings.some(s => s.age <= 17);

// Reduce: Use reduce method to add value (need 2 parameters) add Brackets since we have 2 parameters here
const newTotalAge = siblings.reduce((NewAgeValue, currentAge) => {
            return currentAge.age + NewAgeValue;
}, 0); // ) here after Bracket is a starting Point value

// forEach: Similar to ForeachLoop
/* siblings.forEach((newSibs1) => { log(newSibs1.name) }) */

// INCLUDES: check if there is a particular Value included in array that describe in a code below
const IncludedSibs = items.includes(2);

/* const sibz = siblings.find( (sib) =>{
        return sib.age <= 18;
})
 */


log(IncludedSibs);

//log Array Result using For OF Loop (change value above and put it below)
/* for (let bryanDevs of notLegalAge){
    log(bryanDevs.nickname);
}  */
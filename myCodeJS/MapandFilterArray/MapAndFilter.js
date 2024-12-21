const siblings = [
    {name: "Bryan", nickname: "Bry"},
    {name: "Ian A", nickname: "Ayana"},
    {name: "Ian V", nickname: "Ayanv"},
    {name: "Flordeliza", nickname: "flor"},
    {name: "Kristel Joyce", nickname: "Joy"},
    {name: "Francis", nickname: "Dodong"},
    {name: "Floresto III", nickname: "Toto"}
            ];

const names = siblings.map(s => s.name); //use Map method Function to display only the name from SIBLINGS ARRAY

//use Filter to display only the Nickname that ends with "Y"
const endInY = siblings.filter(s => s.nickname.endsWith("y"));

//Next Example
let prices = [20, 50, 120, 200];

let filtered = prices
            .filter(price => price > 100)
            .map(price => (price / 3).toFixed(1).toString().concat(" usd"));
            
console.log(filtered);
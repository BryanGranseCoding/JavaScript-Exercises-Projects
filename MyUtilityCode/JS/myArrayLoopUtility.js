////UTILITY 1: Utility To add Data in Object
const friend1 = {
    name: 'Laurence',
};

const friend2 = {
    name: 'John',
};

const friend3 = {
    name: 'Jane',
};
const friend = {
    name: 'Bryan Devs',
    age: 30,
    gender: 'male',
    location: {
        city: 'Davao',
        country: 'Philippines',
        addresses: 'Purok 5-B'
        }
}
const friends = [friend1, friend2, friend3]; 
//This will update the object array friends which will add entry of--> last: 'Smith'
for (const[key, value] of Object.entries(friends)) {
    console.log(key);
    friends[key].last = 'Smith';
}
console.log(friends);
// <-- END of Utility -->

////UTILITY 2: 

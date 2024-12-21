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
//console.log(friends);

//for IN to get the key of an Object
for (const key in friend) {
   //console.log(key);
   //console.log(friend[key]);
}

//console.log(Object.entries(friends)); // give you all of the array
//Display all declread data in the Object.entries
for (const [key,value] of Object.entries(friend)){
    console.log(key,value);
    //console.log(value.name); 
}

//TODO: Loop through that initial 'friends' array and add 'SMITH' last to each value
/* for (let i = 0; i < friends.length; i++){
    friends[i].name = friends[i].name + " Smith";
    console.log(friends[i].name);
} */
//This will update the object array friends which will add entry of--> last: 'Smith'
for (const[key, value] of Object.entries(friends)) {
    console.log(key);
    friends[key].last = 'Smith';
}
console.log(friends);
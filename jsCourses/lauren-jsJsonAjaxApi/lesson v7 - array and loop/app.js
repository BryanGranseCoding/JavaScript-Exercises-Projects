const friend = ['John', 'Doe', 'Smith'];
console.log(friend);
console.log(friend[0]);

const friend1 = {
    name: 'John',
};

const friend2 = {
    name: 'Doe',
};

const friend3 = {
    name: 'Smith',
};

const friends = [friend1, friend2];
friends.push(friend3);
//console.log(friend);

//for loop
for (let i = 0; i < friends.length; i++) {
   //console.log("Result Via For Loop: ", friends[i].name);
}

//for each loop
/* friends.forEach(function(item, index, array) { */
 //console.log(item.name)   
/* })
friends.forEach(res => console.log("Result Via Arrow Function: ", res.name)); */

//for of loop
for (let item of friends) {
    //console.log("Result Via For OF Array: ", item.name);
}

//for IN loop
for (ind in friends) {
    //console.log(ind)
   // console.log(friends[ind].name)
}

//Create a new object array of friends
const friendsList = ['John', 'Doe', 'Steven', 'Linda', 'Jane'];
const newArray = []

friendsList.forEach(item => {
    console.log(item);
    let temp = {
        name: item
    }
    console.log(temp);
    newArray.push(temp);
});
console.log(newArray);
//newArray[2].name;
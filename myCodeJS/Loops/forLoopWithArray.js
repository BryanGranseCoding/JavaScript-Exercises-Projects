const resultNickname = document.querySelector('.display');
const siblings = [
        {name: "Bryan", nickname: "Bry"},
        {name: "Flordeliza", nickname: "flor"},
        {name: "Kristel Joyce", nickname: "Joy"},
        {name: "Francis", nickname: "Dodong"},
        {name: "Floresto III", nickname: "Toto"}
                ];
 const nicknames = siblings.map(n => n.nickname + " is Awesome");  // using map() method to declare above array into a new array so NICKNAMES variable is now a new array that holds the value of nickname in mother array
    
//resultNickname.textContent = nicknames;
//Display Using FOR OF Loop
for (let names of nicknames){ // using FOR OF Loop to display all nicknames added by a string 'is awesome' so expected result should be like "Bry is Awesome"
  console.log(names);
  
}
//display using FOR Loop
for(let nameLoop = 0; nameLoop < nicknames.length; nameLoop++){
  
  console.log(nicknames[nameLoop]);
}
//constructor function
function Userdata(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
   /*  this.getCurrentYear = () =>{
        return `Current Year: ${this.dob.getFullYear()}`;
    }
    this.getFullName = () =>{
       
    } */
}

//Function Constructor Prototype
Userdata.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
Userdata.prototype.getCurrentYear = function(){
    return `Current Year: ${this.dob.getFullYear()}`;
}

//class constructor
class Userdata1 {
    constructor(firstName1, lastName1, dob1) {
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
        this.dob1 = new Date(dob1);
    }

    getFullName1() {
        return `${this.firstName1} ${this.lastName1}`;
    }
    getCurrentYear1() {
        return `Current Year: ${this.dob1.getFullYear()}`;
    }

}

//instantiate function constructor
let user1 = new Userdata("John", "Doe", '2-14,2023');
let user2 = new Userdata("Mary", "Doe", '2-15,2023');

//instantiate class constructor
let user3 = new Userdata1("John", "Doe", '2-14,2023');
let user4 = new Userdata1("Mary", "Doe", '2-15,2023');

console.log("Class Constructor: ", user3.getFullName1());
console.log(user1.getFullName());
console.log(user2.getCurrentYear());
console.log("Class Constructor: ", user4.getCurrentYear1());
//console.log(user1);

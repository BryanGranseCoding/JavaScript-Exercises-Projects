class Person {
    constructor(firstname, lastName, address, id) {
        this.firstname = firstname;
        this.lastName = lastName;
        this.address = address;
        this.id = id;
    }

    getFullName = () =>{
        console.log(`${this.firstname} ${this.lastName}`);
    }

    getId = () =>{
        console.log(`ID: ${this.id} : ${this.address}`);
    }
}

const person1 = new Person('John', 'Doe', '123 Main Street', 1);
person1.getFullName();
person1.getId();

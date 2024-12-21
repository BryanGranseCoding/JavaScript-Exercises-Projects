let sales: number = 123_456_789;
let course: string = 'Typescript';
let is_published: boolean = true;
let level;
//let numbers: number[] = [];
let user: [number, string] = [1, "bryanDevs"];

/* function calculateTax(income:number, taxYear = 2022): number {
 // * let tax: number = income * 0.08;
 // return tax; */
/*  if (taxYear < 2022)
 return income * 1.2;
 return income * 1.3;
 
}

calculateTax(10_000); */
//Pascal case: Type Aliases
//Below is reusable
/* type Employee = {
    readonly id: number,
     name: string,
     retire: (date: Date) => void
    }
//Alias above is being use below
let employee: Employee {
} = { 
    id: 1,
    name: 'bryanDevs',
    retire: (date: Date) => {
        console.log(date);
    }
}; */

//Union Types | //Narrowing
/* function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
    return weight * 2.2;
    else
    return parseInt(weight) * 2.2;
}

kgToLbs(10)
kgToLbs('10kg'); */

//Intersection Types in Action
/* type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {} ,
    resize: () => {}
}
 */

//Literal types (To limite the values)
/* type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch'; */

//Nullable Types
/* function greet(name: string | null | undefined){
    if (name)
    console.log(name.toUpperCase());
    else
    console.log('Hola!');
}
greet(null); */

// Optional Chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if (customers !== null && customers !== undefined)
// customer?.[0]

//Optional call
let log: any = null;
log?.('a');
var sales = 123456789;
var course = 'Typescript';
var is_published = true;
var level;
//let numbers: number[] = [];
var user = [1, "bryanDevs"];
function calculateTax(income, taxYear) {
    /* let tax: number = income * 0.08;
    return tax; */
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);

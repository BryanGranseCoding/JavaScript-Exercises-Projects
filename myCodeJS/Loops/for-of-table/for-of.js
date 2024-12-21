const arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}
//can assign const in for-of loop
console.log("Index Value pairs:");
for (let [index, value] of arr.entries()) {

    console.log(index, value);

}

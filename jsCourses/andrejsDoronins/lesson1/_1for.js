
console.log("Classic loop");
for (let step = 0; step <= 4; step++) {
    console.log('Walking east one step: ' + step);
}

console.log("Going back backwards");
for (let i = 5; i > 0; i--) {
    console.log('Walking west one step: ' + i);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 1; i < (array.length / 2); i = i + 2) {
    console.log('Every Second Element is:' + i );
}
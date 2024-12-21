console.log("Strings:");
const string = 'abc';
for (const letter of string) {
    console.log(letter);
}
console.log("Set:");
const set = new Set(["a", "b", "c"]);
for (const element of set) {
    console.log(element);
}

console.log("Map:");
const map = new Map([
    [1, "One"], //["Value", KEY_VALUE]
    [2, "Two"],
    [3, "Three"],
]);

for (const entry of map) {
    console.log(entry);
}
// get access of the KEY of '${entry[0]}' and gets the VALUE of '${entry.at(1)}'
for (const entry of map) {
    console.log(`At key ${entry[0]} we have value ${entry.at(1)}`);
}

//if you only want the KEYS then invoke the keys() Values Method
console.log("Keys:");
for (const key of map.keys()) {
    console.log(key);
}
//if you only want the values then invoke the Values() Values Method
console.log("Values:");
for (const value of map.values()) {
    console.log(value);
}
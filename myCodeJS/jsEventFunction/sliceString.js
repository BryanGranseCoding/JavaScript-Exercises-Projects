const DevsName = "Bryan Devs";
const firstSlice = document.querySelector('#fnameSlice');
const secondSlice = document.querySelector('#lastSlice')
const noteCode = document.querySelector('#noteCode');
// Slice String of the Clickable Button from index.html
const fName = DevsName.slice(0, DevsName.indexOf(' '));
const lName = DevsName.slice(DevsName.indexOf(' ') + 1); // add 1 to ignore space

firstSlice.textContent = fName;
secondSlice.textContent = lName;

//displaying note
const SliceNoteCode = "This code is slice in Javascript check source code sliceString.js!";
noteCode.textContent = SliceNoteCode;
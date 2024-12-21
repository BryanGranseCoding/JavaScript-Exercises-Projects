//UTILITY 1: A function that display object data from .json file with forEach Loop
function addData(data) {
    let html = '<h1>Results</h1>';
    data.forEach(person => {
        console.log(person);
        html += `<div> ${person.first} ${person.last}
        (${person.id})</div>`;
    })
 output.innerHTML = html;
}
// <-- End of Utility function -->

//UTILITY 2: A callback function that will remove negative numbers
const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// Remove negative numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
// Display Result
document.getElementById("demo").innerHTML = posNumbers;
// <-- End of Utility function -->

//UTILITY 3: Creating Element with Factory Function (Object Inside Function)
function createElement(type, text, color){
  const el = document.createElement(type);
  el.innerText = text;
  el.style.color = color;
  document.body.append(el);
  return {
      el,
      createText(text) {
         el.innerText = text;
      },

      setColor(color) {
          el.style.color = color;
      }
  }
}
/*
invoking functions
const div = createElement('div', 'Hi This is Bryan Devs', 'red');
*/
// <-- End of Utility function -->

//UTILITY 4: 
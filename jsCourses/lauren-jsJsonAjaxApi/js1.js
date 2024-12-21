const btn = document.querySelector('#btn');;
const output = document.querySelector('.container');
const url = 'temp1.json';

//when button is click we fetch the temp1.json file
btn.addEventListener('click', () => {
    //console.log('clicked');
    fetch(url)
      .then(response => response.json())
      .then(data => {
            addData(data); // calling function addData()
      })
})
// extractubg the Json object from temp1.json using function below with forEACH loop
function addData(data) {
    let html = '<h1>Results</h1>';
    data.forEach(person => {
        console.log(person);
        html += `<div> ${person.first} ${person.last}
        (${person.id})</div>`;
    })

    output.innerHTML = html;

}
const button = document.querySelector('#fetchButton');
const outputJS = document.getElementById('outputJS');
const url = "testCoding.json";

button.addEventListener('click', () =>{

    fetch(url).then(response => response.json())
              .then(data => displayData(data))
              .catch(error =>{
                throw new Error("Error fetching data: " + error)
              })
});

function displayData(data) {
    let html = '';
    data.forEach(d =>{
        html += `<div>${d.first} ${d.last} - ${d.id}</div>`;
    });
    outputJS.innerHTML = html;
}
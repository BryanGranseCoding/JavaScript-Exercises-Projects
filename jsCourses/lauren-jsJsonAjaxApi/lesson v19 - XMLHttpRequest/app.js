const url = './data.json';
const output = document.querySelector('.output');

let xHR = new XMLHttpRequest();

console.log(xHR)
xHR.open('GET', url);
xHR.responseType = 'json';
xHR.onload = function() {
    console.log(xHR.response);
    let data = xHR.response;
    data.books.forEach(result => {
        output.innerHTML += `${result.title}<br />`;
    })
}
xHR.send();
console.log(xHR);

/* fetch(url)
    .then(response =>{
        return response.json();
    })
    .then(data => {
        data.books.forEach(result => {
            output.innerHTML += `${result.title}<br />`;
        })
    })
    .catch(error => {
        console.log(error);
    }) */
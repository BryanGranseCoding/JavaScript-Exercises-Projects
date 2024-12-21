const url = './data.json';
const output = document.querySelector('.output');
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.books.forEach(result => {
            output.innerHTML += `${result.title}<br />`;
        })
    })
    .catch(error => {
        console.log(error);
    }) 
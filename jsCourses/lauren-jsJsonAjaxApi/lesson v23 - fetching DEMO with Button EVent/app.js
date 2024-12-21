const url = 'https://randomuser.me/api/?results=5';
const tableData = document.querySelector('#dataOutput');
const generateDATA = document.getElementById('generateDATA');

generateDATA.addEventListener('click', (e) => {
    loadData();
    console.log(e);
})

function loadData(){
    tableData.innerHTML = "";
fetch(url).then(res => {return res.json()})
.then(data => {
    console.log(data.results);
    const output = data.results.map(val =>{
        return `
        <tr class="table">
        <th scope="row">${val.name.title} ${val.name.first} ${val.name.last}</th>
        <td>${val.gender}</td>
        <td>${val.email}</td>
        <td><img class="img-thumbnail rounded-circle" src="${val.picture.large}"></td>
        </tr>
        `});

        tableData.innerHTML += output;
});
}
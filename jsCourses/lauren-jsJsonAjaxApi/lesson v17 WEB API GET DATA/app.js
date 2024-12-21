let display = document.querySelector('.output');

const url = 'https://www.discoveryvip.com/shared/json.php?f=peopledata1';

fetch(url).
then(response =>{ return response.json(); })
.then(data =>{
     data.data.forEach(val =>{
        //display.textContent += `${val.firstName} ${val.lastName}`;
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = val.firstName + ' ' + val.lastName;
        ul.append(li);
        ul.style.listStyleType = 'circle';
        document.body.append(ul)
     })   
})
.catch(err =>{ 
    console.log(err)
})
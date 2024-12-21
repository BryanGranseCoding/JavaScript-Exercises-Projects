const url = 'https://reqres.in/api/users?page=2';

// Declaring VARIABLES
const imageData = document.querySelector('#imageData');
const basicData = document.querySelector('#basicData');

fetch(url).then(response =>{ return response.json(); })
.then(data =>{

    data.data.forEach(val =>{

        //DISPLAYING IMAGES
        const img = document.createElement('img');
        img.src = val.avatar;
        img.classList.add('rounded-circle');
        imageData.insertBefore(img, imageData.childNodes[0]);

        //DISPLAYING DATA
        const p = document.createElement('p');
        p.innerHTML = `NAME: ${val.first_name} ${val.last_name} <br> ${val.email} <br> ID: ${val.id} <br> AVATAR URL: ${val.avatar} <br><br>`;
        basicData.insertBefore(p, basicData.childNodes[0]);
    })
})
.catch(err =>{ console.log("Error Fetching DATA...", err);})
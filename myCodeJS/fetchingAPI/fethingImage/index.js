fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg")
.then(response => {
    return response.blob();
}).then(blob =>{
    console.log(blob);
    document.getElementById('myImage').src = URL.createObjectURL(blob);
}).catch(error => {
    throw new Error ("Error fetching image: " + error);
});
const url = "https://www.reddit.com/r/test/top/.json?limit=5";

fetch(url).then(response => { return response.json() })
.then(function (objData){
console.log(objData.data.children);
objData.data.children.forEach(val =>{
    console.log(val.data.title);
})

}).catch(err => {
    console.log(err);
});
let dataVal = [];
const q = document.getElementById("data");
const button = document.getElementById("saveBtn");
let success = document.getElementById("successSave");
let failed = document.getElementById("failedSave");
let displaydata = document.getElementById("displaydata");

    button.addEventListener("click", (e) => {
        if (dataVal.includes(q.value) || q.value === ""){
        console.log("data already exists! / No Data Inputted")
        failed.classList.add("failedSaveShow");
        setTimeout(() =>{
        failed.classList.remove("failedSaveShow");
    }, 1000);
        /*const newText = document.createElement("p")
        const pContent = document.createTextNode("data already exists! / No Data Inputted")
        newText.appendChild(pContent);
        document.body.append(newText, success);*/
        q.value = "";
        clearDiv();
    } else {
        dataVal.push(q.value); 
        success.classList.add("successSaveShow");
        q.value = "";
        
        setTimeout(() =>{
        success.classList.add("successSaveHide");
        success.classList.remove("successSaveShow");
    }, 1000);
    }
    //console.log(dataVal)
     /*Display Array to Table*/
     clearDiv()
     for (data of dataVal) {
       displaydata.innerHTML += `${data} <br />`;
    }
    })
        //clear data on DIV
   function clearDiv() {
     // access the div element and use the replaceChildren() method to clear the div content
     displaydata.replaceChildren();
  }
  function clearData() {
    displaydata.replaceChildren();
  }

  /*Delete Array Data*/
  const deleteData = document.getElementById("deleteAll");
  deleteData.addEventListener("click", (e) => {
    deleteAllData();
    e.preventDefault();
    clearData();
    
    console.log(e);
  })

  function deleteAllData() {
    dataVal.splice(0, dataVal.length);
  }
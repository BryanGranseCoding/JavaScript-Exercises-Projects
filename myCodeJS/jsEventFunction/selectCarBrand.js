//Select Option and Display A Car***************
let selectCar = document.querySelector('#carOptionBrand');
let selectCar2 = document.querySelector('#carOptionBrand').children;
//event to display selected CAR
selectCar.addEventListener('change', function(e){
     const result = document.getElementById("displayResult");
     result.textContent = `Your Car is: ${e.target.value}`;
});
//Event to put color on a display selected car
selectCar.addEventListener('change', (e) =>{ 
    const highLightText = document.querySelector('#displayResult');
    highLightText.style.backgroundColor = "#acc9e7";
});
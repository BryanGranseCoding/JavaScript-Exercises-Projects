function carFactories(brand) {

    //carBrand function object below
    return { carBrand() {
        return `${brand}`;
    }

        }
}
//
function carPaint(color){
    //declaring an object with a function inside of it
    const carColor = {
        paintCar() {
            return `${color}`;
        }
    }
    return carColor;
}

//enheriting the factory functions
const myCar = carFactories('Raptor');
const myCarColor = carPaint('Red');

console.log(`My Car is ${myCar.carBrand()} and the color is ${myCarColor.paintCar()}`);


class Cars{

constructor(name, brand, price){
		this.name = name;
		this.brand = brand;
		this.price = price;

}

carInfo(){

console.log(`Your car name is ${this.name}, and brand is ${this.brand} and price is ${this.price}`)

}
}

const fullInfoCar = new Cars("SUV", "Nissan", 1000000);
fullInfoCar.carInfo();
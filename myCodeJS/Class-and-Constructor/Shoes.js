class Shoes{

    constructor ( brandName, size, price){

        this.size = size;
        this.brandName = brandName;
        this.price = price;
    }


    addidas(){

        console.log(`Your brand name is: ${this.brandName} and the shoes size is ${this.size}, and price is ${this.price}`);
    }

    nike(){

        console.log(`Your brand name is: ${this.brandName} and the shoes size is ${this.size}, and price is ${this.price}`);
    }

}

const myShoes = new Shoes("Addidas", "5.7 inch", 600); // the arguments here should also same on the parameters

myShoes.addidas();
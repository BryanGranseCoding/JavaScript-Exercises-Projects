const branding = [
    {brand: "Addidas", price: 1299},
    {brand: "Nike", price: 1249},
            ];
// setTimeout to use Asynchronous JS and a 'reduce()' method to get the total money spend base on the array 'branding.price'

const totalSpend = branding.reduce((total, currentPrice) => {
    return currentPrice.price + total;
}, 0)

 setTimeout(() => {
    console.log(totalSpend);
}, 2000);

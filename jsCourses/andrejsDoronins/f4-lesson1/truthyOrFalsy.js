let stock_1 = {
    "name": "Google",
    "dividend": 0
};

let stock_2 = {
    "name": "Microsoft",
    "dividend": undefined,
};

let stocks = [stock_1, stock_2];
let zeroDividenStocks = [];

for (let stock of stocks) {
    if(!stock.dividend) {
        console.log(`${stock.name} does not pay a dividend`);
        zeroDividenStocks.push(stock);
    }
}

//some pitfall examples
// if a company pays $1 per year, for every share you own, and the current share price is '$100 => 1%', '$50 => 2%'
function calculateDividendYield(divPerShare, currentPrice) {
        if (!divPerShare || !currentPrice) {
            throw new Error('Missing parameter divPerShare or currentPrice');
        }
    return divPerShare / currentPrice * 100;
}

//invoke function
console.log(calculateDividendYield(1, 100)); // 1%
console.log(calculateDividendYield(1)); //invoke with missing value or arguments ERROR
console.log(calculateDividendYield(0, 100)); // Error, a false positive, because 0 is falsy


// new sample
function calculateDividendYield_v2(divPerShare, currentPrice) {
    if (divPerShare === 0) {
        return 0;
    }
    if (currentPrice <= 0) {
        throw new Error('Expecting price to be greater than 0');
    }
    if (!divPerShare || !currentPrice) {
        throw new Error('Missing parameter divPerShare or currentPrice');
    }
    return divPerShare / currentPrice * 100;

}

//console.log(calculateDividendYield_v2);
class Portfolio {
    constructor(stocksPct, bondsPct) {
        this.stocksPct = stocksPct;
        this.bondsPct = bondsPct;
    }
}

function generatePortFolio(riskTolerance) {

    switch (riskTolerance) {
        case 'low':
            return new Portfolio(20, 80);
        case 'medium':
            return new Portfolio(50, 50);
        case 'high':
            return new Portfolio(90, 100);
        default:
            return new Portfolio(50, 50);
            /*
            here no need 'break;' since it has a return keyword in every branch of the switch statement, its good to use RETURN
            */
    }

}

console.log(generatePortFolio('low').stocksPct);
console.log(generatePortFolio('average').stocksPct);


console.log("V2 Functions:");

function generatePortFolio_V2(riskTolerance) { 
    //declare incase you want extra action on portfolio variable
    let portfolio;
    switch (riskTolerance) {
        case 'low':
            portfolio = new Portfolio(20, 80);
            break;
        case 'medium':
            portfolio = new Portfolio(50, 50);
            break;
        case 'high':
            portfolio = new Portfolio(90, 100);
            break;
        default:
            portfolio = new Portfolio(60, 50);
            
    }
    return portfolio;
}

console.log(generatePortFolio_V2('low').stocksPct);
//console.log(generatePortFolio_V2('average').stocksPct);
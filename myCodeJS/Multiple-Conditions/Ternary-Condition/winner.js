let log = console.log;
whosWinner = (win) =>{
    win ? log("You Win!") : log("You Lose!!");
}

whosWinner (true);
//whosWinner (false);

isLegalAgeBeer = (age) =>{

    return age >= 18 ? log(age, "allowed to Buy BEER!") : log(age, "NOT allowed to Buy BEER!!");
}

isLegalAgeBeer(18);
//isLegalAgeBeer(14);
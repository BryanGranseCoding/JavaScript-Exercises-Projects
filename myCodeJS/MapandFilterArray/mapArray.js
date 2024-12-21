const names = ["Bryan", "Devs", "John", "Quarantine", "Zoren", "Quiz", "Mark", "Quency"];

function notStartQ(n){
return n[0] !== 'Q';
}

function minimumLength(n){
    return n.length >= 5;
}

function convertToEl(n) {
    const el = document.createElement('p')
    el.innerText = n
    return el
}

const x = names.filter(notStartQ)
     .filter(minimumLength)
     .map(convertToEl);

     console.log(x);
const facts = [
    {
        "statement": "JavaScript was invented in 1995",
        "answer": "true",
        "explanation": "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days."
    },
    {
        "statement": "Strings in JS are editable values",
        "answer": "false",
        "explanation": "In JavaScript strings are immutable values, meaning they cannot be edited; however, they can replaced with new, different strings."
    },
    {
        "statement": "1 + 1 === 2",
        "answer": "true",
        "explanation": "The plus operator gives the sum of two numbers."
    },
    {
        "statement": "'1' + '1' === '2'",
        "answer": "false",
        "explanation": "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'."
    },
    {
        "statement": "typeof ['J', 'S'] === 'array'",
        "answer": "false",
        "explanation": "Arrays have the type 'object'. In JS, everything is either a primitive data type (e.g. 'string', 'number') or an object. Arrays are a kind of object with some special properties.  "
    }
];

const statement = document.querySelector('#statement');
const optionButton = document.querySelector('#options').children;
const explanation = document.querySelector('#explanation');
const nextQuestion = document.querySelector('#nextQuestion');

let score = 0;
let completed = 0;
let fact;

const disableButton = (button) => button.setAttribute('disabled', 'disabled');
const enableButton = (button) => button.removeAttribute('disabled');
const hideExplanation = (element) => element.classList.add('hidden');
const showExplanation = (element) => element.classList.remove('hidden');

const generateNewQuestion = () => {

    fact = facts.shift();

    statement.textContent = fact.statement;

    for (let button of optionButton) { enableButton(button); }

    hideExplanation(explanation);
    disableButton(nextQuestion);
    for (let buttonClass of optionButton) {

        buttonClass.classList.remove('incorrect');
        buttonClass.classList.remove('correct');
    }
   

}

//Main Button Loop with Event Listeners
for (let button of optionButton) {

    button.addEventListener("click", (e) => {
        let userAnswer = e.target.value;
        //console.log(userAnswer);
        for (let option of optionButton) { disableButton(option); }

        if (userAnswer === fact.answer) {
            button.classList.add('correct');
            score++;
        } else {
            button.classList.add('incorrect');
        }
        showExplanation(explanation);
        explanation.textContent =  fact.explanation;
        //check if the object array is empty or not
        if (facts.length > 0) {
            enableButton(nextQuestion);
        } else {
        nextQuestion.textContent = "No More Questions!";
        }

        
//Event for Next Question
nextQuestion.addEventListener('click', generateNewQuestion);

//displaying score
document.querySelector('#score').textContent = score;
completed++;
document.querySelector('#completed').textContent = completed;

    }); //end of event listener

} //end of Main Button Loop


//Start Question - Calling Functions
generateNewQuestion();
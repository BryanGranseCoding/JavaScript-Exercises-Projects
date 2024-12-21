const questions = [
    {
        question: "Is String in Javascript Mutable?",
        answer: false,
        description: "String is Immutable"
    },
    {
        question: "Is Array in Javascript Mutable?",
        answer: true,
        description: "Array in Javascript is Totally Mutable"
    }
];

// Use array.shift() method => check MDN for details
let newQuestion = questions.shift(); // declaring to check what array in index is remove

console.log(questions); // log what array index remain
<!DOCTYPE html>
<html lang="en-US"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>Quiz.js</title>
    <style>
        body {
            margin: 1rem auto;
            padding: 3rem;
            font-family: sans-serif;
        }
        header {
            width: 50%;
            margin: 1em auto;
        }
        main {
            min-width: 25rem;
            max-width: 50%;
            margin: 0px auto;
            display:flex; 
            flex-direction: column;
        }
        #statement {
            border: 1px solid black;
            border-radius: 0.5rem;
            box-shadow: 5px 5px 5px gray;
            padding: 1rem;
            font-size: x-large;
            text-align: center;
            margin: 1rem 0px;
            min-height: 2em;
        }
        #explanation {
            padding: 1rem;
            text-align: center;
        }
        #options {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        button {
            padding: 0.5rem;
            font-size: medium;
            border-radius: 5px;
        }
        .correct {
            background-color: lightgreen;
        }
        .incorrect {
            background-color: lightpink;
        }
    </style>
  </head>
  <body>
    <header>
    <h1>Quiz.js</h1>
    <p>Do you know JS? Find out!</p>
    </header>

    <main>
    <div id="statement">'1' + '1' === '2'</div>

    <div id="options">
        <button name="true" value="true">true</button>
        <button name="false" value="false">false</button>
    </div>

    <div id="explanation">

    </div>

    </main>

  

  <script type="text/javascript">


    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    const statement = document.getElementById("statement");
    // optionButtons should be all the elements within the "options" div
    const optionButtons = document.getElementById("options").children;
    // explanation should be the "explanation" div
    const explanation =  document.getElementById("explanation");


    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 
    const fact = {
        "statement": "'1' + '1' === '2'",
        "answer": "false",
        "explanation": "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'."
    };

    
    // TODO 3: Set the text of the statement element to the fact's statement
    statement.textContent = fact.statement;
        

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    function disable(button) {
        button.setAttribute("disabled", "");
    } 
    // enable(button) should remove the attribute "disabled" from the button element
    function enable(button) {
        button.removeAttribute("disabled");
    }


    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
    function isCorrect(guess) {
        return guess === fact.answer;
    }

    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
    for (let option of optionButtons) {
        option.addEventListener("click", event => {
            // TODO 6B: Within the event listener function, display the fact's explanation by setting the text of the explanation element
            explanation.textContent = fact.explanation;
            
            // TODO 7: Within the event listener function, 
            // Use a for loop to disable all the option buttons
            for (let button of optionButtons) {
                disable(button); 
            }
            
            // TODO 8: Within the event listener function,
            // Get the guessed value from the clicked button
            const guess = event.target.value;

            // Use a conditional to compare the guess to the fact's answer
            // and add the "correct"/"incorrect" class as appropriate
            if (isCorrect(guess)) {
                // correct answer!
                event.target.classList.add("correct");
            } else {
                // wrong answer!
                event.target.classList.add("incorrect");
            }
            
        })
    }
    

  </script>

</body></html>
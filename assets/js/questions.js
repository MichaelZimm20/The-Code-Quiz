// this question.js will be the script for all the questions for the quiz
// this script will be in comparison with script.js and index.html to display the questions
// I want the questions to be pushed in random order.

// Object list of all questions and answer choices and correct answers

var questionsObj = [

    {
        question: "What does the Javascript 'debugger' statement do ?",
        answerChoices: ['debugs all the errors in the program at runtime', 'acts as a breakpoint', 'it will debug error in the current state', 'All of the above'],
        correctAnswer: 'acts as a breakpoint'
    },

    {
        question: "Which is not a Boolean logical operator used in JavaScript ?",
        answerChoices: [
            '"AND" Operator &&',
            '"BOTH" Operator |&|',
            '"OR" Operator ||',
            '"NOT" Operator !'
        ],
        correctAnswer: '"BOTH" Operator |&|'
    },

    {
        question: "JavaScript is the programming language for the _______. ",
        answerChoices: ['Laptop', 'Chrome Web Browser', 'Web', 'Mobile'],
        correctAnswer: 'Web'

    },
    {
        question: "Which HTML element do we use to place JavaScript code? ",
        answerChoices: [
            '<script>...</script>',
            '<javascript>...</javascript>',
            '<link rel="">...</link>',
            '<js>...</js>'
        ],
        correctAnswer: '<script>...</script>'

    },
    {
        question: "Arrays can store:",
        answerChoices: [
            'other arrays',
            'numbers, strings, booleans',
            'numbers, booleans, elements',
            'a and b'
        ],
        correctAnswer: 'a and b'

    },
    {
        question: "Which is NOT considered a 'function expression' ",
        answerChoices: [
            'var fight = function { alert("Am I a function expression?)}',
            'var arrayArr = function(event)...{}',
            'var myDeclaration = function()...{}',
            'function myDeclaration()...{}'
        ],
        correctAnswer: 'function myDeclaration()...{}'

    },
    {
        question: "Select the best answer that is considered a Web API ",
        answerChoices: [
            'All the below',
            'console.log()',
            'window.document()',
            'localStorage.setItem()'

        ],
        correctAnswer: 'All the below'

    },
    {
        question: "By default, the page refreshes after the submit button is clicked, which method can stop the page refresh? ",
        answerChoices: [
            'stopLoad();',
            'reset();',
            'prevent.Default();',
            'remove();'

        ],
        correctAnswer: 'prevent.Default();'

    },
    {
        question: "Which is considered a type of loop in JavaScript? ",
        answerChoices: [
            'For',
            'For/of',
            'while',
            'all of the above'

        ],
        correctAnswer: 'all of the above'

    },
    {
        question: "True of False. innerHTML property is used to define HTML content with a specific id.",
        answerChoices: [
            'True',
            'False',
            'Need more Information',
            'None of the above'

        ],
        correctAnswer: 'True'

    },
    {
        question: "Which comparison operator is used check if two operands are strictly equal to one another ?",
        answerChoices: [
            'console.log(1 = 1.0)',
            'if (num1 !== str2)',
            'if("1" === 1)',
            'console.log("hello" === "hello")'

        ],
        correctAnswer: 'console.log("hello" === "hello")'

    },

    {
        question: "Which comparison operator is used check if two operands are strictly equal to one another ?",
        answerChoices: [
            'console.log(1 = 1.0)',
            'if (num1 !== str2)',
            'if("1" === 1)',
            'console.log("hello" === "hello")'

        ],
        correctAnswer: 'console.log("hello" === "hello")'

    },
    {
        question: "JSON.stringify() turns an array into a:",
        answerChoices: [
            'Integer',
            'Object',
            'Array within an array',
            'String'

        ],
        correctAnswer: 'String'

    }

]
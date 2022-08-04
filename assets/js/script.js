// This is the main script that will link and run majority of the quiz

// My DOM elements
var startQuizEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#time-left");
var showTimer = document.querySelector(".timer");
var quizWrapper = document.querySelector("#wrapper");
var hideStartPage = document.querySelector("#start");
var questionEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#current-answer");
var orderList = document.querySelector("#orderList");
var questionContent = document.querySelector("#current-question");
var checkAnswer = document.querySelector("#check-answer");
var results = document.querySelector("#results");
var questionIndex = 0;
// Global Variables for timer function (Start and decrease)
var time = 120;
var intitalTimer;


// Start quiz Function
function startQuiz(event) {
  //hide start screen
  hideStartPage.style.display = "none";




  // display: block questions to show 
  questionEl.style.display = "block";

  // Starts timer on click and display first question of the quiz
  timerStart();
  displayQuiz();

  // return displayQuiz;
}



//timer function to start on start quiz click
var timerStart = function () {
  // intital timer start time on click
  intitalTimer = setInterval(timeDecreased, 1000);
  timerEl.textContent = time;
}



//timeDecreased function will start the timer and display remaining time, clear interval and reset.
var timeDecreased = function () {

  // if statement for interval timer 
  if (time > 1) {
    time--;
    timerEl.textContent = time;
  } else if (time === 1) {
    time--;
    timerEl.textContent = time;
  } else if (time < 0) {
    time = 0;
    timerEl.textContent = '';
    clearInterval(intitalTimer);
    // displayhighScores(); 
  }
}





var displayQuiz = function () {
  // get current question from array
  
  var currentQuestion = questionsObj[questionIndex];

  //initial number for question answer choice counter
  var questionNumber = 1;

  // add the current question to the h2
  questionContent.textContent = currentQuestion.question;


  //get answer choices respective to current question
  var currentChoices = currentQuestion.answerChoices;
  // console.log(currentChoices);

  //clear our previous question
  choicesEl.innerHTML = "";

  // Loop to create button to add to order list for each answer choice
  for (var i = 0; i < currentChoices.length; i++) {
    // create new button element for answer choices  
    var choicesBtn = document.createElement("button");

    // set attributes for answer choices
    choicesBtn.setAttribute("class", "answerChoice");
    choicesBtn.setAttribute("value", currentChoices[i]);
    choicesBtn.textContent = questionNumber + ". " + currentChoices[i];
    // console.log(choicesBtn);
    // console.log(choicesBtn);
    // debugger;

    //append buttons values to the div
    choicesEl.appendChild(choicesBtn);

    // counter to list the next answerchoice number
    questionNumber++;
  }


}


// // this function will create right/wrong responses and control wrong answer penalties. 
// var clickedAnswer = function (event) {
//  var correctTarget =  event.target.correctValue;
//   var answerTarget = event.target.value;
//  console.log(answerTarget);
//   if (answerTarget !== correctTarget) {
//     // console.log(questionsObj[questionIndex].correctAnswer);
//     timerEl.textContent = time;
//     checkAnswer.style.borderTop = "2px solid black";
//     checkAnswer.textContent = "Wrong";
//     checkAnswer.style.fontSize = "medium";
//     checkAnswer.style.color = "red";
//     checkAnswer.style.fontStyle = "italic";
    
//     time -= 10

    
//   } else {
//     timerEl.textContent = time;
//     checkAnswer.style.borderTop = "2px solid black";
//     checkAnswer.textContent = "Correct";
//     checkAnswer.style.fontSize = "medium";
//     checkAnswer.style.color = "green";
//     checkAnswer.style.fontStyle = "italic";
    
//   }
//  console.log(checkAnswer);
//   // show result correct/wrong respective to answer choices
//   var element = event.target.correctValue;
//   if (document.matches('check-answer')){
//     var answerState = element.getAttribute('data-state');

//     if (answerState === 'hidden') {
//       element.textCo

//     }
    
//   } else {
//     checkAnswer.style.display = "none";
//   }
  
//   checkAnswer.setAttribute("data-state", "visible");
//   setInterval(function () {
//     checkAnswer.setAttribute("data-state", "hidden");
//   }, 1000);
 

//   // after answer selected, move to the next question and answer choices
//   questionIndex++;

// }



// this function will create right/wrong responses and control wrong answer penalties. 
choicesEl.addEventListener("click", function(event) {
  var element = event.target;
  var answerTarget = event.target.value;
  var currentQuestion = questionsObj[questionIndex];
console.log(answerTarget);
  console.log(element);
  if (answerTarget !== currentQuestion.correctAnswer) {
    
    // displays Wrong for incorrect answer and deducts a penalty time by -10
    timerEl.textContent = time;
    checkAnswer.style.borderTop = "1px solid grey";
    checkAnswer.textContent = "Wrong!";
    checkAnswer.style.fontSize = "medium";
    checkAnswer.style.color = "red";
    checkAnswer.style.fontStyle = "italic";
    checkAnswer.style.width = "75%";
     
    //time penalty of (-10) for incorrect answer
    time -= 10

    
  } else {
     
    //correct Answer feedback
     timerEl.textContent = time;
     checkAnswer.style.borderTop = "1px solid grey";
     checkAnswer.textContent = "Correct";
     checkAnswer.style.fontSize = "medium";
     checkAnswer.style.color = "green";
     checkAnswer.style.fontStyle = "italic";
     checkAnswer.style.width = "75%";
  }









});





// choicesEl.addEventListener("click", clickedAnswer);
startQuizEl.addEventListener("click", startQuiz);
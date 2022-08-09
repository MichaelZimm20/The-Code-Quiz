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
var quizResults = document.querySelector("#results");
var submitQuiz = document.querySelector("#submit");

var questionIndex = 0;
var localScores = [];
// Global Variables for timer function (Start and decrease)
var time = 120;
var intitalTimer;

quizResults.style.display = "none";

// Start quiz Function
function startQuiz() {
  // console.log(questionIndex);
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
  } else if (time <= 0) {
    time = 0;
    clearInterval(intitalTimer);
    endQuiz();
  }
    
//  else {
//     displayQuiz();
//   }
    // displayhighScores(); 
  
};





var displayQuiz = function () {
  
  // get current question from array
  var currentQuestion = questionsObj[questionIndex];
  console.log(currentQuestion);
  // console.log(questionsObj);
  //initial number for question answer choice counter
  var answerNumber = 1;

  // add the current question to the h2
  questionContent.textContent = currentQuestion.question;
  questionContent.setAttribute("correct-answer-value", currentQuestion.correctAnswer);
  questionContent.setAttribute("question-index-value", questionIndex);

 
  

  // console.log(questionContent);
  //get answer choices respective to current question
  var currentChoices = currentQuestion.answerChoices;
  // console.log(currentChoices);

  
  

  // Loop to create button to add to order list for each answer choice
  for (var i = 0; i < currentChoices.length; i++) {
    // create new button element for answer choices  
    var choicesBtn = document.createElement("button");

    // set attributes for answer choices
    choicesBtn.setAttribute("class", "answerChoice");
    choicesBtn.setAttribute("value", currentChoices[i]);
    choicesBtn.textContent = answerNumber + ". " + currentChoices[i];
    // console.log(currentChoices[i]);
    // console.log(currentChoices);
  

    // console.log(choicesBtn);
    // console.log(choicesBtn);
   

    //append buttons values to the div
    choicesEl.appendChild(choicesBtn);

    // counter to list the next answerchoice number
    answerNumber++;
 
  }
  
};



document.addEventListener("click", function (event) {
  // console.log(questionIndex);
  //check if clicked button has class of "answerChoice”
  if (event.target && event.target.matches(".answerChoice")) {
    //.answerChoice
    var element = event.target;
    var answerTarget = element.value;
    var currentQuestion = questionsObj[questionIndex];
    // console.log(questionIndex);
    console.log(answerTarget);
    console.log(currentQuestion);


    if (answerTarget == currentQuestion.correctAnswer) {
      // answerTarget == currentQuestion.correctAnswer
      console.log("correct");
      //correct Answer feedback
      timerEl.textContent = time;
      checkAnswer.style.borderTop = "1px solid grey";
      checkAnswer.textContent = "Correct";
      checkAnswer.style.fontSize = "medium";
      checkAnswer.style.color = "green";
      checkAnswer.style.fontStyle = "italic";
      checkAnswer.style.width = "75%";
    } else {

      if (time < 0) {
        time = 0;
      }
      console.log("wrong");

      // displays Wrong for incorrect answer and deducts a penalty time by -10



      //time penalty of (-10) for incorrect answer
      time -= 10
      timerEl.textContent = time;
      checkAnswer.style.borderTop = "1px solid grey";
      checkAnswer.textContent = "Wrong!";
      checkAnswer.style.fontSize = "medium";
      checkAnswer.style.color = "red";
      checkAnswer.style.fontStyle = "italic";
      checkAnswer.style.width = "75%";
    }


    checkAnswer.style.visibility = "visible";
    setTimeout(function () {
      checkAnswer.style.visibility = "hidden";
      document.getElementById("current-answer").textContent = "";
      displayQuiz();
    }, 1000);
    
   
    // loop for my questions 
 
  
  questionIndex++;
    
  if (questionIndex >= questionsObj.length) {
    endQuiz();
    
  } ;
  
  }
  // console.log(event.target.textContent);
  // console.log(questionsObj.length);
});
  


// console.log(questionIndex);
// console.log(questionIndex);
  // console.log(questionIndex++);
   // 
  // 

var endQuiz = function () {
  // show Quiz Results 
 // var questionId = event.target.getAttribute("question-index-value");

  clearInterval(intitalTimer);
  quizResults.style.display = "block";
  questionEl.style.display = "none";

  var finalScore = document.querySelector("#final-score");
  finalScore.textContent = time;
 
  

  // var hidden = quizResults.setAttribute("display", "none");
  // var visible = quizResults.removeAttribute("display", "none");
// var questionId = event.target.getAttribute("question-index-value");
  //if quiz results are hidden, display them
  // if (quizResults === hidden) {
  //   // results.style.display = "block";
  //   
  //   return visible;
  // };

};



var saveScore = function () {
  var playerScore = document.getElementById("time-left");
  playerScore.textContent = time;


  // save score as an object with initials, player score then push it into tasks array
  var playerInitials = document.getElementById("max-initials").value;
  var newPlayerScoreObj = {
    initals: playerInitials,
    score: time
  };
  // save and push players score to localStorage
  localScores.push(newPlayerScoreObj);
  localStorage.setItem("localScores", JSON.stringify(localScores));

  //after clicking submit, form redirects to the Highscore page
  window.location.href = "highscores.html"; 
};




// if the user press "Enter" on the keyboard instead of clicking submit, still save initials and new score.
document.addEventListener("keyup", function (event) {
  if (event.code === 'Enter') {
    saveScore();
  }
});




var loadScores = function () {
  // if there are no scores, set scores to an empty array and return out of the function
  var savedScores = localStorage.getItem("localScores");
  if (!savedScores) {
    return false;
  }

  //parse into array of objects
  savedScores = JSON.parse(savedScores);

};
// console.log(endQuiz());





submitQuiz.addEventListener("click", saveScore);
startQuizEl.addEventListener("click", startQuiz);
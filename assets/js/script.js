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

// Global Variables for timer function (Start and decrease)
var time = 120;
var intitalTimer;

quizResults.style.display = "none";

// Start quiz Function
function startQuiz() {
  
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
 
  //initial number for question answer choice counter
  var answerNumber = 1;

  // add the current question to the h2
  questionContent.textContent = currentQuestion.question;
  questionContent.setAttribute("correct-answer-value", currentQuestion.correctAnswer);
  questionContent.setAttribute("question-index-value", questionIndex);

 
  

 
  //get answer choices respective to current question
  var currentChoices = currentQuestion.answerChoices;
  

  
  

  // Loop to create button to add to order list for each answer choice
  for (var i = 0; i < currentChoices.length; i++) {
    // create new button element for answer choices  
    var choicesBtn = document.createElement("button");

    // set attributes for answer choices
    choicesBtn.setAttribute("class", "answerChoice");
    choicesBtn.setAttribute("value", currentChoices[i]);
    choicesBtn.textContent = answerNumber + ". " + currentChoices[i];
  
   

    //append buttons values to the div
    choicesEl.appendChild(choicesBtn);

    // counter to list the next answerchoice number
    answerNumber++;
 
  }
  
};



document.addEventListener("click", function (event) {
  
  //check if clicked button has class of "answerChoice”
  if (event.target && event.target.matches(".answerChoice")) {
    //.answerChoice
    var element = event.target;
    var answerTarget = element.value;
    var currentQuestion = questionsObj[questionIndex];
   


    if (answerTarget == currentQuestion.correctAnswer) {
      // answerTarget == currentQuestion.correctAnswer
     
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
 
});
  



var endQuiz = function () {
  // show Quiz Results 
 // var questionId = event.target.getAttribute("question-index-value");

  clearInterval(intitalTimer);
  quizResults.style.display = "block";
  questionEl.style.display = "none";

  var finalScore = document.querySelector("#final-score");
  finalScore.textContent = time;
 
};










var saveScore = function (event) {
  //get players initials from form
  var playerInitials = document.getElementById("max-initials").value;
 
  // if form is null, return
  if (event === null) {
    return
  }
 
  //check to see if player enter their initials if not alert them
  if (playerInitials === "") {
    alert("Please enter your initials to submit your score")
  };

  


 
       
  // if there are no scores, set scores to an empty array and return out of the function
   //parse into array of objects
  var savedScores = JSON.parse(localStorage.getItem("localScores"));
  
  //  savedScores = JSON.parse(savedScores);

  if (savedScores !== null) {

    // save score as an object with initials, player score then push it into localScores array
    savedScores.push({
      'initials': playerInitials,
      'score': time
    });

  } else {
    savedScores = [];
    savedScores.push({
      'initials': playerInitials,
      'score': time
    });
  }

  
  // set new score to localStorage
  localStorage.setItem("localScores", JSON.stringify(savedScores));

  

  //after clicking submit, form redirects to the Highscore page
  document.location.href = "highscores.html"; 
};



// if the user press "Enter" on the keyboard instead of clicking submit, still save initials and new score.
document.addEventListener("keyup", function (event) {
  if (event.code === 'Enter') {
    saveScore();
  }
});



// event listner for start button and score submit
submitQuiz.addEventListener("click", saveScore);
startQuizEl.addEventListener("click", startQuiz);
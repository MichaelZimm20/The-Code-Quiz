// This is the main script that will link and run majority of the quiz

// My DOM elements
var startQuizEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#time-left");
var quizWrapper = document.querySelector("#wrapper");
var hideStartPage = document.querySelector("#start");
var questionEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#current-answer");
var questionContent = document.querySelector("#current-question");

// Start quiz Function
function startQuiz(event) {
    console.log("click");


    //hide start screen
   hideStartPage.style.display = "none";
   questionEl.style.display = "block";


        // timerStart();
          displayQuiz();
    
    // return displayQuiz;
}








// var timerStart = function () {
    
//     // intital timer start time
//     var intitalTimer = setInterval(timeDecreased, 1000)
    
// }


// var timeDecreased = function (){


// }



var displayQuiz = function () {
    // get current question from array
    var questionIndex = 0;
    var currentQuestion = questionsObj[questionIndex];

    // add the current question to the h2
    questionContent.textContent = currentQuestion.question;
    // console.log(questionContent);
    // sends the current question to the overall section
      // console.log(questionEl);
    // sends the section to the main quiz wrapper
  
   



    //get answer choices respective to current question
    var currentChoices = currentQuestion.answerChoices;
    console.log(currentChoices);
      //create button for each choice
   
        for (var i = 0; i < currentChoices.length; i++) {     
            // console.log(currentChoices[i]);


            var choicesBtn = document.createElement("button");
            choicesBtn.textContent = currentChoices[i];
            // console.log(choicesBtn);
            

            choicesEl.appendChild(choicesBtn);
           
            
                   

            // choicesEl.appendChild(choicesBtn);
            // choicesBtn.appendChild(choiceListItem);

            // console.log("for loop is working");
        }

    
    // console.log(choicesEl);
    // console.log(choicesBtn);
}




startQuizEl.addEventListener("click", startQuiz);
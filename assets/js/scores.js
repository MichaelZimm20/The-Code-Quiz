var back = document.querySelector("#goback");
var newScores = document.querySelector("#highscores");
var clear = document.querySelector("#clearSCores");










var loadScores = function () {
    
    //retrieve high scores from localStorage
    var savedScores = JSON.parse(localStorage.getItem("localScores"));

    if (savedScores !== null) {
        //sort scores in descending order
        savedScores.sort(function (a, b) { return b.score - a.score });


        savedScores.forEach(function (player) {
            //create a list item for each new score and initials to the ordered list 
            var listScoreItem = document.createElement("li");

            //add the text to the list item
            listScoreItem.textContent = player.initials + " - " + player.score;
            //append to page 
            newScores.appendChild(listScoreItem);

        });
    };
};



document.addEventListener("click", function () {
  //clar local Storage
  window.localStorage.removeItem("localScores");
  //clear ordered list 
  // var orderList = document.getElementById("highscores");
  newScores.innerHTML = "";


});



//add event to go back to home page 
back.addEventListener("click", function () {
    document.location.href = "index.html";
});

// var clearHighScores = function() {
   
// };


// clear.addEventListener("click", clearHighScores);

loadScores();
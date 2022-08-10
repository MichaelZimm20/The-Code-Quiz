var back = document.querySelector("#goback");
var newScores = document.querySelector("#highscores");
// var scoreIntitals = newPlayerScoreObj.initials;
// var scoreTime = newPlayerScoreObj.score;
var moreScores = [];

//add event to go back to home page 
document.getElementById('goback').addEventListener("click", () => {
    window.location="index.html";
});




// var loadScores = function () {
//      // var playerScore = document.getElementById("time-left");
//   // playerScore.textContent = time;
//     newScores.innerHTML = localStorage.getItem("localScores", JSON.parse(savedScores));
    
//     // if there are no scores, set scores to an empty array and return out of the function
//     // var savedScores = localStorage.getItem("localScores", JSON.parse(savedScores));
  
  
        
  
//    newScores.forEach(function(player) {
//         //create a list item for each new score and initials to the ordered list 
//             var listScoreItem = document.createElement("li");
        
//             //add the text to the list item
//             listScoreItem.textContent = player.initials + " - " + player.score;
//    });
    
//         // for (var i = 0; i < newScores.length; i++) {
//         //     
//         //     
//         //     //append to page 
//         //     newScores.appendChild(listScoreItem);
//         // };

       
        

   
//   };




var clearHighScores = function() {
     window.localStorage.removeItem("newScores");
     window.location.reload();
};




loadScores();
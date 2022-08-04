var back = document.querySelector("#goback");

var goBack = function () {
    window.history.back();
}


back.addEventListener("click", goBack);
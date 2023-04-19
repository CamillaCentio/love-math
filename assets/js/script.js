document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                rungame("gametype");
            }
        })
    }
    rungame("addition"); 
})
/**
 * The main game "loop", called when script is first loaded
 * and after the user's answer has been processed
 */
function rungame(gametype) {
 let num1 = Math.floor(Math.random() * 25) + 1;
 let num2 = Math.floor(Math.random() * 25) + 1;

 if (gametype === "addition"){
    displayAdditionQuestion(num1, num2); 
 } else {
    alert('unknown gametype: ${gametype}')
 }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}



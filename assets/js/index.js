//wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded",function() {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons){
        button.addEventListener("click",function(){
            if(this.getAttribute("data-type")==="submit") {
                alert("You clicked submit!");
            } else {
                let gameType=this.getAttribute("data-type");
                alert(`You clicked ${gameType} !`);
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function increamentScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionalQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}
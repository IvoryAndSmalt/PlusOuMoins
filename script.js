
var number = document.getElementById("input");

var keyNumber = Math.floor((Math.random() * 10) + 1)

var counter = document.getElementById("counter");



function testPlusOuMoins() {
    console.log(keyNumber);
    console.log(number.value);
    var bravoMessage = document.getElementById("bravo")

    if(number.value == keyNumber){
        bravoMessage.innerHTML = ("bravo, vous avez trouvé !!!");
        bravoMessage.style.fontSize = "50px";
        bravoMessage.style.color = "green";
    }
    else if(number.value < keyNumber){
        bravoMessage.innerHTML = ("Plus haut");
    }
    else if(number.value > keyNumber){
        bravoMessage.innerHTML = ("Plus bas");
    }
}


var playButton = document.getElementById("input");
playButton.addEventListener("click", function(){
    // randomGenerator(); 
    testPlusOuMoins();
});
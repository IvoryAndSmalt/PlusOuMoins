
var number = document.getElementById("input");
var keyNumber = Math.floor((Math.random() * 1000) + 1)
var counter = document.getElementById("counter");
var continuer = document.getElementById("continuer");
var bravoMessage = document.getElementById("bravo");
var valider = document.getElementById("valider");
var i = 0;
var manche = 0;
var chances = document.getElementById("coups");
var resultat = "";
var coups =0;

continuer.style.display = "none";
valider.style.display= "inline";
chances.innerHTML = 10-i;

function reroll() {
    keyNumber = Math.floor((Math.random() * 1000) + 1);
    bravoMessage.innerHTML = ("");
    continuer.style.display = "none";
    valider.style.display= "inline";
    bravoMessage.style.fontSize = "inherit";
    bravoMessage.style.color = "yellow";
    manche = manche +1;
    var domli = document.createElement("LI");                
    var texteli = document.createTextNode("Manche " + manche + " : " + resultat + " en " + coups + " coups.");         
    domli.appendChild(texteli);                              
    document.getElementById("record").appendChild(domli);
    i = 0;
    chances.innerHTML = 10-i;
    coups = i;
}

function continuerFonction() {
    continuer.style.display = "block";
}

function testPlusOuMoins() {
    console.log(keyNumber);
    
    if (number.value < keyNumber) {
        bravoMessage.innerHTML = ("Plus haut");
        bravoMessage.style.fontSize = "inherit";
        bravoMessage.style.color = "yellow";
    }
    else if (number.value > keyNumber) {
        bravoMessage.innerHTML = ("Plus bas");
        bravoMessage.style.fontSize = "inherit";
        bravoMessage.style.color = "yellow";
    }
}

valider.addEventListener("click", function () {
    
    if (number.value === ""){
        document.getElementById("erreurnombre").innerHTML ="Veuillez entrer un nombre.";
    }
    else{
    document.getElementById("erreurnombre").innerHTML ="";
    testPlusOuMoins();
    i++;
    coups = i;
    chances.innerHTML = 10-i;
    console.log(i);
    if (i > 9 && number.value != keyNumber) {
        alert("vous avez perdu après " + coups + " essais, recommencez !");
        resultat = "Echec";
        reroll();
    }
    else if (number.value == keyNumber) {
        bravoMessage.innerHTML = ("bravo, vous avez trouve la reponse en " + coups + " coups !");
        bravoMessage.style.color = "green";
        bravoMessage.style.fontSize = "35px";
        valider.style.display = "none";
        resultat = "Victoire";
        continuerFonction();
    }
    number.value = "";
}
});

continuer.addEventListener("click", function () {
    reroll();
});
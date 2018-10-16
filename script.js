
var number = document.getElementById("input");
var keyNumber = Math.floor((Math.random() * 1000) + 1)
var counter = document.getElementById("counter");
var continuer = document.getElementById("continuer");
var bravoMessage = document.getElementById("bravo");
var valider = document.getElementById("valider");
var i = 0;
var manche = 0;
var coups = document.getElementById("coups");
var resultat = "";

continuer.style.display = "none";

function reroll() {
    keyNumber = Math.floor((Math.random() * 1000) + 1);
    bravoMessage.innerHTML = ("");
    continuer.style.display = "none";
    bravoMessage.style.fontSize = "inherit";
    bravoMessage.style.color = "inherit";
    manche = manche +1;
    var domli = document.createElement("LI");                
    var texteli = document.createTextNode("Manche " + manche + " : " + resultat + " en " + coups.innerHTML + " coups.");         
    domli.appendChild(texteli);                              
    document.getElementById("record").appendChild(domli);
    i = 0;
    coups.innerHTML = i;
}

function continuerFonction() {
    continuer.style.display = "block";
}

function testPlusOuMoins() {
    console.log(keyNumber);
    
    if (number.value < keyNumber) {
        bravoMessage.innerHTML = ("Plus haut");
        bravoMessage.style.fontSize = "inherit";
        bravoMessage.style.color = "inherit";
    }
    else if (number.value > keyNumber) {
        bravoMessage.innerHTML = ("Plus bas");
        bravoMessage.style.fontSize = "inherit";
        bravoMessage.style.color = "inherit";
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
    coups.innerHTML = i;
    console.log(i);
    if (i > 9 && number.value != keyNumber) {
        alert("vous avez perdu après " + coups.innerHTML + " essais, recommencez !");
        resultat = "Echec";
        reroll();
    }
    else if (number.value == keyNumber) {
        bravoMessage.innerHTML = ("bravo, vous avez trouvé " + keyNumber + " en " + coups.innerHTML + " coups !");
        bravoMessage.style.color = "green";
        bravoMessage.style.fontSize = "35px";
        resultat = "Victoire";
        continuerFonction();
    }
    number.value = "";
}
});

continuer.addEventListener("click", function () {
    reroll();
});
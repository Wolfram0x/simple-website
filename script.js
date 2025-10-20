/* Resume Tailoring */
let feVisibility = false;
let beVisibility = false;
let fwVisibility = false;

const beButton = document.getElementById("beButton");
const beSection = document.getElementById("backEnd");

document.getElementById("beButton").addEventListener("click", function() {
    if (!beVisibility) {
        beButton.innerText = "Hide Back-End";
        beSection.style.display = 'block';
    }

    else {
        beButton.innerText = "Show Back-End";
        beSection.style.display = 'none';
    }

    beVisibility = !beVisibility;
});

const feButton = document.getElementById("feButton");
const feSection = document.getElementById("frontEnd");

document.getElementById("feButton").addEventListener("click", function() {
    if (!feVisibility) {
        feButton.innerText = "Hide Front-End";
        feSection.style.display = 'block';
    }

    else {
        feButton.innerText = "Show Front-End";
        feSection.style.display = 'none';
    }

    feVisibility = !feVisibility;
});

const fwButton = document.getElementById("fwButton");
const fwSection = document.getElementById("frameWorks");

document.getElementById("fwButton").addEventListener("click", function() {
    if (!fwVisibility) {
        fwButton.innerText = "Hide Frameworks";
        fwSection.style.display = 'block';
    }

    else {
        fwButton.innerText = "Show Frameworks";
        fwSection.style.display = 'none';
    }

    fwVisibility = !fwVisibility;
});

/* Quote Button */
const quoteButton = document.getElementById("quoteButton");
const quoteDisplay = document.getElementById("quoteDisplay");

const quotes = [
    "Dime con quien andas, y te dire quien eres.",
    "Amigo es un peso en el bolsillo.",
    "El que a buen arbol se arrima, buena sombra le cobija.",
    "Camaron que se duerme, se lo lleva la corriente."
];

document.getElementById("quoteButton").addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomNumber];
});
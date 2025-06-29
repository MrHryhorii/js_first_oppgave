/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html
const output = document.getElementById("output");

// function for double log
const log = (message) => {
    console.log(message); // show in console
    //
    const p = document.createElement("p"); // show on page
    p.textContent = message;
    output.appendChild(p);
};

// create "hr" tag in output div
const separator = () => {
    output.appendChild(document.createElement("hr"));
};

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her
let crimeText = "Hei, verden!";
const omniAnswer = 42;
let isSolved = true;
const stolenList = [1, 2, 3, 4];

log("String (Tekst): " + crimeText);
log("Number (Tall): " + omniAnswer);
log("Boolean: " + isSolved);
log("Array: " + stolenList.join(", "));
//
separator();

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her
let a = 16;
let b = 8;
log("let a = " + a);
log("let b = " + b);

log("a + b = " + (a + b));
log("a - b = " + (a - b));
log("a * b = " + (a * b));
log("a / b = " + (a / b));

a++;
b--;
log("a after ++: " + a);
log("b after --: " + b);

a += 25;
b -= 21;
log("a after += 25: " + a);
log("b after -= 21: " + b);
//
separator();

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her
userName = "John"

if (userName !== "" && userAge >= 18 && !userIsBlocked) {
    userIsLoggedIn = true;
    goToPage = "/home";
    log(`Welcome, ${userName}! You are logged in. Redirecting to: ${goToPage}`);
} 
else {
    log("Error: Name is missing, user is underage, or user is blocked.");
}
//
separator();

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;

// Skriv koden for oppgave 5 her
let maleGender = userMale;
maleGender = true;

const userTitle = maleGender ? "Mr." : "Mrs.";
log("User title: " + userTitle);

const pageTitle = document.getElementById("userpsw");
const currentYear = '23';

// user's name
const userName = prompt("Inserisci qui il tuo Nome");

// user's surname
const userSurname = prompt("Inserisci qui il tuo Cognome");

// user's favourite color
const userColor = prompt("Inserisci qui il tuo colore preferito");

// password creation
const password = userName + userSurname + userColor + currentyear;


// printing generated password on page 
pagetitle.innerHTML = `La tua password è: <mark>${password}</mark>`;
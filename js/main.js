// dichiarazione e assegnazioni delle variabili e costanti
const pagetitle = document.getElementById("userpsw");
const currentyear = '23';

let userName = prompt("Inserisci qui il tuo Nome");
console.log(userName);

let userSurname = prompt("Inserisci qui il tuo Cognome");
console.log(userSurname);

let userColor = prompt("Inserisci qui il tuo colore preferito");
console.log(userColor);

// dichiarazione e creazione password
let password = userName + userSurname + userColor + currentyear;
console.log(password);

//stampiamo sulla pagina la password appena generata 
pagetitle.innerHTML = `La tua password è: <mark>${password}</mark>`;
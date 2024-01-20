// - chiedere all'utente di scegliere pari o dispari con un prompt

let sceltaUtente = prompt('Giochiamo ad un gioco : pari o dispari?');
sceltaUtente.toLowerCase().trim();

while (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
    sceltaUtente = prompt('scegli pari o dispari');
    sceltaUtente.toLowerCase().trim();
} 



// - chiedere di inserire un numero da 1 a 5 con un prompt
let numeroScelto = parseInt(prompt('scegli un numero da 1 a 5'));
while ( numeroScelto > 5 || numeroScelto <= 0) {
numeroScelto = parseInt(prompt('scegli un numero da 1 a 5'));
}


// - generare un numero random da 1 a 5 per il computer usando una funzione


let pcNumber = generateNumber(1, 5);
console.log(pcNumber);



function generateNumber(min, max) {

  return Math.floor(Math.random() * max + min ); 
}

// - sommare i due numeri
let somma = numeroScelto + pcNumber;

// - verificare se la somma dei due numeri è pari o dispari usando una funzione

let isPari = checkpari(somma);
console.log(isPari);

function checkpari(number) {
    if(number % 2 == 0) {
        return true;
    } 
    return false;

}


// - SE la verifica risulta uguale al valore di quello che ha dichiarato l'utente
//     - stampiamo 'l'utente ha vinto'
//     - ELSE stampiamo 'ha vinto il computer


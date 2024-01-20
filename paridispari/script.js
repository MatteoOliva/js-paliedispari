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






// - generare un numero random da 1 a 5 per il computer tramite una funzione
// - sommare i due numeri
// - verificare se la somma dei due numeri è pari o dispari tramite una funzione
// - SE la verifica risulta uguale al valore di quello che ha dichiarato l'utente
//     - stampiamo 'l'utente ha vinto'
//     - ELSE stampiamo 'ha vinto il computer

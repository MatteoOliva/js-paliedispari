let userWord = prompt('inserisci una parola');

while (parseInt(userWord)) {
    userWord = prompt('inserisci una parola');
} 



if(isPalindroma(userWord)) {
    alert('La parola è palindroma');
} else {
    alert('la parola non è palindroma');
}



function isPalindroma (stringa) {
    let wordTest = ''; 
    let userParolasplit = stringa.split('');
    for(i = userParolasplit.length - 1; i >= 0; i--) {
        wordTest += userParolasplit[i];
    }

    return wordTest === stringa;  
}



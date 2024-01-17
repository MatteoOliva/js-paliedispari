

function isPalindroma (stringa) {
    let wordTest = ''; 
    let userParolasplit = stringa.split('');
    for(i = userParolasplit.length - 1; i >= 0; i--) {
        wordTest += userParolasplit[i];
    }
    return wordTest === stringa;  
}



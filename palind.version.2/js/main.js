/*second option*/

//no .split, .reverse or .join

const userWord = prompt('Inserisci una parola:');
console.log(userWord);

let userWordChRev = "";

console.log(userWordChRev);

function palindrome(userWord){
    for (let i=userWord.length - 1; i >= 0; i--){
        userWordChRev += userWord[i];
        if (userWord === userWordChRev){
            return true;
        }
    }
}

if (palindrome(userWord)){
    console.log('Hai inserito una parola palindroma');
} else {
    console.log('Hai inserito una parola comune');
}

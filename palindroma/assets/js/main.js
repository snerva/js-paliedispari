//Chiedere all’utente di inserire una parola con variabile e prompt
//rendere la parola leggibile da entrambe i versi
//Creare una funzione per capire se la parola inserita è palindroma 

/*
split
reverse
join
if
*/ 

const userWord = prompt('Inserisci una parola:');
console.log(userWord);

const wordAr = userWord.split("");
console.log(wordAr);

const wordArReverse = wordAr.reverse();
console.log(wordArReverse);

const wordReverse = wordArReverse.join('');
console.log(wordReverse);

function palindrome(userWord){
    if (userWord === wordReverse){
       return true;
    } 
}

if (palindrome(userWord)){
    console.log('Hai inserito una parola palindroma');
} else {
    console.log('Hai inserito una parola comune');
}
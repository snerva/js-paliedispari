//Chiedere all’utente di inserire una parola con variabile e prompt
//Creare una funzione per capire se la parola inserita è palindroma 

const userWord = prompt('Inserisci una parola:');
console.log(userWord);

const wordAr = userWord.split("");
console.log(wordAr);

const wordArReverse = wordAr.reverse();
console.log(wordArReverse);

const wordReverse = wordArReverse.join('');
console.log(wordReverse);

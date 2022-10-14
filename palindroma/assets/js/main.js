//Chiedere all’utente di inserire una parola con variabile e prompt
//dividere la lunghezza della parola per due per vedere se la prima parte e la seconda sono uguali con lenght e for 
// se sono uguali é true se no é false 
//Creare una funzione per capire se la parola inserita è palindroma 

const userWord = prompt('Inserisci una parola:');
console.log(userWord);

const wordLenght = userWord.length;
console.log(wordLenght);

const halfWord = wordLenght/2;
console.log(halfWord);




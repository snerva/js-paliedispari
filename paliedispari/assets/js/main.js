//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
//Dichiariamo chi ha vinto.

/*
prompt
function math.random
function sum if
*/

const userPariDispari = prompt('Scegli pari o dispari:');
const userNumber =  prompt('Scegli un numero da 1 a 5:');

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}
const pcNumber = randomNumber(0,6);
console.log(pcNumber);

function sumNumbers(userNumber, pcNumber){
    const sum = userNumber + pcNumber;
    if (sum / 2 == 0){
      return true;
    } 
}


let vincitore;
if (sumNumbers(userNumber, pcNumber)){
    vincitore = 'pari';
} else {
    vincitore = 'dispari';
}

if (vincitore == userPariDispari){
    document.querySelector('h1').innerHTML = 'Hai vinto!';
} else {
    document.querySelector('h1').innerHTML = 'Ha vinto il computer!';
}


/* predere value da html
creo un addEvent
con i valori eseguo calcoli
inserisco i dati e il risultato in html*/

const billToKm = 0.21
const discount20 = 0.8;
const discount40 = 0.6;


const inputName = document.querySelector("name['userName']");
const inputKm = document.querySelector("name['kmTrip']");
const inputMinor = document.querySelector("value['Minorenne']");
const inputAdult = document.querySelector("value['Maggiorenne']");
const inputOver = document.querySelector("value['Over']");
const submitButton = document.getElementById("submit");

/* Calcolo sconto */

let totalPrice = billToKm * parseInt('inputKm')


submitButton.addEventListener("click", function () {
    if (inputMinor) {
        totalPrice = totalPrice * discount20 
    } else if (inputOver) {
        totalPrice = totalPrice * discount40
    } else (inputAdult) {
    
    }

    console.dir(inputKm)
});





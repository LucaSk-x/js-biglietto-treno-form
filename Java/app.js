let userNameElement = document.querySelector("[name='userName']");
let userKmElement = document.querySelector("[name='userKm']");
let userAgeElement = document.querySelector("[name='userAge']");
const generaBtn = document.getElementById("generaBtn");

const kmPrice = 0.21;
let scontoDaApplicare;
let prezzoFinale;

generaBtn.addEventListener('click', function() {

    userNameElement.value
    userKmElement.value
    userAgeElement.value

    let datiValidi = true;

// validare/ controllare i dati inseriti
if (isNaN(userAgeElement.value) || isNaN(userKmElement.value)) {
    datiValidi = false;
    alert("Devi inserire un numero valido per KM ed età");
}

// controllo che età sia maggiore di 14
if (userAgeElement.value < 14) {
    datiValidi = false;
    alert("Sei troppo piccolo, torna a casa!");
}

// controllo che i km non siano superiori a 2000 e minori di 10
if (userKmElement.value > 2000 || userKmElement.value < 10) {
    datiValidi = false;
    alert("I Km devono essere compresi tra 10 e 2000");
}

    if (datiValidi) {
        prezzoFinale = kmPrice * userKmElement.value
    }

    if (userAgeElement.value < 18) {
        scontoDaApplicare = 0.80
    } else if (userAgeElement.value > 65) {
        scontoDaApplicare = 0.60
    } else {
        scontoDaApplicare = 1
    }

    prezzoFinale = scontoDaApplicare * prezzoFinale

    let userName = document.querySelector('#userName');
    userName.innerHTML = userNameElement.value

    let userPrice = document.querySelector('#priceTicket');
    userPrice.innerHTML = prezzoFinale

    console.log(prezzoFinale)
})


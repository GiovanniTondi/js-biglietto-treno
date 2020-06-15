/*
    Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
    Sulla base di queste informazioni dovrà:
    calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
*/


// Dichiarazione variabili
var prezzoScontato = 0;
var output;

// Chiedere i km
var km = prompt("Quanti km devi percorrere?");

// Chiedere l'età
var eta = parseInt(prompt("Quanti anni hai?"));

// Calcolo il prezzo totale del viaggio (km * 0.21)
var prezzo = (km * 0.21).toFixed(2);

// Se età inferiore a 18 calcolare uno sconto del 20%
if (eta < 18) {
    prezzoScontato = (prezzo * 0.8).toFixed(2);
}

// Se età superiore a 65 calcolare uno sconto del 40%
if (eta > 65){
    prezzoScontato = (prezzo * 0.6).toFixed(2);
}

// Controllo i dati
if ((isNaN(eta)) || isNaN(prezzo)) {
    output = "Hai inserito dati non validi, riprova!"
} else if (prezzoScontato != 0) {
    output = "Il prezzo del tuo biglietto è: <br>€" + prezzoScontato + "<br> al posto di: <br>€" + prezzo;
} else {
    output = "Il prezzo del tuo biglietto è: <br>€" + prezzo;
}

// Stampare output
document.getElementById('output').innerHTML = output;

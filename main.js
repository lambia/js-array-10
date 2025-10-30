/*************************** Array Basics **********************/

const coloriBase = [ "rosso", "verde", "blu" ]; //creo una lista di colori (array di stringhe)

console.log( "Stampo il primo item: ", coloriBase[0] ); //stampo il primo colore della lista
console.log( "Stampo array originale: ", coloriBase );  //stampo tutto l'array

coloriBase[1] = "giallo";   //cambio il secondo valore della lista
coloriBase.push( "verde" ); //aggiungo un colore in fondo alla lista

console.log( "Stampo array modificato: ", coloriBase );  //stampo di nuovo tutto l'array, questa volta mutato

// alert ( colori ); //stampo tutto l'array, ma fuori dalla console verrà convertito in stringa, attenzione!

console.log("### Fine array basics ###");

/******************* Utente popola array ***********************/

const coloriUtente = [];

// const x = prompt("inserisci un colore"); //prendo l'input dell'utente e lo salvo in una variabile
// coloriUtente.push(x); //aggiungo all'array la variabile appena creata

// Oppure prendo l'input utente e lo scrivo direttamente in array
// coloriUtente.push( prompt("inserisci un colore") );
// coloriUtente.push( prompt("inserisci un colore") );
// coloriUtente.push( prompt("inserisci un colore") );

// Oppure per "n" volte, prendo l'input e lo scrivo in array
for (let n = 0; n < 3; n++) {
    coloriUtente.push( prompt("inserisci un colore") );
}

console.log("Colori scelti dall'utente: ", coloriUtente);
console.log("### Fine utente popola array ###");



const citta = [ "Torino", "Roma", "Napoli", "Bari" ];
/************** Iterazione manuale (ciclo) su array ************/
for (let indice = 0; indice < 4; indice++ ) {
    console.log( citta[indice] );
}
console.log("### Fine iterazione manuale ###");

/************* Iterazione migliore (ciclo) su array ************/
for (let indice = 0; indice < citta.length; indice++ ) {
    console.log( citta[indice] );
}
console.log("### Fine iterazione .length ###");

/******** Iterazione (ciclo) su array con costante *************/
for (let indice = 0; indice < citta.length; indice++) {
    const elemento = citta[indice]; //variabile d'appoggio (temporanea)
    console.log(elemento);
}
console.log("### Fine iterazione .length + variabile d'appoggio ###");
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


let button = document.getElementById('button')
let numeroPc = document.getElementById("numeropc");
let numeroUtente = document.getElementById("numero-utente");

button.addEventListener("click", function (){
    let pcNumber = Math.floor(Math.random() * (7 - 1)) + 1;
    console.log('Numero del pc',pcNumber);
    numeroPc.innerHTML = 'Il dado del banco è: ' + pcNumber;

    let userNumber = Math.floor(Math.random() * (7 - 1)) + 1;
    console.log("Numero dell'utente", userNumber);
    numeroUtente.innerHTML = 'IL tuo dado è: ' + userNumber;
    if (userNumber > pcNumber){
        alert('hai vinto!')
    }
    else if(userNumber == pcNumber){
        alert('Pari!')
    }
    else{
        alert('Hai perso!')
    }
       
})

    



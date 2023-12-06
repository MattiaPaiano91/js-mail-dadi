// consegna:
// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// step:
// 1) -Chiediamo all'utente la sua mail;

// 2) -Creiamo una lista di mail con la quale si può accedere;

// 3) -Controlliamo che la mail inserita dall'utente sia nella lista che abbiamo creato;

// 4) -Stampiamo un messaggio con l'esito del controllo;



 let button = document.getElementById("button");
 console.log(button);

 const emailList = [
   "pincopallo@gmail.com",
   "pincopallo1@gmail.com",
   "pincopallo2@gmail.com",
   "pincopallo3@gmail.com",
   "pincopallo4@gmail.com",
   "pincopallo5@gmail.com",
 ];
 // console.log('Email-list',emailList, typeof emailList)
let control = false;

 button.addEventListener("click", function () {
    const email = document.getElementById('usermail').value;

    for (let i = 0; i < emailList.length; i++) {
        if (email == emailList[i]) {
            control = true;
            break
        }
        
         console.log("username inserito", email, "controllo array", email[i]);
    }
   
    if(control == true){
        alert('puoi entrare');
        control = false
    }
    else{
        alert("non può entrareh");
    }
     
    
 }
 );
        

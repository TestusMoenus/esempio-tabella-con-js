const nome =document.getElementById ("nome");
const cognome =document.getElementById ("cognome");
const eta =document.getElementById ("eta");
const hobby =document.getElementById ("hobby");
const tabella =document.getElementById ("tabella");
const btnAggiungi =document.getElementById ("btn-inserisci");
const rimuovi =document.getElementById ("btn-rimuovi");
const cancellaTutto =document.getElementById ("btn-cancella-tutto");
let persona = {
    nome: "",
    cognome: "",
    eta: 1,
    hobby: ""
}; 
let arr = [
    
];

function inizializzaTabella () {
    tabella.innerHTML ="";
    let header = document.createElement ("tr");
        
            for (const key in persona) {
                const th = document.createElement ("th");
                th.innerText = key.charAt(0).toUpperCase() + key.slice(1);
                header.appendChild (th);
            }
    tabella.appendChild (header);
}
function aggiornaTabella () {
    inizializzaTabella ();
    let c = 0
    for (let i = 0; i < arr.length; i++) { 
        const riga = document.createElement ("tr");
        const personaCorrente = arr[i];


        for (const key in personaCorrente) { 
            const cella = document.createElement ("td");
            if (key == "nome") {
                cella.innerHTML = `<b>${c + 1}</b>\t${personaCorrente[key]}`;
            }else{
            cella.innerText = personaCorrente[key];}
            riga.appendChild (cella);
        }
        tabella.appendChild (riga);
        c++;
    }
}

function aggiungi () {
    if ((nome.value).trim() =="" || (cognome.value).trim() =="" ||
     eta.value =="" || (hobby.value).trim() =="" || isNaN (Number(eta.value)) || Number(eta.value) <=0 ) {
        alert ("Compila tutti i campi in modo adeguato");
        return;
    }
    persona = {
        nome: (nome.value).trim(),
        cognome: (cognome.value).trim(),
        eta: Number(eta.value),
        hobby: (hobby.value).trim()
    };

    arr.push (persona);
    aggiornaTabella ();
    nome.value ="";
    cognome.value ="";
    eta.value ="";
    hobby.value ="";
}

function rimuoviFunzione () {
    if (arr.length == 0) {
        alert ("Nessuna riga da rimuovere");
        return;
    }
    arr.pop ();
    aggiornaTabella ();
}

function cancellaTuttoFunction () {
    if (arr.length ==0) {
        alert ("Nessuna riga da rimuovere");
        return;
    }   
    arr = [];
    aggiornaTabella ();
}

inizializzaTabella();
btnAggiungi.addEventListener ("click",aggiungi);
rimuovi.addEventListener ("click",rimuoviFunzione);
cancellaTutto.addEventListener ("click",cancellaTuttoFunction);
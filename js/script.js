const nome =document.getElementById ("nome");
const cognome =document.getElementById ("cognome");
const eta =document.getElementById ("eta");
const hobby =document.getElementById ("hobby");
const tabella =document.getElementById ("tabella");
const btnAggiungi =document.getElementById ("btn-inserisci");
const rimuovi =document.getElementById ("btn-rimuovi");
const cancellaTutto =document.getElementById ("btn-cancella-tutto");
const persona = {
    nome: "",
    cognome: "",
    eta: "",
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
    for (const i in arr) {
        for (const key in i) {
            const riga = document.createElement ("tr");
            for (const key in arr[i]) {
                const cella = document.createElement ("td");
                cella.innerText = arr[i][key];
                riga.appendChild (cella);
            }
            tabella.appendChild (riga);
        }
    }


}

function aggiungi () {
    if (nome.value =="" || cognome.value =="" || eta.value =="" || hobby.value ==""    ) {
        alert ("Compila tutti i campi");
        return;
    }
    
    const persona = {
        nome: nome.value,
        cognome: cognome.value,
        eta: eta.value,
        hobby: hobby.value
    };  
    arr.push (persona);
    aggiornaTabella ();
    nome.value ="";
    cognome.value ="";
    eta.value ="";
    hobby.value ="";
}

btnAggiungi.addEventListener ("click",aggiungi);
rimuovi.addEventListener ("click",rimuovi);
cancellaTutto.addEventListener ("click",cancellaTutto);
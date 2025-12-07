const nome =document.getElementById ("nome");
const cognome =document.getElementById ("cognome");
const eta =document.getElementById ("eta");
const hobby =document.getElementById ("hobby");
const tabella =document.getElementById ("tabella");
const btnAggiungi =document.getElementById ("btn-inserisci");
const rimuovi =document.getElementById ("btn-rimuovi");
const cancellaTutto =document.getElementById ("btn-cancella-tutto");
let arr = [];

function aggiornaTabella () {
    let contenuto ="";
    tabella.innerHTML ="";

    for (const i in arr) {
        for (const key in i) {
            contenuto += `<td>${i[key]}</td>`;
        }
        contenuto += "</tr>";
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
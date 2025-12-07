const nome =document.getElementById ("nome");
const cognome =document.getElementById ("cognome");
const eta =document.getElementById ("eta");
const tabella =document.getElementById ("tabella");
const btnAggiungi =document.getElementById ("btn-inserisci");
const rimuovi =document.getElementById ("btn-rimuovi");
const cancellaTutto =document.getElementById ("btn-cancella-tutto");
let arr = [];



btnAggiungi.addEventListener ("click",aggiungi);
rimuovi.addEventListener ("click",rimuovi);
cancellaTutto.addEventListener ("click",cancellaTutto);
const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const eta = document.getElementById("eta");
const hobby = document.getElementById("hobby");
const tabella = document.getElementById("tabella");
const tabella_header = document.getElementById("header_tabella");
const btnAggiungi = document.getElementById("btn-inserisci");
const rimuovi = document.getElementById("btn-rimuovi");
const cancellaTutto = document.getElementById("btn-cancella-tutto");

let persona = {
    nome: "",
    cognome: "",
    eta: 1,
    hobby: ""
};

// --- MODIFICA 1: CARICAMENTO DEI DATI ---
// All'avvio, controlliamo se c'è qualcosa nel localStorage
// Usiamo JSON.parse per riconvertire la stringa in oggetto 
// Se non c'è nulla (null), inizializziamo 'arr' come array vuoto []
let savedData = localStorage.getItem("listaPersone"); // [cite: 36]
let arr = savedData ? JSON.parse(savedData) : [];

function inizializzaTabella() {
    tabella_header.innerHTML = "";
    tabella.innerHTML = "";
    let header = document.createElement("tr");

    for (const key in persona) {
        const th = document.createElement("th");
        th.innerText = key.charAt(0).toUpperCase() + key.slice(1);
        header.appendChild(th);
    }
    tabella_header.appendChild(header);
}

function aggiornaTabella() {
    inizializzaTabella();
    let c = 0
    for (let i = 0; i < arr.length; i++) {
        const riga = document.createElement("tr");
        if (i % 2 == 0) riga.classList.toggle("table-info")
        else riga.classList.toggle("table-warning")
        const personaCorrente = arr[i];

        for (const key in personaCorrente) {
            const cella = document.createElement("td");
            if (key == "nome") {
                cella.innerHTML = `<b>${c + 1}</b>\t${personaCorrente[key]}`;
            } else {
                cella.innerText = personaCorrente[key];
            }
            riga.appendChild(cella);
        }
        tabella.appendChild(riga);
        c++;
    }
}

// Funzione Helper per salvare (evitiamo di riscrivere il codice più volte)
function salvaDati() {
    // Trasformiamo l'array di oggetti in una stringa JSON 
    const stringaJson = JSON.stringify(arr);
    // Salviamo nel localStorage con una chiave specifica [cite: 13, 33]
    localStorage.setItem("listaPersone", stringaJson);
}

function aggiungi() {
    if ((nome.value).trim() == "" || (cognome.value).trim() == "" ||
        eta.value == "" || (hobby.value).trim() == "" || isNaN(Number(eta.value)) || Number(eta.value) <= 0) {
        alert("Compila tutti i campi in modo adeguato");
        return;
    }
    if (Number(eta.value) > 120) {
        alert("mettere un'eta inferiore di 120")
        return
    }
    persona = {
        nome: (nome.value).trim(),
        cognome: (cognome.value).trim(),
        eta: Number(eta.value),
        hobby: (hobby.value).trim()
    };

    arr.push(persona);
    
    // --- MODIFICA 2: SALVATAGGIO ---
    salvaDati(); // Salviamo ogni volta che aggiungiamo qualcuno
    
    aggiornaTabella();
    nome.value = "";
    cognome.value = "";
    eta.value = "";
    hobby.value = "";
}

function rimuoviFunzione() {
    if (arr.length == 0) {
        alert("Nessuna riga da rimuovere");
        return;
    }
    arr.pop();

    // --- MODIFICA 3: SALVATAGGIO DOPO RIMOZIONE ---
    salvaDati(); // Aggiorniamo il storage rimuovendo l'ultimo
    
    aggiornaTabella();
}

function cancellaTuttoFunction() {
    if (arr.length == 0) {
        alert("Nessuna riga da rimuovere");
        return;
    }
    arr = [];

    // --- MODIFICA 4: PULIZIA STORAGE ---
    // Possiamo usare clear() o removeItem() [cite: 18, 20]
    localStorage.removeItem("listaPersone"); 
    
    aggiornaTabella();
}

// Inizializza e carica subito i dati salvati
inizializzaTabella();
aggiornaTabella(); // Aggiunto per mostrare i dati al caricamento della pagina

btnAggiungi.addEventListener("click", aggiungi);
rimuovi.addEventListener("click", rimuoviFunzione);
cancellaTutto.addEventListener("click", cancellaTuttoFunction);
/*
    ho messo le variabili fuori dalla funzione però non so cosa sia meglio.
    secondo voi è meglio tenerle vuori in modo che siano accessibili da tutto il js o sarebbe meglio definirle solo dove servono
    epoi nel caso servissero da un altra parte ridefinirle.
    perche secondo me in questi esercizzi semplici non credo sia un problema definirle fuori però nel caso di codici più complessi
    magari conviene ridefinirle continuamente dove servono e cosi nel caso poter assegnare lo stesso nome a delle variabili in
    funzioni diverse per non complicare il codice e renderlo più difficile da comprendere, tanto con lo scope locale e lo 
    shadowing delle variabili non dovrebbe essere un problema. però boh voi che dite?
*/

let lampadina = document.getElementById('lampadina');
let button = document.getElementById('toggleButton');
let body = document.body;

button.addEventListener('click', () => {

    if (lampadina.getAttribute('src').includes("img/white_lamp.png")) {
        lampadina.setAttribute('src', "img/yellow_lamp.png");  // Cambia l'immagine con la lampadina gialla
        button.innerText = "Spegni";  // Cambia il testo del bottone in "Spegni"
        body.style.backgroundColor = "#ffffcc";  // Colore di sfondo giallo chiaro
    } else {
        lampadina.setAttribute('src', "img/white_lamp.png");  // Cambia l'immagine con la lampadina bianca
        button.innerText = "Accendi";  // Cambia il testo del bottone in "Spegni"
        body.style.backgroundColor = "black";  // Colore di sfondo nero
    }
});
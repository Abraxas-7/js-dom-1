document.getElementById('toggleButton').addEventListener('click', () => {
    let lampadina = document.getElementById('lampadina');

    if (lampadina.getAttribute('src').includes("img/white_lamp.png")) {
        lampadina.setAttribute('src', "img/yellow_lamp.png");  // Cambia l'immagine con la lampadina gialla
    } else {
        lampadina.setAttribute('src', "img/white_lamp.png");  // Cambia l'immagine con la lampadina bianca
    }
});
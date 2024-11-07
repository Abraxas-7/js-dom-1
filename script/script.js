document.getElementById('toggleButton').addEventListener('click', function() {
    let lampadina = document.getElementById('lampadina');

    if (lampadina.src.includes("img/white_lamp.png")) {
        lampadina.src = "img/yellow_lamp.png";
    } else {
        lampadina.src = "img/white_lamp.png";
    }
});
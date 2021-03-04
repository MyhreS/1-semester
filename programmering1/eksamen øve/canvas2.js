window.onload = table;

var array = [50, 75, 40, 100];

function table() {
    var canvas = document.getElementById("idCanvas");
    var c = canvas.getContext("2d");

    //Lager linjene som alt står på
    c.beginPath();
    c.moveTo(50, 50);
    c.lineTo(50, 350);
    c.lineTo(350, 350);
    c.stroke(); //Tegner oppenfra og ned, så til siden (høyre)

    let largestValueTimes = 100*1.5; //Eventuelt array som finner ut av det
    let middle = largestValueTimes/2;
    let bottom = 0;
    //Lager tekst på venstre
    c.beginPath();
    c.font = "12px Arial";
    c.fillText(largestValueTimes + "kr", 17, 60);
    c.fillText(middle + "kr", 17, 200);
    c.fillText(bottom + "kr", 17, 350);
    
    

    //Lager tabellene
    let bredde = (300 / array.length)-10; // Dynamisk bredde
    let neste = 0;

    for(let i = 0; i < array.length; i++) {
        var random = '#'+Math.floor(Math.random()*16777215).toString(16);
        c.beginPath();
        c.rect(neste + 60, 350, bredde, -(array[i]*3)/1.5);
        c.fill();
        c.fillText("Text", neste + 60, 365);
        neste += bredde + 10;
    }
}
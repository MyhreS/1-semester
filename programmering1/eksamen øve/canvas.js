window.onload = update;

function update() {
    draw();
}

function draw() {
    var canvas = document.getElementById("idCanvas");
    var c = canvas.getContext("2d");

    //Rektangel = (x-pos, y-pos, x-width, y-width)
    c.beginPath();
    c.rect(100, 100, 50, 50);
    c.fill();

    //Sirkel = (x-pos-center, y-pos-center, r, startAngle, endAngle)
    c.beginPath();
    c.arc(50, 50, 20, 0, 2*Math.PI);
    c.stroke();

    //Trekant
    c.beginPath();
    c.moveTo(5, 5) // x-pos, y-pos
    c.lineTo(100, 5); // x-pos, y-pos
    c.lineTo(5, 30);
    c.closePath();
    c.stroke();

    //Tekst = (tekst, x-pos, y-pos)
    c.beginPath();
    c.font = "15px Arial";
    c.fillText("Hello World", 100, 20); //strokeText() to linjer


    //Styling
    c.strokeStyle = "blue";
    c.fillStyle = "red";
    c.lineWidth = "5px";
    c.lineCap = "butt"; //butt, round or square

}
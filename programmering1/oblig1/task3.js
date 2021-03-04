window.onload = update;

function update() {

	var nummer1 = parseInt(prompt("Skriv inn et tall"));
	var nummer2 = parseInt(prompt("Skriv inn enda et tall"));;

	var addition = nummer1 + nummer2;
	var subtraction = nummer1 - nummer2;
	var multiplication = nummer1 * nummer2;
	var division = nummer1 / nummer2;

	document.getElementById("output").innerHTML = "Addition = " + addition + ". Subtraction = " + subtraction + ". Multiplication = " + multiplication + ". Division = " + division;
}
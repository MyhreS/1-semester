window.onload = update;

var utregning = 0;

function update() {
	document.getElementById('pluss').onclick = regnUt1;
	document.getElementById('minus').onclick = regnUt2;
	document.getElementById('gange').onclick = regnUt3;
	document.getElementById('dele').onclick = regnUt4;
}

function regnUt1() {
	var nummer1 = parseInt(document.getElementById('input1').value);
	var nummer2 = parseInt(document.getElementById('input2').value);

	utregning = nummer1 + nummer2;

	document.getElementById("output").innerHTML = "Addition = " + utregning;

	oddOrNot();
}
function regnUt2() {
	var nummer1 = parseInt(document.getElementById('input1').value);
	var nummer2 = parseInt(document.getElementById('input2').value);

	utregning = nummer1 - nummer2;

	document.getElementById("output").innerHTML = "Subtraction = " + utregning;

	oddOrNot();
}
function regnUt3() {
	var nummer1 = parseInt(document.getElementById('input1').value);
	var nummer2 = parseInt(document.getElementById('input2').value);

	utregning = nummer1 * nummer2;

	document.getElementById("output").innerHTML = "Multiplication = " + utregning;

	oddOrNot();
}
function regnUt4() {
	var nummer1 = parseInt(document.getElementById('input1').value);
	var nummer2 = parseInt(document.getElementById('input2').value);

	utregning = nummer1 / nummer2;

	document.getElementById("output").innerHTML = "Division = " + utregning;

	oddOrNot();
}

function oddOrNot() {
	if (utregning % 2 == 0) {
		document.getElementById("output").innerHTML += ", this number is even";
	}

	else {
		document.getElementById("output").innerHTML += ", this number is odd";
	}
}
window.onload = update;

var nummer2 = 2;
var nummer3 = 3;

function update() {
	

	document.getElementById('btnSolve').onclick = solveForMe;
}

function solveForMe() {
	console.log(nummer3 + nummer2);
	console.log(nummer3 - nummer2);
	console.log(nummer3 * nummer2);
	console.log(nummer3 / nummer2);
}
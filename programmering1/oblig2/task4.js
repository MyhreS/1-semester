window.onload = update;

function update() {
	document.getElementById('btnXOR').onclick = XOR;
	document.getElementById('btnAND').onclick = AND;
	document.getElementById('btnOR').onclick = OR;
	document.getElementById('btnShow').onclick = show;
}

//I user 1 in 3 functions instead of two in 1. Is that ok? I think it made it make more sence?

function XOR() {
	var a = document.getElementById('inputA').value;
	var b = document.getElementById('inputB').value;
	var bitXOR = a^b;

	document.getElementById('output1').innerHTML = bitXOR;
}

function AND() {
	var a = document.getElementById('inputA').value;
	var b = document.getElementById('inputB').value;
	var bitAND = a&b;

	document.getElementById('output1').innerHTML = bitAND;
}

function OR() {
	var a = document.getElementById('inputA').value;
	var b = document.getElementById('inputB').value;
	var bitOR = a|b;

	document.getElementById('output1').innerHTML = bitOR;
}

//Slik du ønsket det?
function show() {
	var a = 2;
	var b = 5;
	var calc = (a|b) & !(a&b); 

	document.getElementById('output2').innerHTML = calc + " = (a|b) & !(a&b).";
}

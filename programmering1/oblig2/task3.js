window.onload = update;

function update() {
	document.getElementById('btnCalc').onclick = calculateIt;
}

function calculateIt() {
	var r = document.getElementById('inputRadius').value;
	var A = Math.PI * Math.pow(r, 2);
	var done = A.toFixed(2);

	if (r < 0) {
		document.getElementById('output').innerHTML = "undefined";
	}
	else {
	document.getElementById('output').innerHTML = done;
	}	
	
	document.getElementById('inputRadius').value = "";
}
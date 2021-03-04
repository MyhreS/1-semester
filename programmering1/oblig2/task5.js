window.onload = update;

function update() {

	for(var a = 0; a <= 9; a++) {
		for(var c = 0; c <= a; c++) {
		document.write("*");
		}
		for (var b = 8; b >= a; b--) {
		document.write("---");
		}
		for(var c = 0; c <= a; c++) {
		document.write("*");
		}

		document.write("<br>");
	}

}
window.onload = update;

	var array = ["Apples", "Oranges", "Grapes"];

	function update() {
		document.getElementById("btnPush").onclick = show;
		document.getElementById('btnUndo').onclick = undo;
		document.getElementById('deleteNumber').onclick = deleteNr;

		showAllItemsInArray();
	}



	function showAllItemsInArray() {
		document.getElementById("showItems").innerHTML = "";
		document.getElementById("showInfo").innerHTML = "";

		var first = array[0];
		var last = array[array.length - 1]
		var arrayNr = array.length;

		for (i = 0; i < array.length; i++){
			document.getElementById("showItems").innerHTML += '<br>' + i + "- " + array[i];
		}
		//Show info
		document.getElementById("showInfo").innerHTML += "<br>" + first + " Is the first fruit in the list";
		document.getElementById("showInfo").innerHTML += "<br>" + last + " Is the last fruit in the list";
		document.getElementById("showInfo").innerHTML += "<br>" + arrayNr + " Is the number of fuits in the list";
	}



	function show() {
		var inputValue = document.getElementById("myInput").value;

		if (inputValue == "") {alert("Please add something")}
		else {
		array.push(inputValue);

		showAllItemsInArray();
		}
	}

	function undo() {
		array.pop();

		showAllItemsInArray();
	}

	function deleteNr() {
		var nr = parseInt(document.getElementById('inputNr').value);

		array.splice(nr, 1);

		document.getElementById('inputNr').value = "";
		showAllItemsInArray();

	}
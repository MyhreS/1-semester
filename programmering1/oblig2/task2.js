window.onload = update;
	
	//global variable
	var username = "";
	var password = "";
	var passcheck = "";
	var check = "";

function update() {
	//onclick
	document.getElementById('btnSubmit').onclick = add;
	document.getElementById('btnCheck').onclick = checkIt;
}

function add() {

	//inputs the value to the global variables username and password
	username = document.getElementById('inputUsername').value;
	password = document.getElementById('inputPassword').value;
	check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_-])/;


	//Clears the input fields so it looks like someting has happened
	document.getElementById('inputUsername').value = "";
	document.getElementById('inputPassword').value = "";
	document.getElementById('output').innerHTML = "";

	//checks if password is between 8 and 32 characters
	if(password.length < 8 || password.length > 32) {
		password = "";
		username = "";
		alert("Password must be between 8 and 32 characters");
	}
	//checks if username is equal to password.
	if(username == password) {
		password = "";
		username = "";
		alert("Password must be different from username");		
	}
	//The rest
	if(!(password.match(check))) {
		password = "";
		username = "";
		alert("Password must have atleast one upper and one lowercase letter. Altleast one special character, and contain atleast one number");
	}

	//I did it this way because you get better feedback at what is wrong. I could also just add {8, 32} to the regEx/check
	//And the code could be much simpler but the bonus task was at the end
}

function checkIt() {
	//checks if password is not ""
	if (password.length > 1) {
		//inputs value to checkifusername and checkifpassword
		checkIfUsername = document.getElementById('inputedUsername').value;
		checkIfPassword = document.getElementById('inputedPassword').value;

		//checks if username and password is correct. If some or both of them are wrong it will tell you
		if (username == checkIfUsername & password == checkIfPassword) {
		document.getElementById('output').innerHTML = "Your username and password is correct! Welcome!";
		}
		else if (username != checkIfUsername) {
		document.getElementById('output').innerHTML = "Your username is not correct!";
			if (password != checkIfPassword){
				document.getElementById('output').innerHTML = "Your username and password is not correct!";
			}
		}
		else {
			document.getElementById('output').innerHTML = "Your password is not correct!";
		}
	}

	//Clears the input fields so it looks like someting has happened
	document.getElementById('inputedUsername').value = "";
	document.getElementById('inputedPassword').value = "";
}
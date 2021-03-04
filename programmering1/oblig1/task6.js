window.onload = startup;

function startup() {
	var submit = document.getElementById("formSubmit");

	submit.addEventListener("click", checkNumber);
}

function checkNumber() {
  var coffee = parseInt(document.getElementById("formAmount").value);
  var output = document.getElementById("formResult");

  if(coffee <= 3) {
    output.innerHTML = "You definitely need more coffee! How are you awake?"; 
	}
  else {
    output.innerHTML = "You need more coffee! You need at least " + (coffee + 1) + " cups in total";
	}
}
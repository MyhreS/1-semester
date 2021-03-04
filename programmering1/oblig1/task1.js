   window.onload = startup;

    function startup() {
      var btnBye = document.getElementById("btnBye");
      btnBye.addEventListener("click", msgBye)
    }

    function msgBye() {
      alert('Get out of my sight plebeian!');
    }
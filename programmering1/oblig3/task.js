var myArray;
var checkArrayA = [];
var checkArrayB = [];
var calcResultArray = [];
var myString;
var when = 0; //The date
var what = 1; //What was bought
var where = 2; //Where is was bought
var howMuch = 3; //How much did it cost

//When the input file changes it goes to this function. This reads the file and adds it to myArray
function readFile() {
    //Takes the input and makes it into text
    let input = document.getElementById("myInp");
    let file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
  
    //With the reader.onload we are able to use the reader.result. That gives us the text in a string.
    //Then it gets placed into a array seperated by , and " ". /[\s,]+/ means " " and ,
    reader.onload = function() {
      myArray = reader.result.split(/[\s,]+/);
      myString = reader.result;
      showPDF(); //Shows pdf file links
      showString(); //Just shows the string
      showArray(); //Shows us the array
      calcStatistics(); //Calculates the statistics
      makeTable(); //Sends it to make a table
      makeCalcTable(); //Makes the table for the calculations
      search(); //Does the bonus task
    };
    
    reader.onerror = function() {
      console.log(reader.error);
    };
  }

  function showPDF() {
    document.getElementById("hShowTask1").innerHTML = "Task 1 - Planning";
    document.getElementById("hShowTask7").innerHTML = "Task 7 - Update Plan";
    document.getElementById("hShowTask8").innerHTML = "Task 8 - Advance Plan";
    document.getElementById("aPDF1").style.visibility = "visible";
    document.getElementById("aPDF2").style.visibility = "visible";
    document.getElementById("aPDF3").style.visibility = "visible";
  }
  //shows a string in task 2
  function showString() {
    document.getElementById("hShowTask2").innerHTML = "Task 2 - A string with the results";
    document.getElementById("pTask2").innerHTML = myString;
  }

  //Shows an array in task 3
  function showArray() {
    document.getElementById("hShowTask3").innerHTML = "Task 3 - An array with the results";
    document.getElementById("pTask3").innerHTML = myArray[0] + " = myArray[0]" + "<br>" + myArray[9] + " = myArray[9]" ;
  }

  //Calculates the statiscics in task 4
  function calcStatistics() {
    document.getElementById("hShowTask4").innerHTML = "Task 4 - Calculate Global Statistics";
    
    //Different variables
    var output = document.getElementById("pTask4");
    var a = 1;
    var b = 2;
    var c = 3;
    var minimum = Number(myArray[c]);
    var amount = 0;
    var maximum = 0;
    var average  = 0;

    //Finds out how many different transactions and locations it is and adds it to an array
    for(let i = 0; i <= myArray.length-1; i++) {   
      if(checkArrayA.indexOf(myArray[b]) == -1) {
        checkArrayA.push(myArray[b]);
      }
      if(checkArrayB.indexOf(myArray[a]) == -1) {
        checkArrayB.push(myArray[a]);
      }
     a += 4; b += 4;
    }

    //Calculates the total amount, maximum and minimum
    for(let i = 0; i <= myArray.length/4-1; i++) {
      amount += Number(myArray[c]);

        if(maximum < Number(myArray[c])) {
          maximum = myArray[c];
        }
        if(minimum > Number(myArray[c])) {
          minimum = myArray[c];
        }
       
      c += 4;
    }
    
    //Calculates average
    average = amount / Number(myArray.length/4);

    //Calculates the observationtime in days
    var dt1 = new Date(myArray[0]);
    var dt2 = new Date(myArray[myArray.length-4]);
    var date = Math.abs(dt1-dt2);
    date = date/1000/60/60/24;
    date = Math.ceil(date);

    //Adds the results to an array so it can be used in task 6
    calcResultArray.push(checkArrayA.length-1, checkArrayB.length-1, amount.toFixed(1), average.toFixed(1), maximum, minimum, date);

    //Outputs everything
     output.innerHTML = checkArrayA.length-1 + " different transaction locations" + "<br>";
     output.innerHTML += checkArrayB.length-1 + " different transaction types" + "<br>";
     output.innerHTML += amount.toFixed(1) + " is the total amount" + "<br>";
     output.innerHTML += average.toFixed(1) + " is the average amount" + "<br>";
     output.innerHTML += maximum + " is the maximum amount" + "<br>";
     output.innerHTML += minimum + " is the minimum amount" + "<br>";
     output.innerHTML += date + " days is the duration of the obervationtime";
  }

  //Creates a table in task 5
  function makeTable() { 
    document.getElementById("hShowTask5").innerHTML = "Task 5 - A table with the results";     
      var output = document.getElementById("out");

      
      //Add serial number
      var SnPlace = 4;
      var SN = 1;
      let length = myArray.length/4;
      for(let i = 0; i < length; i++) {
      myArray.splice(SnPlace, 0, SN);
      SnPlace += 5;
      SN++;
      }
      //Make table
      var header = true;
      var table = "";
      var nr = 0;
      var row = 16+1;
      var colum = 5;
      table += '<table>';
      for(var r = 0; r < row; r++) {
          table += '<tr>';
            if (header == true) {
              table += '<th>' + 'Date' + '</th>' + '<th>' + 'Type' + '</th>' + '<th>' + 'Location' + '</th>' + '<th>' + 'Amount' + '</th>' + '<th>' + 'Serial Number' + '</th>';
              header = false;
            }
            else{
              for(var c = 0; c < colum; c++) {
              table += '<td>' + myArray[nr] + '</td>';
              nr ++;
              }
            }
          
  
          table += '</tr>';
      }
      table += '</table>';
  
      output.innerHTML = table;

  }

  //Creates a table in task 6
  function makeCalcTable() {
    document.getElementById("hShowTask6").innerHTML = "Task 6 - A table with the calculation results";     
    var output = document.getElementById("out2");

    //Make table
    var header = true;
    var table = "";
    var nr = 0;
    var row = 2;
    var colum = 7;
    table += '<table>';
    for(var r = 0; r < row; r++) {
        table += '<tr>';
          if (header == true) {
            table += '<th>' + 'Locations' + '</th>' + '<th>' + 'Types' + '</th>' + '<th>' + 'Total' + '</th>' + '<th>' + 'Average' + '</th>' + '<th>' + 'Maximum' + '</th>' + '<th>' + 'Minimum' + '</th>' + '<th>' + 'Duration (days)' + '</th>';
            header = false;
          }
          else {
            for(var c = 0; c < colum; c++) {
            table += '<td>' + calcResultArray[nr] + '</td>';
            nr ++;
            }
          }
        

        table += '</tr>';
    }
    table += '</table>';

    output.innerHTML = table;
  }
  
  //Searches after word
  function search() {
    document.getElementById("hShowTask9").innerHTML = "Task 8 - Bonus";
    document.getElementById("inputChoice").style.visibility = "visible";
    document.getElementById("btnPush").style.visibility = "visible";
    document.getElementById("btnPush").onclick = doSearch; //Listening to btn
  }

  //Finds out if the keyword and the array match. If so it prints out the relevant information
  function doSearch() {
    input = document.getElementById("inputChoice").value;
    searchArray = [];
    var relevant = "";

    let length = myArray.length; 
    for(let i = 0; i < length; i+=5) {
      searchArray.push([myArray[i], myArray[i+1], myArray[i+2], myArray[i+3], myArray[i+4]]);
    }

    for(let i = 0; i < length/5; i++) {
      if(searchArray[0 + i].indexOf(input) !== -1 || searchArray[0 + i].indexOf(Number(input)) !== -1) {
        for(let a = 0; a < 5; a++) {
          relevant += searchArray[i][a] + " | ";
        }
        relevant += '<br>';
      }
    }
    document.getElementById("pTask9").innerHTML = relevant;
  }
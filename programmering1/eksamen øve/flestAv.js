window.onload = update;
var array = [1, 4, 5, 5, 7, 2, 1, 1, 5, 5, 7, 9, 0];
function update() {
   //Array
   var save = [];
   var longest = {"name": 0, "amount": 0};
   //Løkke
   for(let a = 0; a < array.length; a++) {
      save = []; //Sletter save hver runde
      for (let i = 0; i < array.length; i++){
         if(array[a] == array[i]) {
            save.push(array[i]);
         }
      }
      if(save.length > longest.amount) {
         longest.name = array[a];
         longest.amount = save.length;
      }
   }
   //Output
   console.log(longest.name + "-" + longest.amount); 
}








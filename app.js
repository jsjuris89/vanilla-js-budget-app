
// Budget Controller
let budgetController = (function() {
   // some code
})();

// UI Controller
let UIController = (function(){
   // some code
})();


// Global App Controller
let controller = (function(budget, UI) {

   document.querySelector(".add-btn").addEventListener("click", addItem);
   function addItem() {
      console.log("Button was clicked!")
   }
   
})(budgetController, UIController)
// Code from https://github.com/kristyburge/budget-app/blob/908ce12f63e1ed1573c72d91eb1a136872815c41/app.js
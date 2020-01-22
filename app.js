// Budget Controller
let budgetController = (function() {
   // some code
})();

// UI Controller
let UIController = (function(){
   // some code
})();

// Global App Controller
let controller = (function(budgetCntrl, UICntrl) {
   let controlAddItem = function(){
      // 1. Get the field input data
      // 2. Add the item to the budget controller
      // 3. Add the new item to the UI
      // 4. Calculate the budget
      // 5. Display the budget in the UI
   };

   document.querySelector(".add-btn").addEventListener("click", controlAddItem);
   document.addEventListener("keypress", function(event){
      if (event.keyCode === 13 || event.which === 13) {
         controlAddItem();
      }
   });
})(budgetController, UIController)
// Code from https://github.com/kristyburge/budget-app/blob/908ce12f63e1ed1573c72d91eb1a136872815c41/app.js
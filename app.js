
// Budget Controller
let budgetController = (function() {
   // some code
})();

// UI Controller
let UIController = (function(){

   let DOMStrings = {
      inputType: ".add-type",
      inputDescription: ".add-description",
      inputValue: ".add-value"
   }

   return {
      getInput: function(){
         return {
            type: document.querySelector(DOMStrings.inputType).value, // Will be either income or expense
            description: document.querySelector(DOMStrings.inputDescription).value
            value: document.querySelector(DOMStrings.inputValue).value
         };
      }
   };
})();


// Global App Controller
let controller = (function(budget, UI) {
   let addItem = function() {
      
        // 1. Get the filed input data
        let input = UI.getInput();
        console.log("input values are: ", input);
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        console.log("Button was clicked!");
   }
   document.querySelector(".add-btn").addEventListener("click", addItem);
   document.addEventListener('keypress', function(event){
      if (event.keyCode === 13) {
         addItem();
      }
   });
   
   
   
})(budgetController, UIController)
// Code from https://github.com/kristyburge/budget-app/blob/908ce12f63e1ed1573c72d91eb1a136872815c41/app.js
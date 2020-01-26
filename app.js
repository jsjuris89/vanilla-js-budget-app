
// Budget Controller

let budgetController = (function() {

   // Expense function constructor
   let Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
   };
   // Income function constructor
   let Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
   }

   /* 
   The budget constructor keeps track of all the incomes and expenses and also of the budget and percentages.
   And we need a good data structure for that.

   For example if the user will input 15 incomes, 
   we need to create 15 income objects, 
   and we can store these 15 incomes into an array.
   */
  let data = {
     allItems: {
        exp: [],
        inc: []
     }
  }
})();

// UI Controller
let UIController = (function(){

   let DOMStrings = {
      inputType: ".add-type",
      inputDescription: ".add-description",
      inputValue: ".add-value",
      inputBtn: ".add-btn"
   }

   return {
      getInput: function(){
         return {
            type: document.querySelector(DOMStrings.inputType).value, 
            description: document.querySelector(DOMStrings.inputDescription).value,
            value: document.querySelector(DOMStrings.inputValue).value
         };
      },

      getDOMStrings: function() {
         return DOMStrings;
      }
   };
})();


// Global App Controller
let controller = (function(budget, UI) {

   let DOM = UI.getDOMStrings();
   // console.log(DOM);
   
   let addItem = function() {
      
        // 1. Get the filed input data
        let input = UI.getInput();
        console.log("input values are: ", input);
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        console.log("Button was clicked or Enter was pressed!");
   }
   document.querySelector(DOM.inputBtn).addEventListener("click", addItem); // if we move this before let addItem = function()... then it wont work
   document.addEventListener('keypress', function(event){
      if (event.keyCode === 13) {
         addItem();
      }
   });
})(budgetController, UIController)

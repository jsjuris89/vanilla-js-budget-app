// This is called Module Pattern
// https://github.com/eveningstar33/MoneyManagementApp/commit/7904c7f60aad9d8923e5c6eaff5a7d48d4f15065#diff-0364f57fbff2fabbe941ed20c328ef1a

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
   let addItem = function(){
      // 1. Get the field input data
      // 2. Add the item to the budget controller
      // 3. Add the new item to the UI
      // 4. Calculate the budget
      // 5. Display the budget in the UI
      console.log('addItem function called'); 
   };

   document.querySelector(".add-btn").addEventListener("click", addItem);
   
   
})(budgetController, UIController)
// Code from https://github.com/kristyburge/budget-app/blob/908ce12f63e1ed1573c72d91eb1a136872815c41/app.js
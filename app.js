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
   };

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

//   Create public method to allow other modules to add new items to the data structure
  return {
     addItemToArray: function(type, desc, val) {
        let newItem;
        let ID;

      // we need to create new ID => so we can utilize constructor functions for Expense or Income (since we get desc & val values already from UI)
     
      // create new ID
      //[1 2 3 4 5], next ID = 6
      //[1 2 4 6 8], next ID = 9
      // ID = last ID +1
      if (!data.allItems[type].length > 0) {
         // console.log("In chosen allItems.exp or allItems.inc array there is NOTHING.") 
         // set ID = 0
         ID = 0;
         } else {
         // console.log("In chosen allItems.exp or allItems.inc array there is SOMETHING.")
         // set ID = last ID + 1
         ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
         /* Up code destructured:
         ID = data.allItems[inc] or ID = data.allItems[exp] + rest code [data.allItems[type].length - 1] <--- this is array element index just same as arr[0] arr[1] etc

         */
         }
         
         // create new item based on 'exp' or 'inc' type
         if (type === "exp") {
            newItem = new Expense(ID, desc, val);
         } else if (type === "inc") {
            newItem = new Income(ID, desc, val);
         }
         // add new exp or inc to the end of the allItems.exp or allItems.inc array
         data.allItems[type].push(newItem);

         return newItem;
      },
      testData: function() {
         console.log(data);
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
   
   let addItem = function() {
      let input;
      let newItem;
        // 1. Get the filed input data
        input = UI.getInput();
      //   console.log("input values are: ", input);
      //   console.log("input type is: ", input.type);
        
        // 2. Add the item to the budget controller
        newItem = budget.addItemToArray(input.type, input.description, input.value);
        
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
      //   console.log("Button was clicked or Enter was pressed!");
   }
   document.querySelector(DOM.inputBtn).addEventListener("click", addItem);
   document.addEventListener('keypress', function(event){
      if (event.keyCode === 13) {
         addItem();
      }
   });
})(budgetController, UIController)

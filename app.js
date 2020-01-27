// Budget Controller
let budgetController = (function() {

   let Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
   };
   let Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
   };

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

      if (!data.allItems[type].length > 0) {
         ID = 0;
         } else {
         ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
         }
         
         if (type === "exp") {
            newItem = new Expense(ID, desc, val);
         } else if (type === "inc") {
            newItem = new Income(ID, desc, val);
         }
         // add new exp or inc to the end of the allItems.exp or allItems.inc array
         data.allItems[type].push(newItem);

         return newItem;
      },
      // testData: function() {
      //    console.log(data);
      // }
     }
})();


// UI Controller
let UIController = (function(){

   let DOMStrings = {
      inputType: ".add-type",
      inputDescription: ".add-description",
      inputValue: ".add-value",
      inputBtn: ".add-btn",
      incomeContainer: ".income-list",
      expenseContainer: ".expenses-list"
   }

   return {
      getInput: function(){
         return {
            type: document.querySelector(DOMStrings.inputType).value, 
            description: document.querySelector(DOMStrings.inputDescription).value,
            value: document.querySelector(DOMStrings.inputValue).value
         };
      },
      
      addItemToDom: function(obj, type){
         let element;
         let html;
         let newHtml;

         if (type === "inc") {
            element = DOMStrings.incomeContainer;
            html = '<div class="item" id="income-%id%"><div class="item-description">%description%</div><div><div class="item-value">%value%</div><div class="item-delete">                    <button class="item-delete-btn">Delete</button></div></div></div>'
         }
         newHtml = html.replace('%id%', obj.id);
         newHtml = newHtml.replace('%description%', obj.description);
         newHtml = newHtml.replace('%value%', obj.value);

         // insert HTML into the DOM
         document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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
        UI.addItemToDom(newItem, input.type)
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

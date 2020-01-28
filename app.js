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
     },
     totals: {
        exp: 0,
        inc: 0
     },
     budget: 0,
     percentage: -1
  };



  let calculateTotal = function(type) {
      let sum = 0;
      data.allItems[type].forEach(function(itemSum) {
         sum = sum + itemSum.value;
      });
      data.totals[type] = sum;
  };

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
         data.allItems[type].push(newItem);

         return newItem;
      },
      calculateBudget: function() {
         // Calculate total income & expenses
         calculateTotal('exp');
         calculateTotal('inc');

         // Calculate the budget = income - expenses
         data.budget = data.totals.inc - data.totals.exp;

         // Calculate the percentage of income that we spent
         if (data.totals.inc > 0) {
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
         } else {
            data.percentage = -1;
         }
      },
      getBudget: function() {
         return {
            budget: data.budget,
            totalIncome: data.totals.inc,
            totalExpense: data.totals.exp,
            percentage: data.percentage
         }
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
            value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
         };
      },
      
      addItemToDom: function(obj, type){
         let element;
         let html;
         let newHtml;

         if (type === "inc") {
            element = DOMStrings.incomeContainer;
            html = '<div class="item" id="income-%id%">' +
                     '<div class="item-description">%description%</div>' +
                        '<div class="item-value">%value%</div>' +
                        '<div class="item-delete">' +
                           '<button class="item-delete-btn">Delete</button>' +
                        '</div>' +
                     '</div>';
         } else if (type === "exp") {
            element = DOMStrings.expenseContainer;
            html = '<div class="item" id="expense-%id%">' +
                     '<div class="item-description">%description%</div>' +
                        '<div class="item-value">%value%</div>' +
                        '<div class="item-delete">' +
                           '<button class="item-delete-btn">Delete</button>' +
                        '</div>' +
                     '</div>';
         }
         newHtml = html.replace('%id%', obj.id);
         newHtml = newHtml.replace('%description%', obj.description);
         newHtml = newHtml.replace('%value%', obj.value);

         // insert HTML into the DOM
         document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
      },

      clearFields: function() {
         const descriptionField = document.querySelector(DOMStrings.inputDescription);
         descriptionField.value = "";
         document.querySelector(DOMStrings.inputValue).value = "";
         descriptionField.focus();
      },

      getDOMStrings: function() {
         return DOMStrings;
      }
   };
})();





// Global App Controller
let controller = (function(budget, UI) {

   let DOM = UI.getDOMStrings();

   let updateBudget = function() {
      // 1. calculate the budget
      budget.calculateBudget();
      // 2. return the budget
      let budgetNow = budget.getBudget();
      // 3. Displaythe budget in the UI
      console.log("Total budget available: ", budgetNow.budget);
      console.log("We have earned: " + budgetNow.totalIncome + " and spend " + budgetNow.totalExpense);
      console.log("We are spending " + budgetNow.percentage + "% of our income.");
   }
   
   let addItem = function() {
      let input;
      let newItem;
        // 1. Get the input data from user
        input = UI.getInput();

      // Validate data inputed by user
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budget.addItemToArray(input.type, input.description, input.value);
            // 3.1 Add the item to the UI
            UI.addItemToDom(newItem, input.type)
            // 3.2 Clear the fields
            UI.clearFields();
            // 4. Calculate and update budget
            updateBudget();
            // 5. Display the budget on the UI   
        } else {
           console.log("Validation failed!");
        }
   }
   document.querySelector(DOM.inputBtn).addEventListener("click", addItem);
   document.addEventListener('keypress', function(event){
      if (event.keyCode === 13) {
         addItem();
      }
   });
})(budgetController, UIController)

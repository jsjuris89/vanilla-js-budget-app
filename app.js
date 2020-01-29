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
      deleteItemFromArray: function(type, id) {
         // code
         let ids;
         let index;

         /*
         f.e. id = 6
         data.allItems[type][id] isn't a solution because of --->
         ids = [1, 2, 4, 6, 8] :: index would be 3
         Solution:
         create an array with all ids and then find the index of the element with the id to be removed
         */
        ids = data.allItems[type].map(function(currentElement){
           return currentElement.id;
        });

        // find the index of the element to delete from the new array ids
        // returns index of the id passed through
        index = ids.indexOf(id);

         // now delete that item from the array
         // if not found, it will return -1
         if (index !== -1) {
            data.allItems[type].splice(index, 1);
         }
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
      inputBtn: ".add-btn",
      incomeContainer: ".income-list",
      expenseContainer: ".expenses-list",
      budgetLabel: ".budget-value",
      incomeLabel: ".budget-income-value",
      expensesLabel: ".budget-expenses-value",
      listsContainer: ".container"
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
            html = '<div class="item" id="inc-%id%">' +
                     '<div class="item-description">%description%</div>' +
                        '<div class="item-value">%value%</div>' +
                        '<div class="item-delete">' +
                           '<button class="item-delete-btn">Delete</button>' +
                        '</div>' +
                     '</div>';
         } else if (type === "exp") {
            element = DOMStrings.expenseContainer;
            html = '<div class="item" id="exp-%id%">' +
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
      deleteItemFromDom: function(htmlID) {
         let element = document.getElementById(htmlID);
         element.parentElement.removeChild(element);
      },

      clearFields: function() {
         const descriptionField = document.querySelector(DOMStrings.inputDescription);
         descriptionField.value = "";
         document.querySelector(DOMStrings.inputValue).value = "";
         descriptionField.focus();
      },
      displayBudget: function(obj){
         document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
         document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalIncome;
         document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExpense;
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
      // console.log("Total budget available: ", budgetNow.budget);
      // console.log("We have earned: " + budgetNow.totalIncome + " and spend " + budgetNow.totalExpense);
      // console.log("We are spending " + budgetNow.percentage + "% of our income.");
      UI.displayBudget(budgetNow);
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

   let deleteItem = function(event) {
      let itemID;
      let splitID;
      let type;
      let ID;
      // console.log(event.target);
      console.log(event.target.parentElement.parentElement.id);
      itemID = event.target.parentElement.parentElement.id;

      if (itemID) {
         // use split - JS converts string to an Object and will return and array
         /*
			  JavaScript automatically puts a wrapper around the String and 
			  convert it from a primitive to an object. And then this object
			  has access to a lot of string methods. 
			*/
         splitID = itemID.split("-");
         console.log("splitID is: " + splitID);
         type = splitID[0];
         console.log("type is: " + type);
         ID = parseInt(splitID[1]);
         console.log("ID is: " + ID);
      }

      // 1. delete the item from the data structure
      budget.deleteItemFromArray(type, ID);

      // 2. delete the item from the UI
      UI.deleteItemFromDom(itemID);
      // 3. Update and show the new budget
      updateBudget();
   };
   document.querySelector(DOM.inputBtn).addEventListener("click", addItem);
   document.addEventListener('keypress', function(event){
      if (event.keyCode === 13) {
         addItem();
      }
   });
   document.querySelector(DOM.listsContainer).addEventListener("click", deleteItem);
})(budgetController, UIController)

// Custom Select Box Code
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
   optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
   o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
   })
})
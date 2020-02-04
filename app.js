// NEXT Add delete functionality with monthData object



// Budget Controller
let budgetController = (function() {

   let Expense = function(id, category, description, value, date) {
      this.id = id;
      this.category = category
      this.description = description;
      this.value = value;
      this.date = date;
   };
   let Income = function(id, description, value, date) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.date = date;
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

  let monthData = {
     jan: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     },
     feb: {
        totalExpenses: 0,
        categories: {
            food: 0,
            transportation: 0,
            other: 0
        }
     },
     mar: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     },
     apr: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     },
     may: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     },
     jun: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     },
     jul: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     },
     aug: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     },
     sep: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     },
     oct: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     },
     nov: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     },
     dec: {
        totalExpenses: 0,
        categories: {
           food: 0,
           transportation: 0,
           other: 0
        }
     }  
  }


  let calculateTotal = function(type) {
      let sum = 0;
      data.allItems[type].forEach(function(itemSum) {
         sum = sum + itemSum.value;
      });
      data.totals[type] = sum;
  };



  return {
     addItemToArray: function(type, category, desc, val, date) {
        let newItem;
        let ID;

         if (!data.allItems[type].length > 0) {
            ID = 0;
         } else {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
         }
            
         if (type === "exp") {
            newItem = new Expense(ID, category, desc, val, date);
         } else if (type === "inc") {
            newItem = new Income(ID, desc, val, date);
         }
         data.allItems[type].push(newItem);

         return newItem;
      },
      deleteItemFromArray: function(type, id) {
         let ids;
         let index;

        ids = data.allItems[type].map(function(currentElement){
           return currentElement.id;
        });

        index = ids.indexOf(id);

         if (index !== -1) {
            data.allItems[type].splice(index, 1);
         }
      },
      calculateBudget: function() {
         // Calculate total income & expenses
         calculateTotal('exp');
         calculateTotal('inc');


         data.budget = data.totals.inc - data.totals.exp;

         // Calculate the percentage of income that we spent
         // -----UNUSED yet-----
         // if (data.totals.inc > 0) {
         //    data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
         // } else {
         //    data.percentage = -1;
         // }
      },
      getMonthExpenses: function(date, type, value) {
         let inputDate = new Date(date);

         months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
         ];

         let month = months[inputDate.getMonth()];

         if (type == "exp"){
            switch (month) {
               case "January":
                  // insert code same as in february
                  break;
                  // Only this correct syntax
               case "February":
                  let foodSum = 0;
                  let transportationSum = 0;
                  let otherSum = 0;
                  // let allCategorySum = 0
                  data.allItems.exp.forEach(function (element) {
                     if (element.category == "food") {
                        foodSum = foodSum + element.value;
                        monthData.feb.categories.food = foodSum;
                        // console.log("food sum is: " + monthData.feb.categories.food)
                        // console.log(foodSum);
                     } else if (element.category == "transportation") {
                        transportationSum = transportationSum + element.value;
                        monthData.feb.categories.transportation = transportationSum;
                     } else if (element.category == "other") {
                        otherSum = otherSum + element.value;
                        monthData.feb.categories.other = otherSum;
                     }
                  })
                  // Sum all 3 categories together for total expenses in a month
                  monthData.feb.totalExpenses = monthData.feb.categories.food + monthData.feb.categories.transportation + monthData.feb.categories.other;
                  break;
               case "March":
                  // insert code same as in february
                  break;
               case "April":
                  // insert code same as in february
                  break;
               case "May":
                  // insert code same as in february
                  break;
               case "June":
                  // insert code same as in february
                  break;
               case "July":
                  // insert code same as in february
                  break;
               case "August":
                  // insert code same as in february
                  break;
               case "September":
                  // insert code same as in february
                  break;
               case "October":
                  // insert code same as in february
                  break;
               case "November":
                  // insert code same as in february
                  break;
               case "December":
                  // insert code same as in february
                  break;
            }
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
      },
      testMonthData: function() {
         console.log(monthData);
      }
     }
})();





// UI Controller
let UIController = (function(){

   let DOMStrings = {
      inputDescription: ".add-description",
      inputValue: ".add-value",
      inputBtn: ".add-btn",
      incomeContainer: ".income-list",
      expenseContainer: ".expenses-list",
      budgetLabel: ".budget-value",
      incomeLabel: ".budget-income-value",
      expensesLabel: ".budget-expenses-value",
      listsContainer: ".container",
      dateLabel: ".budget-title-month",
      itemDate: ".vanilla-calendar-date--selected"
   }

   return {
      getInput: function(){
         let type = function() {
            if (document.querySelector(".selected").innerHTML == 
            "Income") {
               return "inc"
            } else if (document.querySelector(".selected").innerHTML == "Expense") {
               return "exp";
            }
         }
         let category = function() {
            switch (document.querySelector(".selected-2").innerHTML) {
               case "Food":
                  console.log("Food category was chosen.");
                  return "food";
               case "Transportation":
                  console.log("Transportation category was chosen.")
                  return "transportation";
               case "Other":
                  console.log("Other category was chosen.")
                  return "other";
            }

         }
         return {
            type: type(), 
            category: category(),
            description: document.querySelector(DOMStrings.inputDescription).value,
            value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
            date: document.querySelector(DOMStrings.itemDate).getAttribute("data-calendar-date")
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
      displayMonth: function() {
         let now;
         let year;
         let month;
         let months;

         now = new Date();
         months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
         ];
         month = now.getMonth();
         year = now.getFullYear();
         document.querySelector(DOMStrings.dateLabel).textContent = year + " " + months[month];
      },

      getDOMStrings: function() {
         return DOMStrings;
      }
   };
})();





// Global App Controller
let controller = (function(budget, UI) {

   let DOM = UI.getDOMStrings();

   UI.displayMonth();

   let updateBudget = function() {
      // 1. calculate the budget
      budget.calculateBudget();
      // 2. return the budget
      let budgetNow = budget.getBudget();
      // 3. Displaythe budget in the UI
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
            newItem = budget.addItemToArray(input.type, input.category, input.description, input.value, input.date);
            // Extra filter by month expenses
            budget.getMonthExpenses(input.date, input.type, input.value);
            // 3.1 Add the item to the UI
            UI.addItemToDom(newItem, input.type);
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
// Income / Expense
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
// Food / Transportation / Other
// -----------check later ------------
const selected2 = document.querySelector(".selected-2");
const optionsContainer2 = document.querySelector(".options-container-2");
const optionsList2 = document.querySelectorAll(".options-container-2 .option-2");

selected2.addEventListener("click", () => {
   optionsContainer2.classList.toggle("active");
});
optionsList2.forEach(o => {
   o.addEventListener("click", () => {
      selected2.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer2.classList.remove("active");
   })
})





// Calendar picker
let myCalendar = new VanillaCalendar({
   selector: "#myCalendar"
})

// let calendarBody = document.querySelector(".vanilla-calendar-body");
// onclick instead of regular eventListenever was used because of conflict with vanilla-calendar library click events
// calendarBody.onclick = function(){
//    let selectedDate = calendarBody.querySelector(".vanilla-calendar-date--selected").getAttribute("data-calendar-date");
//    console.log("Selected date is: " + selectedDate);
// }
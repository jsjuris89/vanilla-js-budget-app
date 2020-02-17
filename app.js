// Budget Controller
let budgetController = (function () {

   let Expense = function (id, category, description, value, date) {
      this.id = id;
      this.category = category
      this.description = description;
      this.value = value;
      this.date = date;
   };
   let Income = function (id, description, value, date) {
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
            food: 2,
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

   // Localstorage
   if (localStorage.getItem("Data") == null) {
      localStorage.setItem("Data", JSON.stringify(data));
   } else {
      console.log("There already is a key -- DATA -- in localstorage.")
      // if there is Data in localstorage get it
      data = JSON.parse(localStorage.getItem("Data"));
   }

   if (localStorage.getItem("MonthData") == null) {
      localStorage.setItem("MonthData", JSON.stringify(monthData));
   } else {
      console.log("There is already a key -- MONTHDATA -- in localstorage.")
      monthData = JSON.parse(localStorage.getItem("MonthData"));
   }


   let calculateTotal = function (type) {
      let sum = 0;
      data.allItems[type].forEach(function (itemSum) {
         sum = sum + itemSum.value;
      });
      data.totals[type] = sum;
   };



   return {
      addItemToArray: function (type, category, desc, val, date) {
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
         localStorage.setItem("Data", JSON.stringify(data));

         return newItem;
      },
      deleteItemFromArray: function (type, id) {
         let ids;
         let index;

         ids = data.allItems[type].map(function (currentElement) {
            return currentElement.id;
         });

         index = ids.indexOf(id);

         if (index !== -1) {
            data.allItems[type].splice(index, 1);
         }
         localStorage.setItem("Data", JSON.stringify(data));
      },
      calculateBudget: function () {
         // Calculate total income & expenses
         calculateTotal('inc');
         calculateTotal('exp');
         data.budget = data.totals.inc - data.totals.exp;
      },
      updateAllMonths: function () {
         let allExp = data.allItems.exp;
         let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

         function updateJanExp() {
            let januaryExp = allExp.filter(function (item) {
               let itemDate = new Date(item.date);
               let month = months[itemDate.getMonth()];

               if (month == "January") {
                  return true
               }
            })

            let totalFood = 0;
            let totalTransport = 0;
            let totalOther = 0;

            // 3 if's for delete very last item from monthData obj
            if (!allExp.filter(e => e.category === "food").length > 0) {
               monthData.jan.categories.food = totalFood;
            }

            if (!allExp.filter(e => e.category === "transportation").length > 0) {
               monthData.jan.categories.transportation = totalTransport;
            }

            if (!allExp.filter(e => e.category === "other").length > 0) {
               monthData.jan.categories.other = totalOther;
            }

            januaryExp.forEach(function (item) {
               if (item.category == "food") {
                  totalFood += item.value;
                  monthData.jan.categories.food = totalFood;
               }

               if (item.category == "transportation") {
                  totalTransport += item.value;
                  monthData.jan.categories.transportation = totalTransport
               }

               if (item.category == "other") {
                  totalOther += item.value;
                  monthData.jan.categories.other = totalOther;
               }
            })
            // Get total expenses by summing all categories
            monthData.jan.totalExpenses = monthData.jan.categories.food + monthData.jan.categories.transportation + monthData.jan.categories.other;

            // Update localstorage
            localStorage.setItem("MonthData", JSON.stringify(monthData))
         }
         updateJanExp();

         function updateFebExp() {
            let februaryExp = allExp.filter(function (item) {
               let itemDate = new Date(item.date);
               let month = months[itemDate.getMonth()];

               if (month == "February") {
                  return true
               }
            })
            console.log(februaryExp)

            let totalFood = 0;
            let totalTransport = 0;
            let totalOther = 0;

            // 3 if's for delete very last item from monthData obj
            if (!allExp.filter(e => e.category === "food").length > 0) {
               monthData.feb.categories.food = totalFood;
            }

            if (!allExp.filter(e => e.category === "transportation").length > 0) {
               monthData.feb.categories.transportation = totalTransport;
            }

            if (!allExp.filter(e => e.category === "other").length > 0) {
               monthData.feb.categories.other = totalOther;
            }

            februaryExp.forEach(function (item) {
               if (item.category == "food") {
                  totalFood += item.value;
                  monthData.feb.categories.food = totalFood;
               }

               if (item.category == "transportation") {
                  totalTransport += item.value;
                  monthData.feb.categories.transportation = totalTransport
               }

               if (item.category == "other") {
                  totalOther += item.value;
                  monthData.feb.categories.other = totalOther;
               }
            })
            // Get total expenses by summing all categories
            monthData.feb.totalExpenses = monthData.feb.categories.food + monthData.feb.categories.transportation + monthData.feb.categories.other;

            // Update localstorage
            localStorage.setItem("MonthData", JSON.stringify(monthData))
         }
         updateFebExp();

         function updateMarExp() {
            let marchExp = allExp.filter(function (item) {
               let itemDate = new Date(item.date);
               let month = months[itemDate.getMonth()];

               if (month == "March") {
                  return true
               }
            })

            let totalFood = 0;
            let totalTransport = 0;
            let totalOther = 0;

            // 3 if's for delete very last item from monthData obj
            if (!allExp.filter(e => e.category === "food").length > 0) {
               monthData.mar.categories.food = totalFood;
            }

            if (!allExp.filter(e => e.category === "transportation").length > 0) {
               monthData.mar.categories.transportation = totalTransport;
            }

            if (!allExp.filter(e => e.category === "other").length > 0) {
               monthData.mar.categories.other = totalOther;
            }

            marchExp.forEach(function (item) {
               if (item.category == "food") {
                  totalFood += item.value;
                  monthData.mar.categories.food = totalFood;
               }

               if (item.category == "transportation") {
                  totalTransport += item.value;
                  monthData.mar.categories.transportation = totalTransport
               }

               if (item.category == "other") {
                  totalOther += item.value;
                  monthData.mar.categories.other = totalOther;
               }
            })
            // Get total expenses by summing all categories
            monthData.mar.totalExpenses = monthData.mar.categories.food + monthData.mar.categories.transportation + monthData.mar.categories.other;

            // Update localstorage
            localStorage.setItem("MonthData", JSON.stringify(monthData))
         }
         updateMarExp();

         function updateAprExp() {
            let aprilExp = allExp.filter(function (item) {
               let itemDate = new Date(item.date);
               let month = months[itemDate.getMonth()];

               if (month == "April") {
                  return true
               }
            })

            let totalFood = 0;
            let totalTransport = 0;
            let totalOther = 0;

            // 3 if's for delete very last item from monthData obj
            if (!allExp.filter(e => e.category === "food").length > 0) {
               monthData.apr.categories.food = totalFood;
            }

            if (!allExp.filter(e => e.category === "transportation").length > 0) {
               monthData.apr.categories.transportation = totalTransport;
            }

            if (!allExp.filter(e => e.category === "other").length > 0) {
               monthData.apr.categories.other = totalOther;
            }

            aprilExp.forEach(function (item) {
               if (item.category == "food") {
                  totalFood += item.value;
                  monthData.apr.categories.food = totalFood;
               }

               if (item.category == "transportation") {
                  totalTransport += item.value;
                  monthData.apr.categories.transportation = totalTransport
               }

               if (item.category == "other") {
                  totalOther += item.value;
                  monthData.apr.categories.other = totalOther;
               }
            })
            // Get total expenses by summing all categories
            monthData.apr.totalExpenses = monthData.apr.categories.food + monthData.apr.categories.transportation + monthData.apr.categories.other;

            // Update localstorage
            localStorage.setItem("MonthData", JSON.stringify(monthData))
         }
         updateAprExp();

         function updateMayExp() {
            let mayExp = allExp.filter(function (item) {
               let itemDate = new Date(item.date);
               let month = months[itemDate.getMonth()];

               if (month == "May") {
                  return true
               }
            })

            let totalFood = 0;
            let totalTransport = 0;
            let totalOther = 0;

            // 3 if's for delete very last item from monthData obj
            if (!allExp.filter(e => e.category === "food").length > 0) {
               monthData.may.categories.food = totalFood;
            }

            if (!allExp.filter(e => e.category === "transportation").length > 0) {
               monthData.may.categories.transportation = totalTransport;
            }

            if (!allExp.filter(e => e.category === "other").length > 0) {
               monthData.may.categories.other = totalOther;
            }

            mayExp.forEach(function (item) {
               if (item.category == "food") {
                  totalFood += item.value;
                  monthData.may.categories.food = totalFood;
               }

               if (item.category == "transportation") {
                  totalTransport += item.value;
                  monthData.may.categories.transportation = totalTransport
               }

               if (item.category == "other") {
                  totalOther += item.value;
                  monthData.may.categories.other = totalOther;
               }
            })
            // Get total expenses by summing all categories
            monthData.may.totalExpenses = monthData.may.categories.food + monthData.may.categories.transportation + monthData.may.categories.other;

            // Update localstorage
            localStorage.setItem("MonthData", JSON.stringify(monthData))
         }
         updateMayExp();

         function updateJunExp() {
            let juneExp = allExp.filter(function (item) {
               let itemDate = new Date(item.date);
               let month = months[itemDate.getMonth()];

               if (month == "June") {
                  return true
               }
            })

            let totalFood = 0;
            let totalTransport = 0;
            let totalOther = 0;

            // 3 if's for delete very last item from monthData obj
            if (!allExp.filter(e => e.category === "food").length > 0) {
               monthData.jun.categories.food = totalFood;
            }

            if (!allExp.filter(e => e.category === "transportation").length > 0) {
               monthData.jun.categories.transportation = totalTransport;
            }

            if (!allExp.filter(e => e.category === "other").length > 0) {
               monthData.jun.categories.other = totalOther;
            }

            juneExp.forEach(function (item) {
               if (item.category == "food") {
                  totalFood += item.value;
                  monthData.jun.categories.food = totalFood;
               }

               if (item.category == "transportation") {
                  totalTransport += item.value;
                  monthData.jun.categories.transportation = totalTransport
               }

               if (item.category == "other") {
                  totalOther += item.value;
                  monthData.jun.categories.other = totalOther;
               }
            })
            // Get total expenses by summing all categories
            monthData.jun.totalExpenses = monthData.jun.categories.food + monthData.jun.categories.transportation + monthData.jun.categories.other;

            // Update localstorage
            localStorage.setItem("MonthData", JSON.stringify(monthData))
         }
         updateJunExp();

         function updateJulExp() {
            let julyExp = allExp.filter(function (item) {
               let itemDate = new Date(item.date);
               let month = months[itemDate.getMonth()];

               if (month == "July") {
                  return true
               }
            })

            let totalFood = 0;
            let totalTransport = 0;
            let totalOther = 0;

            // 3 if's for delete very last item from monthData obj
            if (!allExp.filter(e => e.category === "food").length > 0) {
               monthData.jul.categories.food = totalFood;
            }

            if (!allExp.filter(e => e.category === "transportation").length > 0) {
               monthData.jul.categories.transportation = totalTransport;
            }

            if (!allExp.filter(e => e.category === "other").length > 0) {
               monthData.jul.categories.other = totalOther;
            }

            julyExp.forEach(function (item) {
               if (item.category == "food") {
                  totalFood += item.value;
                  monthData.jul.categories.food = totalFood;
               }

               if (item.category == "transportation") {
                  totalTransport += item.value;
                  monthData.jul.categories.transportation = totalTransport
               }

               if (item.category == "other") {
                  totalOther += item.value;
                  monthData.jul.categories.other = totalOther;
               }
            })
            // Get total expenses by summing all categories
            monthData.jul.totalExpenses = monthData.jul.categories.food + monthData.jul.categories.transportation + monthData.jul.categories.other;

            // Update localstorage
            localStorage.setItem("MonthData", JSON.stringify(monthData))
         }
         updateJulExp();

         // If need later we can add rest months Aug, Sep, Oct etc
      },

      getMonthData: function () {
         return monthData;
      },
      getBudget: function () {
         return {
            budget: data.budget,
            totalIncome: data.totals.inc,
            totalExpense: data.totals.exp,
            percentage: data.percentage
         }
      },

      testData: function () {
         console.log(data);
      },
      testMonthData: function () {
         console.log(monthData);
      },
      getData: function () {
         return data;
      },
      getMonthData: function () {
         return monthData;
      }
   }
})();





// UI Controller
let UIController = (function () {

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

   // Custom Select Box #1
   const typeSelected = document.querySelector(".selected.selected-type");
   const typeOptionsContainer = document.querySelector(".options-container.options-container-type");
   const typeOptionsList = document.querySelectorAll(".option.option-type");


   typeSelected.addEventListener("click", () => {
      typeOptionsContainer.classList.toggle("active");
   })
   typeOptionsList.forEach(o => {
      o.addEventListener("click", () => {
         typeSelected.innerHTML = o.querySelector("label").innerHTML;
         typeOptionsContainer.classList.remove("active");
      })
   })

   // Custom Select Box #2
   const categorySelected = document.querySelector(".selected.selected-category");
   const categoryOptionsContainer = document.querySelector(".options-container.options-container-category");
   const categoryOptionsList = document.querySelectorAll(".option.option-category");

   categorySelected.addEventListener("click", () => {
      categoryOptionsContainer.classList.toggle("active");
   })
   categoryOptionsList.forEach(o => {
      o.addEventListener("click", () => {
         categorySelected.innerHTML = o.querySelector("label").innerHTML;
         categoryOptionsContainer.classList.remove("active");
      })
   })

   // Calendar picker
   let myCalendar = new VanillaCalendar({
      selector: "#myCalendar"
   })

   

   return {
      getInput: function () {
         let type = function () {
            if (document.querySelector(".selected").innerHTML ==
               "Income") {
               return "inc"
            }
            if (document.querySelector(".selected").innerHTML == "Expense") {
               return "exp";
            }
         }
         let category = function () {
            switch (document.querySelector(".selected.selected-category").innerHTML) {
               case "Food":
                  return "food";
               case "Transportation":
                  return "transportation";
               case "Other":
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
      showOldDomItems: function () {
         let expensesList = document.querySelector(".expenses-list");
         let saved = localStorage.getItem("expensesList");
         expensesList.innerHTML = saved;

      },
      ModalWindow: {
         init() {
            document.body.addEventListener("click", e => {
               console.log(e.target);
               if (e.target.classList.contains("modal-close")) {
                  this.closeModal(e.target)
               }
            })
         },
      
         getHtmlTemplate(modalOptions) {
            return `
               <div class="modal-overlay">
                  <div class="modal-window">
                     <div class="modal-titlebar">
                        <span class="modal-title">${modalOptions.title}</span>
                        <button class="modal-close material-icons">close</button>
                     </div>
                     <div class="modal-content">
                        ${modalOptions.content}
                     </div>
                  </div>
               </div>
            `;
         },
         openModal(modalOptions = {}) {
            modalOptions = Object.assign({
               title: "Modal Title",
               content: "Modal Content"
            }, modalOptions);
      
            const modalTemplate = this.getHtmlTemplate(modalOptions);
            document.body.insertAdjacentHTML("beforeend", modalTemplate);
         },
         closeModal(closeButton) {
            const modalOverlay = closeButton.parentElement.parentElement.parentElement;
            modalOverlay.parentElement.removeChild(modalOverlay);
            // document.body.removeChild(modalOverlay);
         }
      },
      addItemToDom: function (obj, type) {
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
            html = '<div class="item" id="exp-%id%" data-date="%date%">' +
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
         newHtml = newHtml.replace('%date%', obj.date);

         // insert HTML into the DOM
         document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
         // Save the HTML to localstorage
         let expensesList = document.querySelector(".expenses-list");
         localStorage.setItem("expensesList", expensesList.innerHTML);
      },
      deleteItemFromDom: function (htmlID) {
         let element = document.getElementById(htmlID);
         element.parentElement.removeChild(element);

         // Update localstorage data
         let expensesList = document.querySelector(".expenses-list");
         localStorage.setItem("expensesList", expensesList.innerHTML)
      },

      clearFields: function () {
         const descriptionField = document.querySelector(DOMStrings.inputDescription);
         descriptionField.value = "";
         document.querySelector(DOMStrings.inputValue).value = "";
         descriptionField.focus();
      },
      displayBudget: function (obj) {
         document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
         document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalIncome;
         document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExpense;
      },
      displayMonth: function () {
         let now;
         let year;
         let month;
         let months;

         now = new Date();
         months = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
         ];
         month = now.getMonth();
         year = now.getFullYear();
         document.querySelector(DOMStrings.dateLabel).textContent = year + " " + months[month];
      },

      getDOMStrings: function () {
         return DOMStrings;
      }
   };
})();



// Global App Controller
let controller = (function (budget, UI, charts) {

   let DOM = UI.getDOMStrings();
   let updateBudget = function () {
      // 1. calculate the budget
      budget.calculateBudget();
      // 2. return the budget
      let budgetNow = budget.getBudget();
      // 3. Displaythe budget in the UI
      UI.displayBudget(budgetNow);
   }
   // Show as soon as page loads
   UI.displayMonth();
   updateBudget();
   UI.showOldDomItems();

   // calendar date selected validation for if statement
   let datePicked = false;
   function dateClickCheck() {
      datePicked = true;
   }
   let dates = document.getElementsByClassName("vanilla-calendar-date");
   Array.from(dates).forEach(function (item) {
      item.addEventListener("click", dateClickCheck);
   })

 

   let addItem = function () {
      let input;
      let newItem;
      // 1. Get the input data from user
      input = UI.getInput();

      
      // Validate data inputed by user
      if (input.description !== "" && !isNaN(input.value) && input.value > 0 && datePicked == true) {

         // Success message to user
         UI.ModalWindow.openModal({
            title: "Success",
            content: "Entry added!"
         })
         // 2. Add the item to the data object
         newItem = budget.addItemToArray(input.type, input.category, input.description, input.value, input.date);
         // 3. Add the item to the monthData object
         budget.updateAllMonths();

         // 4. Add the item to the DOM
         UI.addItemToDom(newItem, input.type);
         // 5. Clear the fields in DOM
         UI.clearFields();

         // 6. Update budget in DOM
         updateBudget();

      } else {
         console.log("Validation failed!");
            // UI.ModalWindow.openModal({
            //    title: "Error",
            //    content: "Some data still missing.."
            // });
         }
      
   }

   let deleteItem = function (event) {
      let itemID;
      let splitID;
      let type;
      let ID;

      itemID = event.target.parentElement.parentElement.id;

      if (itemID) {
         splitID = itemID.split("-");
         type = splitID[0];
         ID = parseInt(splitID[1]);
         // console.log("ID is: " + ID);
      }

      // 1. delete the item from the data object
      budget.deleteItemFromArray(type, ID);
      // 2. update monthData object
      budget.updateAllMonths();
      // 3. delete the item from DOM
      UI.deleteItemFromDom(itemID);
      // 4. Update and show the new budget
      updateBudget();
   };
   document.querySelector(DOM.inputBtn).addEventListener("click", addItem);
   document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13) {
         addItem();
      }
   });
   document.querySelector(DOM.listsContainer).addEventListener("click", deleteItem);
   document.addEventListener("DOMContentLoaded", () => UI.ModalWindow.init());
   
})(budgetController, UIController)
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Budget Controller
var budgetController = function () {
  var Expense = function Expense(id, category, description, value, date) {
    this.id = id;
    this.category = category;
    this.description = description;
    this.value = value;
    this.date = date;
  };

  var Income = function Income(id, description, value, date) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.date = date;
  };

  var data = {
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
  var monthData = {
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
  }; // Localstorage

  if (localStorage.getItem("Data") == null) {
    localStorage.setItem("Data", JSON.stringify(data));
  } else {
    // console.log("There already is a key -- DATA -- in localstorage.")
    // if there is Data in localstorage get it
    data = JSON.parse(localStorage.getItem("Data"));
  }

  if (localStorage.getItem("MonthData") == null) {
    localStorage.setItem("MonthData", JSON.stringify(monthData));
  } else {
    // console.log("There is already a key -- MONTHDATA -- in localstorage.")
    monthData = JSON.parse(localStorage.getItem("MonthData"));
  }

  var calculateTotal = function calculateTotal(type) {
    var sum = 0;
    data.allItems[type].forEach(function (itemSum) {
      sum = sum + itemSum.value;
    });
    data.totals[type] = sum;
  };

  return _defineProperty({
    addItemToArray: function addItemToArray(type, category, desc, val, date) {
      var newItem;
      var ID;

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
    deleteItemFromArray: function deleteItemFromArray(type, id) {
      var ids;
      var index;
      ids = data.allItems[type].map(function (currentElement) {
        return currentElement.id;
      });
      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }

      localStorage.setItem("Data", JSON.stringify(data));
    },
    calculateBudget: function calculateBudget() {
      // Calculate total income & expenses
      calculateTotal('inc');
      calculateTotal('exp');
      data.budget = data.totals.inc - data.totals.exp;
    },
    updateAllMonths: function updateAllMonths() {
      var allExp = data.allItems.exp;
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      function updateJanExp() {
        var januaryExp = allExp.filter(function (item) {
          var itemDate = new Date(item.date);
          var month = months[itemDate.getMonth()];

          if (month == "January") {
            return true;
          }
        });
        var totalFood = 0;
        var totalTransport = 0;
        var totalOther = 0; // 3 if's for delete very last item from monthData obj

        if (!allExp.filter(function (e) {
          return e.category === "food";
        }).length > 0) {
          monthData.jan.categories.food = totalFood;
        }

        if (!allExp.filter(function (e) {
          return e.category === "transportation";
        }).length > 0) {
          monthData.jan.categories.transportation = totalTransport;
        }

        if (!allExp.filter(function (e) {
          return e.category === "other";
        }).length > 0) {
          monthData.jan.categories.other = totalOther;
        }

        januaryExp.forEach(function (item) {
          if (item.category == "food") {
            totalFood += item.value;
            monthData.jan.categories.food = totalFood;
          }

          if (item.category == "transportation") {
            totalTransport += item.value;
            monthData.jan.categories.transportation = totalTransport;
          }

          if (item.category == "other") {
            totalOther += item.value;
            monthData.jan.categories.other = totalOther;
          }
        }); // Get total expenses by summing all categories

        monthData.jan.totalExpenses = monthData.jan.categories.food + monthData.jan.categories.transportation + monthData.jan.categories.other; // Update localstorage

        localStorage.setItem("MonthData", JSON.stringify(monthData));
      }

      updateJanExp();

      function updateFebExp() {
        var februaryExp = allExp.filter(function (item) {
          var itemDate = new Date(item.date);
          var month = months[itemDate.getMonth()];

          if (month == "February") {
            return true;
          }
        });
        var totalFood = 0;
        var totalTransport = 0;
        var totalOther = 0; // 3 if's for delete very last item from monthData obj

        if (!allExp.filter(function (e) {
          return e.category === "food";
        }).length > 0) {
          monthData.feb.categories.food = totalFood;
        }

        if (!allExp.filter(function (e) {
          return e.category === "transportation";
        }).length > 0) {
          monthData.feb.categories.transportation = totalTransport;
        }

        if (!allExp.filter(function (e) {
          return e.category === "other";
        }).length > 0) {
          monthData.feb.categories.other = totalOther;
        }

        februaryExp.forEach(function (item) {
          if (item.category == "food") {
            totalFood += item.value;
            monthData.feb.categories.food = totalFood;
          }

          if (item.category == "transportation") {
            totalTransport += item.value;
            monthData.feb.categories.transportation = totalTransport;
          }

          if (item.category == "other") {
            totalOther += item.value;
            monthData.feb.categories.other = totalOther;
          }
        }); // Get total expenses by summing all categories

        monthData.feb.totalExpenses = monthData.feb.categories.food + monthData.feb.categories.transportation + monthData.feb.categories.other; // Update localstorage

        localStorage.setItem("MonthData", JSON.stringify(monthData));
      }

      updateFebExp();

      function updateMarExp() {
        var marchExp = allExp.filter(function (item) {
          var itemDate = new Date(item.date);
          var month = months[itemDate.getMonth()];

          if (month == "March") {
            return true;
          }
        });
        var totalFood = 0;
        var totalTransport = 0;
        var totalOther = 0; // 3 if's for delete very last item from monthData obj

        if (!allExp.filter(function (e) {
          return e.category === "food";
        }).length > 0) {
          monthData.mar.categories.food = totalFood;
        }

        if (!allExp.filter(function (e) {
          return e.category === "transportation";
        }).length > 0) {
          monthData.mar.categories.transportation = totalTransport;
        }

        if (!allExp.filter(function (e) {
          return e.category === "other";
        }).length > 0) {
          monthData.mar.categories.other = totalOther;
        }

        marchExp.forEach(function (item) {
          if (item.category == "food") {
            totalFood += item.value;
            monthData.mar.categories.food = totalFood;
          }

          if (item.category == "transportation") {
            totalTransport += item.value;
            monthData.mar.categories.transportation = totalTransport;
          }

          if (item.category == "other") {
            totalOther += item.value;
            monthData.mar.categories.other = totalOther;
          }
        }); // Get total expenses by summing all categories

        monthData.mar.totalExpenses = monthData.mar.categories.food + monthData.mar.categories.transportation + monthData.mar.categories.other; // Update localstorage

        localStorage.setItem("MonthData", JSON.stringify(monthData));
      }

      updateMarExp();

      function updateAprExp() {
        var aprilExp = allExp.filter(function (item) {
          var itemDate = new Date(item.date);
          var month = months[itemDate.getMonth()];

          if (month == "April") {
            return true;
          }
        });
        var totalFood = 0;
        var totalTransport = 0;
        var totalOther = 0; // 3 if's for delete very last item from monthData obj

        if (!allExp.filter(function (e) {
          return e.category === "food";
        }).length > 0) {
          monthData.apr.categories.food = totalFood;
        }

        if (!allExp.filter(function (e) {
          return e.category === "transportation";
        }).length > 0) {
          monthData.apr.categories.transportation = totalTransport;
        }

        if (!allExp.filter(function (e) {
          return e.category === "other";
        }).length > 0) {
          monthData.apr.categories.other = totalOther;
        }

        aprilExp.forEach(function (item) {
          if (item.category == "food") {
            totalFood += item.value;
            monthData.apr.categories.food = totalFood;
          }

          if (item.category == "transportation") {
            totalTransport += item.value;
            monthData.apr.categories.transportation = totalTransport;
          }

          if (item.category == "other") {
            totalOther += item.value;
            monthData.apr.categories.other = totalOther;
          }
        }); // Get total expenses by summing all categories

        monthData.apr.totalExpenses = monthData.apr.categories.food + monthData.apr.categories.transportation + monthData.apr.categories.other; // Update localstorage

        localStorage.setItem("MonthData", JSON.stringify(monthData));
      }

      updateAprExp();

      function updateMayExp() {
        var mayExp = allExp.filter(function (item) {
          var itemDate = new Date(item.date);
          var month = months[itemDate.getMonth()];

          if (month == "May") {
            return true;
          }
        });
        var totalFood = 0;
        var totalTransport = 0;
        var totalOther = 0; // 3 if's for delete very last item from monthData obj

        if (!allExp.filter(function (e) {
          return e.category === "food";
        }).length > 0) {
          monthData.may.categories.food = totalFood;
        }

        if (!allExp.filter(function (e) {
          return e.category === "transportation";
        }).length > 0) {
          monthData.may.categories.transportation = totalTransport;
        }

        if (!allExp.filter(function (e) {
          return e.category === "other";
        }).length > 0) {
          monthData.may.categories.other = totalOther;
        }

        mayExp.forEach(function (item) {
          if (item.category == "food") {
            totalFood += item.value;
            monthData.may.categories.food = totalFood;
          }

          if (item.category == "transportation") {
            totalTransport += item.value;
            monthData.may.categories.transportation = totalTransport;
          }

          if (item.category == "other") {
            totalOther += item.value;
            monthData.may.categories.other = totalOther;
          }
        }); // Get total expenses by summing all categories

        monthData.may.totalExpenses = monthData.may.categories.food + monthData.may.categories.transportation + monthData.may.categories.other; // Update localstorage

        localStorage.setItem("MonthData", JSON.stringify(monthData));
      }

      updateMayExp();

      function updateJunExp() {
        var juneExp = allExp.filter(function (item) {
          var itemDate = new Date(item.date);
          var month = months[itemDate.getMonth()];

          if (month == "June") {
            return true;
          }
        });
        var totalFood = 0;
        var totalTransport = 0;
        var totalOther = 0; // 3 if's for delete very last item from monthData obj

        if (!allExp.filter(function (e) {
          return e.category === "food";
        }).length > 0) {
          monthData.jun.categories.food = totalFood;
        }

        if (!allExp.filter(function (e) {
          return e.category === "transportation";
        }).length > 0) {
          monthData.jun.categories.transportation = totalTransport;
        }

        if (!allExp.filter(function (e) {
          return e.category === "other";
        }).length > 0) {
          monthData.jun.categories.other = totalOther;
        }

        juneExp.forEach(function (item) {
          if (item.category == "food") {
            totalFood += item.value;
            monthData.jun.categories.food = totalFood;
          }

          if (item.category == "transportation") {
            totalTransport += item.value;
            monthData.jun.categories.transportation = totalTransport;
          }

          if (item.category == "other") {
            totalOther += item.value;
            monthData.jun.categories.other = totalOther;
          }
        }); // Get total expenses by summing all categories

        monthData.jun.totalExpenses = monthData.jun.categories.food + monthData.jun.categories.transportation + monthData.jun.categories.other; // Update localstorage

        localStorage.setItem("MonthData", JSON.stringify(monthData));
      }

      updateJunExp();

      function updateJulExp() {
        var julyExp = allExp.filter(function (item) {
          var itemDate = new Date(item.date);
          var month = months[itemDate.getMonth()];

          if (month == "July") {
            return true;
          }
        });
        var totalFood = 0;
        var totalTransport = 0;
        var totalOther = 0; // 3 if's for delete very last item from monthData obj

        if (!allExp.filter(function (e) {
          return e.category === "food";
        }).length > 0) {
          monthData.jul.categories.food = totalFood;
        }

        if (!allExp.filter(function (e) {
          return e.category === "transportation";
        }).length > 0) {
          monthData.jul.categories.transportation = totalTransport;
        }

        if (!allExp.filter(function (e) {
          return e.category === "other";
        }).length > 0) {
          monthData.jul.categories.other = totalOther;
        }

        julyExp.forEach(function (item) {
          if (item.category == "food") {
            totalFood += item.value;
            monthData.jul.categories.food = totalFood;
          }

          if (item.category == "transportation") {
            totalTransport += item.value;
            monthData.jul.categories.transportation = totalTransport;
          }

          if (item.category == "other") {
            totalOther += item.value;
            monthData.jul.categories.other = totalOther;
          }
        }); // Get total expenses by summing all categories

        monthData.jul.totalExpenses = monthData.jul.categories.food + monthData.jul.categories.transportation + monthData.jul.categories.other; // Update localstorage

        localStorage.setItem("MonthData", JSON.stringify(monthData));
      }

      updateJulExp(); // If need later we can add rest months Aug, Sep, Oct etc
    },
    getMonthData: function getMonthData() {
      return monthData;
    },
    getBudget: function getBudget() {
      return {
        budget: data.budget,
        totalIncome: data.totals.inc,
        totalExpense: data.totals.exp,
        percentage: data.percentage
      };
    },
    testData: function testData() {
      console.log(data);
    },
    testMonthData: function testMonthData() {
      console.log(monthData);
    },
    getData: function getData() {
      return data;
    }
  }, "getMonthData", function getMonthData() {
    return monthData;
  });
}(); // UI Controller


var UIController = function () {
  var DOMStrings = {
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
  }; // Custom Select Box #1

  var typeSelected = document.querySelector(".selected.selected-type");
  var typeOptionsContainer = document.querySelector(".options-container.options-container-type");
  var typeOptionsList = document.querySelectorAll(".option.option-type");
  typeSelected.addEventListener("click", function () {
    typeOptionsContainer.classList.toggle("active");
  });
  typeOptionsList.forEach(function (o) {
    o.addEventListener("click", function () {
      typeSelected.innerHTML = o.querySelector("label").innerHTML;
      typeOptionsContainer.classList.remove("active");
    });
  }); // Custom Select Box #2

  var categorySelected = document.querySelector(".selected.selected-category");
  var categoryOptionsContainer = document.querySelector(".options-container.options-container-category");
  var categoryOptionsList = document.querySelectorAll(".option.option-category");
  categorySelected.addEventListener("click", function () {
    categoryOptionsContainer.classList.toggle("active");
  });
  categoryOptionsList.forEach(function (o) {
    o.addEventListener("click", function () {
      categorySelected.innerHTML = o.querySelector("label").innerHTML;
      categoryOptionsContainer.classList.remove("active");
    });
  }); // Calendar picker

  var myCalendar = new VanillaCalendar({
    selector: "#myCalendar"
  });
  return {
    getInput: function getInput() {
      var type = function type() {
        if (document.querySelector(".selected").innerHTML == "Income") {
          return "inc";
        }

        if (document.querySelector(".selected").innerHTML == "Expense") {
          return "exp";
        }
      };

      var category = function category() {
        switch (document.querySelector(".selected.selected-category").innerHTML) {
          case "Food":
            return "food";

          case "Transportation":
            return "transportation";

          case "Other":
            return "other";
        }
      };

      return {
        type: type(),
        category: category(),
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
        date: document.querySelector(DOMStrings.itemDate).getAttribute("data-calendar-date")
      };
    },
    showOldDomItems: function showOldDomItems() {
      var expensesList = document.querySelector(".expenses-list");
      var saved = localStorage.getItem("expensesList");
      expensesList.innerHTML = saved;
    },
    ModalWindow: {
      init: function init() {
        var _this = this;

        document.body.addEventListener("click", function (e) {
          if (e.target.classList.contains("modal-close")) {
            _this.closeModal(e.target);
          }
        });
      },
      getHtmlTemplate: function getHtmlTemplate(modalOptions) {
        return "\n               <div class=\"modal-overlay\">\n                  <div class=\"modal-window\">\n                     <div class=\"modal-titlebar\">\n                        <span class=\"modal-title\">".concat(modalOptions.title, "</span>\n                        <button class=\"modal-close material-icons\">close</button>\n                     </div>\n                     <div class=\"modal-content\">\n                        ").concat(modalOptions.content, "\n                     </div>\n                  </div>\n               </div>\n            ");
      },
      openModal: function openModal() {
        var modalOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        modalOptions = Object.assign({
          title: "Modal Title",
          content: "Modal Content"
        }, modalOptions);
        var modalTemplate = this.getHtmlTemplate(modalOptions);
        document.body.insertAdjacentHTML("beforeend", modalTemplate);
      },
      closeModal: function closeModal(closeButton) {
        var modalOverlay = closeButton.parentElement.parentElement.parentElement;
        modalOverlay.parentElement.removeChild(modalOverlay);
      }
    },
    addItemToDom: function addItemToDom(obj, type) {
      var element;
      var html;
      var newHtml;

      if (type === "inc") {
        element = DOMStrings.incomeContainer;
        html = '<div class="item" id="inc-%id%">' + '<div class="item-description">%description%</div>' + '<div class="item-value">%value%</div>' + '<div class="item-delete">' + '<button class="item-delete-btn">Delete</button>' + '</div>' + '</div>';
      } else if (type === "exp") {
        element = DOMStrings.expenseContainer;
        html = '<div class="item" id="exp-%id%" data-date="%date%">' + '<div class="item-description">%description%</div>' + '<div class="item-value">%value%</div>' + '<div class="item-delete">' + '<button class="item-delete-btn">Delete</button>' + '</div>' + '</div>';
      }

      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);
      newHtml = newHtml.replace('%date%', obj.date); // insert HTML into the DOM

      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml); // Save the HTML to localstorage

      var expensesList = document.querySelector(".expenses-list");
      localStorage.setItem("expensesList", expensesList.innerHTML);
    },
    deleteItemFromDom: function deleteItemFromDom(htmlID) {
      var element = document.getElementById(htmlID);
      element.parentElement.removeChild(element); // Update localstorage data

      var expensesList = document.querySelector(".expenses-list");
      localStorage.setItem("expensesList", expensesList.innerHTML);
    },
    clearFields: function clearFields() {
      var descriptionField = document.querySelector(DOMStrings.inputDescription);
      descriptionField.value = "";
      document.querySelector(DOMStrings.inputValue).value = "";
      descriptionField.focus();
    },
    displayBudget: function displayBudget(obj) {
      document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalIncome;
      document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExpense;
    },
    displayMonth: function displayMonth() {
      var now;
      var year;
      var month;
      var months;
      now = new Date();
      months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(DOMStrings.dateLabel).textContent = year + " " + months[month];
    },
    getDOMStrings: function getDOMStrings() {
      return DOMStrings;
    }
  };
}(); // Global App Controller


var controller = function (budget, UI, charts) {
  var DOM = UI.getDOMStrings();

  var updateBudget = function updateBudget() {
    // 1. calculate the budget
    budget.calculateBudget(); // 2. return the budget

    var budgetNow = budget.getBudget(); // 3. Displaythe budget in the UI

    UI.displayBudget(budgetNow);
  }; // Show as soon as page loads


  UI.displayMonth();
  updateBudget();
  UI.showOldDomItems();

  var addItem = function addItem() {
    var input;
    var newItem; // 1. Get the input data from user
    // Warn user to select date by showing modal warning

    var calDateList = document.querySelectorAll(".vanilla-calendar-date");
    var calDateListArr = Array.from(calDateList);
    var isDateSelected = calDateListArr.some(function (item) {
      if (item.classList.contains("vanilla-calendar-date--selected")) {
        console.log(item);
        return true;
      }
    });

    if (isDateSelected == false) {
      UI.ModalWindow.openModal({
        title: "Error",
        content: "Date not selected!"
      });
    }

    input = UI.getInput(); // Validate data inputed by user

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // Success message to user
      UI.ModalWindow.openModal({
        title: "Success",
        content: "Entry added!"
      }); // 2. Add the item to the data object

      newItem = budget.addItemToArray(input.type, input.category, input.description, input.value, input.date); // 3. Add the item to the monthData object

      budget.updateAllMonths(); // 4. Add the item to the DOM

      UI.addItemToDom(newItem, input.type); // 5. Clear input fields in DOM

      UI.clearFields(); // 6. Update budget in DOM

      updateBudget();
    } else {
      console.log("User Input Validation failed!");
    }
  };

  var deleteItem = function deleteItem(event) {
    var itemID;
    var splitID;
    var type;
    var ID;
    itemID = event.target.parentElement.parentElement.id;

    if (itemID) {
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);
    } // 1. delete item from the data object


    budget.deleteItemFromArray(type, ID); // 2. update monthData object

    budget.updateAllMonths(); // 3. delete item from DOM

    UI.deleteItemFromDom(itemID); // 4. Update and show new budget

    updateBudget();
  };

  document.querySelector(DOM.inputBtn).addEventListener("click", addItem);
  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
      addItem();
    }
  });
  document.querySelector(DOM.listsContainer).addEventListener("click", deleteItem);
  document.addEventListener("DOMContentLoaded", function () {
    return UI.ModalWindow.init();
  });
}(budgetController, UIController);
//# sourceMappingURL=app.js.map

// Budget Controller
let budgetController = (function () {
  let Expense = function (id, category, description, value, date) {
    this.id = id;
    this.category = category;
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
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  let monthData = {
    jan: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    feb: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    mar: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    apr: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    may: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    jun: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    jul: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    aug: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    sep: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    oct: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    nov: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
    dec: {
      totalExpenses: 0,
      categories: {
        food: 0,
        transportation: 0,
        other: 0,
      },
    },
  };

  // Localstorage
  if (localStorage.getItem("Data") == null) {
    localStorage.setItem("Data", JSON.stringify(data));
  } else {
    // if there is Data in localstorage get it
    data = JSON.parse(localStorage.getItem("Data"));
  }

  if (localStorage.getItem("MonthData") == null) {
    localStorage.setItem("MonthData", JSON.stringify(monthData));
  } else {
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

      // 2. update monthData with new values
      // a) stuff needed for addToMonthData function
      const months = [
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
        "December",
      ];
      const itemDate = new Date(newItem.date);
      const month = months[itemDate.getMonth()];

      // b) stuff needed for addToMonthData function
      let monthName;

      if (month === "January") {
        monthName = "jan";
      } else if (month === "February") {
        monthName = "feb";
      } else if (month === "March") {
        monthName = "mar";
      } else if (month === "April") {
        monthName = "apr";
      } else if (month === "May") {
        monthName = "may";
      } else if (month === "June") {
        monthName = "jun";
      } else if (month === "July") {
        monthName = "jul";
      } else if (month === "August") {
        monthName = "aug";
      } else if (month === "September") {
        monthName = "sep";
      } else if (month === "October") {
        monthName = "oct";
      } else if (month === "November") {
        monthName = "nov";
      } else if (month === "December") {
        monthName = "dec";
      }

      // now we can add stuff to object monthData
      function addToMonthData(monthName, category, val) {
        const month = monthData[monthName];

        console.log(`before monthData.${monthName}:`, month.categories);
        month.categories[category] += val;
        console.log(`after monthData.${monthName}:`, month.categories);
        // console.log(month.categories[category]);

        // update month total
        let totalExpensesCalculated = Object.values(month.categories).reduce(
          (a, b) => a + b,
          0
        );
        console.log(
          `total expenses in ${monthName} ${totalExpensesCalculated}`
        );
        month.totalExpenses = totalExpensesCalculated;
      }
      if (type === "exp") {
        addToMonthData(monthName, category, val);
        localStorage.setItem("MonthData", JSON.stringify(monthData));
      }

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
        let toDelete = data.allItems[type].splice(index, 1);

        let months = [
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
          "December",
        ];
        let itemDate = new Date(toDelete[0].date);
        let month = months[itemDate.getMonth()];

        if (month === "January") {
          monthName = "jan";
        } else if (month === "February") {
          monthName = "feb";
        } else if (month === "March") {
          monthName = "mar";
        } else if (month === "April") {
          monthName = "apr";
        } else if (month === "May") {
          monthName = "may";
        } else if (month === "June") {
          monthName = "jun";
        } else if (month === "July") {
          monthName = "jul";
        } else if (month === "August") {
          monthName = "aug";
        } else if (month === "September") {
          monthName = "sep";
        } else if (month === "October") {
          monthName = "oct";
        } else if (month === "November") {
          monthName = "nov";
        } else if (month === "December") {
          monthName = "dec";
        }

        const category = toDelete[0].category;
        const val = toDelete[0].value;

        function delFromMonthData(monthName, category, val) {
          const month = monthData[monthName];
          console.log("category:", category);

          console.log(`before monthData.${monthName}:`, month.categories);
          month.categories[category] -= val;
          console.log(`after monthData.${monthName}:`, month.categories);

          // update month total
          let totalExpensesCalculated = Object.values(month.categories).reduce(
            (a, b) => a + b,
            0
          );
          console.log(
            `total expenses in ${monthName} ${totalExpensesCalculated}`
          );
          month.totalExpenses = totalExpensesCalculated;
        }
        if (type === "exp") {
          delFromMonthData(monthName, category, val);
          localStorage.setItem("MonthData", JSON.stringify(monthData));
        }
        localStorage.setItem("Data", JSON.stringify(data));
      }
    },
    calculateBudget: function () {
      // Calculate total income & expenses
      calculateTotal("inc");
      calculateTotal("exp");
      data.budget = data.totals.inc - data.totals.exp;
      localStorage.setItem("Data", JSON.stringify(data));
    },

    getBudget: function () {
      return {
        budget: data.budget,
        totalIncome: data.totals.inc,
        totalExpense: data.totals.exp,
        percentage: data.percentage,
      };
    },
  };
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
    itemDate: ".vanilla-calendar-date--selected",
  };

  // Custom Select Box #1
  const typeSelected = document.querySelector(".selected.selected-type");
  const typeOptionsContainer = document.querySelector(
    ".options-container.options-container-type"
  );

  typeSelected.addEventListener("click", () => {
    typeOptionsContainer.classList.toggle("active");
  });

  document.querySelectorAll(".option").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("option-type")) {
        typeSelected.textContent = e.target.querySelector("label").textContent;
        typeOptionsContainer.classList.remove("active");

        // Only show 'select box #2' if expense category is chosen by user
        if (typeSelected.textContent == "Expense") {
          document.querySelector(".select-box-category").style.visibility =
            "visible";
        } else if (typeSelected.textContent == "Income") {
          document.querySelector(".select-box-category").style.visibility =
            "hidden";
        }
      }
    });
  });
  // Custom Select Box #1 END

  // Custom Select Box #2
  const categorySelect = document.querySelector(".selected-category");
  const categoryOptions = document.querySelector(".options-container-category");

  categorySelect.addEventListener("click", () => {
    categoryOptions.classList.toggle("active");
  });

  document.querySelectorAll(".select-box-category .option").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("option-category")) {
        categorySelect.textContent = e.target.querySelector(
          "label"
        ).textContent;
        categoryOptions.classList.remove("active");
      }
    });
  });
  // Custom Select Box #2 END

  // Calendar picker
  let myCalendar = new VanillaCalendar({
    selector: "#myCalendar",
  });

  return {
    getInput: function () {
      let type = function () {
        if (document.querySelector(".selected").innerHTML == "Income") {
          return "inc";
        }
        if (document.querySelector(".selected").innerHTML == "Expense") {
          return "exp";
        }
      };
      let category = function () {
        switch (
          document.querySelector(".selected.selected-category").innerHTML
        ) {
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
        date: document
          .querySelector(DOMStrings.itemDate)
          .getAttribute("data-calendar-date"),
      };
    },
    showOldDomItems: function () {
      let expensesList = document.querySelector(".expenses-list");
      let saved = localStorage.getItem("expensesList");
      expensesList.innerHTML = saved;
    },
    ModalWindow: {
      init() {
        document.body.addEventListener("click", (e) => {
          if (e.target.classList.contains("modal-close")) {
            this.closeModal(e.target);
          }
        });
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
        modalOptions = Object.assign(
          {
            title: "Modal Title",
            content: "Modal Content",
          },
          modalOptions
        );

        const modalTemplate = this.getHtmlTemplate(modalOptions);
        document.body.insertAdjacentHTML("beforeend", modalTemplate);
      },
      closeModal(closeButton) {
        const modalOverlay =
          closeButton.parentElement.parentElement.parentElement;
        modalOverlay.parentElement.removeChild(modalOverlay);
      },
    },
    addItemToDom: function (obj, type) {
      let element;
      let html;
      let newHtml;

      if (type === "inc") {
        element = DOMStrings.incomeContainer;
        html =
          '<div class="item" id="inc-%id%">' +
          '<div class="item-description">%description%</div>' +
          '<div class="item-value">%value%</div>' +
          '<button class="item-delete">Delete</button>' +
          "</div>";
      } else if (type === "exp") {
        element = DOMStrings.expenseContainer;
        html =
          '<div class="item" id="exp-%id%" data-date="%date%">' +
          '<div class="item-description">%description%</div>' +
          '<div class="item-value">%value%</div>' +
          '<button class="item-delete">Delete</button>' +
          "</div>";
      }
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);
      newHtml = newHtml.replace("%date%", obj.date);

      // insert HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
      // Save the HTML to localstorage
      let expensesList = document.querySelector(".expenses-list");
      localStorage.setItem("expensesList", expensesList.innerHTML);
    },
    deleteItemFromDom: function (htmlID) {
      let element = document.getElementById(htmlID);
      element.parentElement.removeChild(element);

      // Update localstorage data
      let expensesList = document.querySelector(".expenses-list");
      localStorage.setItem("expensesList", expensesList.innerHTML);
    },

    clearFields: function () {
      const descriptionField = document.querySelector(
        DOMStrings.inputDescription
      );
      descriptionField.value = "";
      document.querySelector(DOMStrings.inputValue).value = "";
      descriptionField.focus();
    },
    displayBudget: function (obj) {
      document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMStrings.incomeLabel).textContent =
        obj.totalIncome;
      document.querySelector(DOMStrings.expensesLabel).textContent =
        obj.totalExpense;
    },
    displayMonth: function () {
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
        "December",
      ];
      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(DOMStrings.dateLabel).textContent =
        year + " " + months[month];
    },

    getDOMStrings: function () {
      return DOMStrings;
    },
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
  };
  // Show as soon as page loads
  UI.displayMonth();
  updateBudget();
  UI.showOldDomItems();

  let addItem = function () {
    let input;
    let newItem;
    // 1. Get the input data from user

    // Warn user to select date by showing modal warning
    let calDateList = document.querySelectorAll(".vanilla-calendar-date");

    let calDateListArr = Array.from(calDateList);
    let isDateSelected = calDateListArr.some(function (item) {
      if (item.classList.contains("vanilla-calendar-date--selected")) {
        return true;
      }
    });
    if (isDateSelected == false) {
      UI.ModalWindow.openModal({
        title: "Error",
        content: "Date not selected!",
      });
    }

    input = UI.getInput();
    // Validate data inputed by user
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // Success message to user
      UI.ModalWindow.openModal({
        title: "Success",
        content: "Entry added!",
      });
      // 2. Add the item to the data object
      newItem = budget.addItemToArray(
        input.type,
        input.category,
        input.description,
        input.value,
        input.date
      );
      // 3. Add the item to the DOM
      UI.addItemToDom(newItem, input.type);
      // 4. Clear input fields in DOM
      UI.clearFields();
      // 5. Update budget in DOM
      updateBudget();
    } else {
      console.log("User Input Validation failed!");
    }
  };

  let deleteItem = function (event) {
    let itemID;
    let splitID;
    let type;
    let ID;

    itemID = event.target.parentElement.id;

    if (itemID) {
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);
    }
    // 1. delete item from the data object
    budget.deleteItemFromArray(type, ID);
    // 2. delete item from DOM
    UI.deleteItemFromDom(itemID);
    // 3. Update and show new budget
    updateBudget();
  };

  document.querySelector(DOM.inputBtn).addEventListener("click", addItem);
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      addItem();
    }
  });
  document
    .querySelector(DOM.listsContainer)
    .addEventListener("click", deleteItem);
  document.addEventListener("DOMContentLoaded", () => UI.ModalWindow.init());
})(budgetController, UIController);

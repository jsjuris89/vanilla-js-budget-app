
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
   // 1. If there is no data in localStorage then create it
   // 2. Get latest data from localstorage
   // 3. in controller module in addItem func update "Data" values in localstorage via addItemToArray func
   // 4. Update localcstorage data when user deletes an item via deleteItemFromArray func
   // -------- Statistics --------
   // 5. Get / save monthData in localStorage
   // 5.1 We update localstorage when adding OR deleting items by using getMonthExpenses func (switch then before returning f.e.return monthData.feb we before that update localstorage)
   // 5.2 When refreshing keep the DOM items which wasnt deleted.

   if (localStorage.getItem("Data") == null) {
      localStorage.setItem("Data", JSON.stringify(data));
   } else {
      console.log("There already is a key -- DATA -- in localstorage.")
      // if there is Data in localstorage get it
      data = JSON.parse(localStorage.getItem("Data"));
   }

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
         calculateTotal('exp');
         calculateTotal('inc');


         data.budget = data.totals.inc - data.totals.exp;
      },
      getMonthExpenses: function (date, type) {
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

         if (type == "exp") {
            switch (month) {
               case "January":
                  // 1st we need filter out from data.allItems.exp only items which have specific month in date: .....
                  let janAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "January") {
                        console.log(item);
                        return true;
                     }
                  });

                  let janFood = 0;
                  let janTransport = 0;
                  let janOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.jan.categories.food = janFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.jan.categories.transportation = janTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.jan.categories.other = janOther;
                  }

                  janAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        janFood = janFood + item.value;
                        monthData.jan.categories.food = janFood;
                     } else if (item.category == "transportation") {
                        janTransport = janTransport + item.value;
                        monthData.jan.categories.transportation = janTransport
                     } else if (item.category == "other") {
                        janOther = janOther + item.value;
                        monthData.jan.categories.other = janOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.jan.totalExpenses = monthData.jan.categories.food + monthData.jan.categories.transportation + monthData.jan.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.jan;

               case "February":
                  // 1st we need filter out from data.allItems.exp only items which have specific month in date: .....
                  let febAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);
                     month = months[itemDate.getMonth()]

                     if (month == "February") {
                        console.log(item);
                        return true;
                     }
                  });


                  let febFood = 0;
                  let febTransport = 0;
                  let febOther = 0;

                  // Since in our app getMonthExpenses basically always make at least 1 value in monthData.feb.categories.X = some value (never a 0) we will just check in data.AllItems.exp array has any element with a specific value. F.E. category: "food"
                  // If it does not have it then reset back that category to 0! Our app works fine (updateChart function) until the very last element then we need to check in original data structure if there is any array item with a key:value as like category: "food" / category: "transportation" etc

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.feb.categories.food = febFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.feb.categories.transportation = febTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.feb.categories.other = febOther;
                  }

                  febAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        febFood = febFood + item.value;
                        monthData.feb.categories.food = febFood;
                     } else if (item.category == "transportation") {
                        febTransport = febTransport + item.value;
                        monthData.feb.categories.transportation = febTransport;
                     } else if (item.category == "other") {
                        febOther = febOther + item.value;
                        monthData.feb.categories.other = febOther;
                     }
                  })
                  // Sum all 3 categories together for total expenses in a month
                  monthData.feb.totalExpenses = monthData.feb.categories.food + monthData.feb.categories.transportation + monthData.feb.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));
                  // let testing = JSON.parse(localStorage.getItem("MonthData"));


                  return monthData.feb

               case "March":
                  // 1st we need filter out from data.allItems.exp only items which have specific month in date: .....
                  let marAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "March") {
                        // console.log(item);
                        return true;
                     }
                  });

                  let marFood = 0;
                  let marTransport = 0;
                  let marOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.mar.categories.food = marFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.mar.categories.transportation = marTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.mar.categories.other = marOther;
                  }

                  marAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        marFood = marFood + item.value;
                        monthData.mar.categories.food = marFood;
                     } else if (item.category == "transportation") {
                        marTransport = marTransport + item.value;
                        monthData.mar.categories.transportation = marTransport
                     } else if (item.category == "other") {
                        marOther = marOther + item.value;
                        monthData.mar.categories.other = marOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.mar.totalExpenses = monthData.mar.categories.food + monthData.mar.categories.transportation + monthData.mar.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.mar;
               case "April":
                  let aprAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "April") {
                        // console.log(item);
                        return true;
                     }
                  });

                  let aprFood = 0;
                  let aprTransport = 0;
                  let aprOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.apr.categories.food = aprFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.apr.categories.transportation = aprTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.apr.categories.other = aprOther;
                  }

                  aprAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        aprFood = aprFood + item.value;
                        monthData.apr.categories.food = aprFood;
                     } else if (item.category == "transportation") {
                        aprTransport = aprTransport + item.value;
                        monthData.apr.categories.transportation = aprTransport
                     } else if (item.category == "other") {
                        aprOther = aprOther + item.value;
                        monthData.apr.categories.other = aprOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.apr.totalExpenses = monthData.apr.categories.food + monthData.apr.categories.transportation + monthData.apr.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.apr;
               case "May":
                  let mayAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "May") {
                        // console.log(item);
                        return true;
                     }
                  });

                  let mayFood = 0;
                  let mayTransport = 0;
                  let mayOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.may.categories.food = mayFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.may.categories.transportation = mayTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.may.categories.other = mayOther;
                  }

                  mayAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        mayFood = mayFood + item.value;
                        monthData.may.categories.food = mayFood;
                     } else if (item.category == "transportation") {
                        mayTransport = mayTransport + item.value;
                        monthData.may.categories.transportation = mayTransport
                     } else if (item.category == "other") {
                        mayOther = mayOther + item.value;
                        monthData.may.categories.other = mayOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.may.totalExpenses = monthData.may.categories.food + monthData.may.categories.transportation + monthData.may.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.may;
               case "June":
                  // DO NOT WORK SOME BUG
                  let junAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "June") {
                        // console.log(item);
                        return true;
                     }
                  });

                  let junFood = 0;
                  let junTransport = 0;
                  let junOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.jun.categories.food = junFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.jun.categories.transportation = junTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.jun.categories.other = junOther;
                  }

                  junAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        junFood = junFood + item.value;
                        monthData.jun.categories.food = junFood;
                     } else if (item.category == "transportation") {
                        junTransport = junTransport + item.value;
                        monthData.jun.categories.transportation = junTransport
                     } else if (item.category == "other") {
                        junOther = junOther + item.value;
                        monthData.jun.categories.other = junOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.jun.totalExpenses = monthData.jun.categories.food + monthData.jun.categories.transportation + monthData.jun.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.jun;
               case "July":
                  let julAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "July") {
                        // console.log(item);
                        return true;
                     }
                  });

                  let julFood = 0;
                  let julTransport = 0;
                  let julOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.jul.categories.food = julFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.jul.categories.transportation = julTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.jul.categories.other = julOther;
                  }

                  julAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        julFood = julFood + item.value;
                        monthData.jul.categories.food = julFood;
                     } else if (item.category == "transportation") {
                        julTransport = julTransport + item.value;
                        monthData.jul.categories.transportation = julTransport
                     } else if (item.category == "other") {
                        julOther = julOther + item.value;
                        monthData.jul.categories.other = julOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.jul.totalExpenses = monthData.jul.categories.food + monthData.jul.categories.transportation + monthData.jul.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.jul;
               case "August":
                  let augAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "August") {
                        // console.log(item);
                        return true;
                     }
                  });

                  let augFood = 0;
                  let augTransport = 0;
                  let augOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.aug.categories.food = augFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.aug.categories.transportation = augTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.aug.categories.other = augOther;
                  }

                  augAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        augFood = augFood + item.value;
                        monthData.aug.categories.food = augFood;
                     } else if (item.category == "transportation") {
                        augTransport = augTransport + item.value;
                        monthData.aug.categories.transportation = augTransport
                     } else if (item.category == "other") {
                        augOther = augOther + item.value;
                        monthData.aug.categories.other = augOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.aug.totalExpenses = monthData.aug.categories.food + monthData.aug.categories.transportation + monthData.aug.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.aug;
               case "September":
                  let sepAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "September") {
                        // console.log(item);
                        return true;
                     }
                  });

                  let sepFood = 0;
                  let sepTransport = 0;
                  let sepOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.sep.categories.food = sepFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.sep.categories.transportation = sepTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.sep.categories.other = sepOther;
                  }

                  sepAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        sepFood = sepFood + item.value;
                        monthData.sep.categories.food = sepFood;
                     } else if (item.category == "transportation") {
                        sepTransport = sepTransport + item.value;
                        monthData.sep.categories.transportation = sepTransport
                     } else if (item.category == "other") {
                        sepOther = sepOther + item.value;
                        monthData.sep.categories.other = sepOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.sep.totalExpenses = monthData.sep.categories.food + monthData.sep.categories.transportation + monthData.sep.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.sep;
               case "October":
                  let octAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "October") {
                        // console.log(item);
                        return true;
                     }
                  });

                  let octFood = 0;
                  let octTransport = 0;
                  let octOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.oct.categories.food = octFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.oct.categories.transportation = octTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.oct.categories.other = octOther;
                  }

                  octAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        octFood = octFood + item.value;
                        monthData.oct.categories.food = octFood;
                     } else if (item.category == "transportation") {
                        octTransport = octTransport + item.value;
                        monthData.oct.categories.transportation = octTransport
                     } else if (item.category == "other") {
                        octOther = octOther + item.value;
                        monthData.oct.categories.other = octOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.oct.totalExpenses = monthData.oct.categories.food + monthData.oct.categories.transportation + monthData.oct.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.oct;
               case "November":
                  let novAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "November") {
                        // console.log(item);
                        return true;
                     }
                  });

                  let novFood = 0;
                  let novTransport = 0;
                  let novOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.nov.categories.food = novFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.nov.categories.transportation = novTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.nov.categories.other = novOther;
                  }

                  novAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        novFood = novFood + item.value;
                        monthData.nov.categories.food = novFood;
                     } else if (item.category == "transportation") {
                        novTransport = novTransport + item.value;
                        monthData.nov.categories.transportation = novTransport
                     } else if (item.category == "other") {
                        novOther = novOther + item.value;
                        monthData.nov.categories.other = novOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.nov.totalExpenses = monthData.nov.categories.food + monthData.nov.categories.transportation + monthData.nov.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.nov;
               case "December":
                  let decAllExpenses = data.allItems.exp.filter(function (item) {
                     let itemDate = new Date(item.date);

                     month = months[itemDate.getMonth()]
                     if (month == "December") {
                        // console.log(item);
                        return true;
                     }
                  });

                  let decFood = 0;
                  let decTransport = 0;
                  let decOther = 0;

                  // Last item in category: food
                  if (!data.allItems.exp.filter(e => e.category === "food").length > 0) {
                     monthData.dec.categories.food = decFood;
                  }
                  // Last item in category: transportation
                  if (!data.allItems.exp.filter(e => e.category === "transportation").length > 0) {
                     monthData.dec.categories.transportation = decTransport;
                  }
                  // Last item in category: other
                  if (!data.allItems.exp.filter(e => e.category === "other").length > 0) {
                     monthData.dec.categories.other = decOther;
                  }

                  decAllExpenses.forEach(function (item) {
                     if (item.category == "food") {
                        decFood = decFood + item.value;
                        monthData.dec.categories.food = decFood;
                     } else if (item.category == "transportation") {
                        decTransport = decTransport + item.value;
                        monthData.dec.categories.transportation = decTransport
                     } else if (item.category == "other") {
                        decOther = decOther + item.value;
                        monthData.dec.categories.other = decOther;
                     }
                  })

                  // Sum all 3 categories together for total expenses in a month
                  monthData.dec.totalExpenses = monthData.dec.categories.food + monthData.dec.categories.transportation + monthData.dec.categories.other;

                  // after all done update localstorage
                  localStorage.setItem("MonthData", JSON.stringify(monthData));

                  return monthData.dec;
            }
         }
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

   return {
      getInput: function () {
         let type = function () {
            if (document.querySelector(".selected").innerHTML ==
               "Income") {
               return "inc"
            } else if (document.querySelector(".selected").innerHTML == "Expense") {
               return "exp";
            }
         }
         let category = function () {
            switch (document.querySelector(".selected.selected-category").innerHTML) {
               case "Food":
                  // console.log("Food category was chosen.");
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
      showOldDomItems: function () {
         let expensesList = document.querySelector(".expenses-list");
         let saved = localStorage.getItem("expensesList");
         expensesList.innerHTML = saved;

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

      getDOMStrings: function () {
         return DOMStrings;
      }
   };

})();



// Chart MODULE
let myCharts = (function (budget) {


   let monthData = budget.getMonthData();
   // console.log(monthData.feb);
   // console.log(monthData.feb.categories[Object.keys(monthData.feb.categories)[0]])
   // console.log("yuuuuuuuuuuuuuuuuuuuu: " + monthData.feb.categories[Object.keys(monthData.feb.categories)[0]])


   return {
      createChart: function () {
         let ctx = document.getElementById('myChart').getContext('2d');
         let newChart = new Chart(ctx, {
            type: "pie",

            data: {
               labels: [Object.keys(monthData.feb.categories)[0], Object.keys(monthData.feb.categories)[1], Object.keys(monthData.feb.categories)[2]],
               // labels: ["food", "transportation", "other"],
               datasets: [{
                  label: "My expenses by category",
                  backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
                  borderColor: 'rgb(255, 255, 255)',
                  // data: [monthData.feb.categories.food, monthData.feb.categories.transportation, monthData.feb.categories.other,]
                  data: [monthData.feb.categories[Object.keys(monthData.feb.categories)[0]], monthData.feb.categories[Object.keys(monthData.feb.categories)[1]], monthData.feb.categories[Object.keys(monthData.feb.categories)[2]]]
               }]
            }
         });
         return expensesChart = newChart;
      },
      updateChart: function () {

         // console.log(budgetController.getData().allItems.exp);

         console.log("update chart function launched!");
         expensesChart.data.datasets[0].data = [monthData.feb.categories[Object.keys(monthData.feb.categories)[0]], monthData.feb.categories[Object.keys(monthData.feb.categories)[1]], monthData.feb.categories[Object.keys(monthData.feb.categories)[2]]];
         expensesChart.update();
      }
   }

})(budgetController)




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
   // Show as soon page loads
   UI.displayMonth();
   updateBudget();
   UI.showOldDomItems();
   myCharts.createChart();



   let addItem = function () {
      let input;
      let newItem;
      // 1. Get the input data from user
      input = UI.getInput();

      // Validate data inputed by user
      if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
         // 2. Add the item to the budget controller
         newItem = budget.addItemToArray(input.type, input.category, input.description, input.value, input.date);
         // Extra filter by month expenses
         budget.getMonthExpenses(input.date, input.type);

         // 3.1 Add the item to the UI
         UI.addItemToDom(newItem, input.type);
         // 3.2 Clear the fields
         UI.clearFields();

         // ------------
         myCharts.updateChart();
         // 4. Calculate and update budget
         updateBudget();

         // myCharts.updateChart();
      } else {
         console.log("Validation failed!");
      }
   }

   let deleteItem = function (event) {
      let itemID;
      let splitID;
      let type;
      let ID;

      let deleteDate = event.target.parentElement.parentElement.getAttribute("data-date");
      itemID = event.target.parentElement.parentElement.id;

      if (itemID) {
         // use split - JS converts string to an Object and will return and array
         splitID = itemID.split("-");
         // console.log("splitID is: " + splitID);
         type = splitID[0];
         // console.log("type is: " + type);
         ID = parseInt(splitID[1]);
         // console.log("ID is: " + ID);
      }


      // 1. delete the item from the data structure
      budget.deleteItemFromArray(type, ID);
      budget.getMonthExpenses(deleteDate, type);
      myCharts.updateChart();



      // 2. delete the item from the UI
      UI.deleteItemFromDom(itemID);
      // 3. Update and show the new budget
      updateBudget();
   };
   document.querySelector(DOM.inputBtn).addEventListener("click", addItem);
   document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13) {
         addItem();
      }
   });
   document.querySelector(DOM.listsContainer).addEventListener("click", deleteItem);
})(budgetController, UIController, myCharts)




// Custom Select Boxes
// Income or Expense
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

// Food or Transportation or Other
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
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


document.querySelector(".stats-feb").addEventListener("click", displayFebStats);

function displayFebStats() {
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
   return febChart = newChart;
   
}
function hideChart() {
  febChart.destroy();
}
document.querySelector(".stats-hide").addEventListener("click", hideChart);

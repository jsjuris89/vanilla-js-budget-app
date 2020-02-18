// Get localstorage data
data = JSON.parse(localStorage.getItem("Data"));
monthData = JSON.parse(localStorage.getItem("MonthData"));

// Custom Select Box for months
const monthSelected = document.querySelector(".selected.selected-month");
const monthOptionsContainer = document.querySelector(".options-container.options-container-month");
const monthOptionsList = document.querySelectorAll(".option.option-month");


monthSelected.addEventListener("click", () => {
   monthOptionsContainer.classList.toggle("active");

})
monthOptionsList.forEach(o => {
   o.addEventListener("click", () => {
      monthSelected.innerHTML = o.querySelector("label").innerHTML;
      monthOptionsContainer.classList.remove("active");
      if (monthSelected.innerHTML == "February") {
         // don't create a new canvas element if there is one already
         if (!document.getElementById("myChartFeb")) {
            // console.log("there is already a canvas for Feb chart")
            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "myChartFeb");
            document.body.appendChild(canvas);
            displayFebChart()
         }

      } else if (monthSelected.innerHTML == "March") {
         if (!document.getElementById("myChartMar")) {
            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "myChartMar");
            document.body.appendChild(canvas);
            displayMarChart()
         }
      }
   })
})



// document.querySelector(".show-stats-jan").addEventListener("click", displayJanChart)
// document.querySelector(".show-stats-feb").addEventListener("click", displayFebChart);
// document.querySelector(".show-stats-mar").addEventListener("click", displayMarChart);
// document.querySelector(".show-stats-apr").addEventListener("click", displayAprChart);
// document.querySelector(".show-stats-may").addEventListener("click", displayMayChart);
// document.querySelector(".show-stats-jun").addEventListener("click", displayJunChart);
// document.querySelector(".show-stats-jul").addEventListener("click", displayJulChart);


function displayJanChart() {
   let ctx = document.getElementById('myChartJan').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.jan.categories)[0], Object.keys(monthData.jan.categories)[1], Object.keys(monthData.jan.categories)[2]],
         // labels: ["food", "transportation", "other"],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.jan.categories[Object.keys(monthData.jan.categories)[0]], monthData.jan.categories[Object.keys(monthData.jan.categories)[1]], monthData.jan.categories[Object.keys(monthData.jan.categories)[2]]]
         }]
      }
   });
   return janChart = newChart;
}

function displayFebChart() {
   let ctx = document.getElementById('myChartFeb').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.feb.categories)[0], Object.keys(monthData.feb.categories)[1], Object.keys(monthData.feb.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.feb.categories[Object.keys(monthData.feb.categories)[0]], monthData.feb.categories[Object.keys(monthData.feb.categories)[1]], monthData.feb.categories[Object.keys(monthData.feb.categories)[2]]]
         }]
      }
   });
   return febChart = newChart;
}

function displayMarChart() {
   let ctx = document.getElementById('myChartMar').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.mar.categories)[0], Object.keys(monthData.mar.categories)[1], Object.keys(monthData.mar.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.mar.categories[Object.keys(monthData.mar.categories)[0]], monthData.mar.categories[Object.keys(monthData.mar.categories)[1]], monthData.mar.categories[Object.keys(monthData.mar.categories)[2]]]
         }]
      }
   });
   return marChart = newChart;
}

function displayAprChart() {
   let ctx = document.getElementById('myChartApr').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.apr.categories)[0], Object.keys(monthData.apr.categories)[1], Object.keys(monthData.apr.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.apr.categories[Object.keys(monthData.apr.categories)[0]], monthData.apr.categories[Object.keys(monthData.apr.categories)[1]], monthData.apr.categories[Object.keys(monthData.apr.categories)[2]]]
         }]
      }
   });
   return aprChart = newChart;
}

function displayMayChart() {
   let ctx = document.getElementById('myChartMay').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.may.categories)[0], Object.keys(monthData.may.categories)[1], Object.keys(monthData.may.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.may.categories[Object.keys(monthData.may.categories)[0]], monthData.may.categories[Object.keys(monthData.may.categories)[1]], monthData.may.categories[Object.keys(monthData.may.categories)[2]]]
         }]
      }
   });
   return mayChart = newChart;
}

function displayJunChart() {
   let ctx = document.getElementById('myChartJun').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.jun.categories)[0], Object.keys(monthData.jun.categories)[1], Object.keys(monthData.jun.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.jun.categories[Object.keys(monthData.jun.categories)[0]], monthData.jun.categories[Object.keys(monthData.jun.categories)[1]], monthData.jun.categories[Object.keys(monthData.jun.categories)[2]]]
         }]
      }
   });
   return junChart = newChart;
}

function displayJulChart() {
   let ctx = document.getElementById('myChartJul').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.jul.categories)[0], Object.keys(monthData.jul.categories)[1], Object.keys(monthData.jul.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.jul.categories[Object.keys(monthData.jul.categories)[0]], monthData.jul.categories[Object.keys(monthData.jul.categories)[1]], monthData.jul.categories[Object.keys(monthData.jul.categories)[2]]]
         }]
      }
   });
   return julChart = newChart;
}

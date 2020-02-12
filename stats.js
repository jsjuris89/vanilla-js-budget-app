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


document.querySelector(".stats-jan").addEventListener("click", displayJanChart)
document.querySelector(".stats-feb").addEventListener("click", displayFebChart);
document.querySelector(".stats-mar").addEventListener("click", displayMarChart);
document.querySelector(".stats-apr").addEventListener("click", displayAprChart);
document.querySelector(".stats-may").addEventListener("click", displayMayChart);
document.querySelector(".stats-jun").addEventListener("click", displayJunChart);
document.querySelector(".stats-jul").addEventListener("click", displayJulChart);
document.querySelector(".stats-aug").addEventListener("click", displayAugChart);
document.querySelector(".stats-sep").addEventListener("click", displaySepChart);
document.querySelector(".stats-oct").addEventListener("click", displayOctChart);
document.querySelector(".stats-nov").addEventListener("click", displayNovChart);
document.querySelector(".stats-dec").addEventListener("click", displayDecChart);

document.querySelector(".stats-hide").addEventListener("click", destroyAllChart);


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

function displayAugChart() {
   let ctx = document.getElementById('myChartAug').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.aug.categories)[0], Object.keys(monthData.aug.categories)[1], Object.keys(monthData.aug.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.aug.categories[Object.keys(monthData.aug.categories)[0]], monthData.aug.categories[Object.keys(monthData.aug.categories)[1]], monthData.aug.categories[Object.keys(monthData.aug.categories)[2]]]
         }]
      }
   });
   return augChart = newChart;
}

function displaySepChart() {
   let ctx = document.getElementById('myChartSep').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.sep.categories)[0], Object.keys(monthData.sep.categories)[1], Object.keys(monthData.sep.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.sep.categories[Object.keys(monthData.sep.categories)[0]], monthData.sep.categories[Object.keys(monthData.sep.categories)[1]], monthData.sep.categories[Object.keys(monthData.sep.categories)[2]]]
         }]
      }
   });
   return sepChart = newChart;
}

function displayOctChart() {
   let ctx = document.getElementById('myChartOct').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.oct.categories)[0], Object.keys(monthData.oct.categories)[1], Object.keys(monthData.oct.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.oct.categories[Object.keys(monthData.oct.categories)[0]], monthData.oct.categories[Object.keys(monthData.oct.categories)[1]], monthData.oct.categories[Object.keys(monthData.oct.categories)[2]]]
         }]
      }
   });
   return octChart = newChart;
}

function displayNovChart() {
   let ctx = document.getElementById('myChartNov').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.nov.categories)[0], Object.keys(monthData.nov.categories)[1], Object.keys(monthData.nov.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.nov.categories[Object.keys(monthData.nov.categories)[0]], monthData.nov.categories[Object.keys(monthData.nov.categories)[1]], monthData.nov.categories[Object.keys(monthData.nov.categories)[2]]]
         }]
      }
   });
   return novChart = newChart;
}

function displayDecChart() {
   let ctx = document.getElementById('myChartDec').getContext('2d');
   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.dec.categories)[0], Object.keys(monthData.dec.categories)[1], Object.keys(monthData.dec.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: ['rgb(30, 136, 15)', 'rgb(49, 98, 190)', 'rgb(158, 37, 148)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.dec.categories[Object.keys(monthData.dec.categories)[0]], monthData.dec.categories[Object.keys(monthData.dec.categories)[1]], monthData.dec.categories[Object.keys(monthData.dec.categories)[2]]]
         }]
      }
   });
   return decChart = newChart;
}

function destroyAllChart() {
   janChart.destroy();
   febChart.destroy();
   marChart.destroy();
   aprChart.destroy();
   mayChart.destroy();
   junChart.destroy();
   julChart.destroy();
   augChart.destroy();
   sepChart.destroy();
   octChart.destroy();
   novChart.destroy();
   decChart.destroy();
}
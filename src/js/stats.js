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

      // January chart
      // Step 1 - destroy previously made chart
      if (monthSelected.innerHTML == "January") {
         if (document.getElementById("myChartFeb")) {
            febChart.destroy();
            // also destroy canvas element from DOM
            let febCanvas = document.querySelector("#myChartFeb");
            febCanvas.parentElement.removeChild(febCanvas);
         } else if (document.getElementById("myChartMar")) {
            marChart.destroy();
            // also destroy canvas element from DOM
            let marCanvas = document.querySelector("#myChartMar");
            marCanvas.parentElement.removeChild(marCanvas);
         } else if (document.getElementById("myChartApr")) {
            aprChart.destroy();
            // also destroy canvas element from DOM
            let aprCanvas = document.querySelector("#myChartApr");
            aprCanvas.parentElement.removeChild(aprCanvas);
         }

         // Step 2 - if there is no canvas & chart for selected month - display it
         if (!document.getElementById("myChartJan")) {
            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "myChartJan");
            document.querySelector(".chartWrapper").appendChild(canvas);
            displayJanChart()
         }
      }

      // February chart
      // Step 1 - destroy previously made chart
      if (monthSelected.innerHTML == "February") {
         if (document.getElementById("myChartJan")) {
            janChart.destroy();
            // also destroy canvas element from DOM
            let janCanvas = document.querySelector("#myChartJan");
            janCanvas.parentElement.removeChild(janCanvas);
         } else if (document.getElementById("myChartMar")) {
            marChart.destroy();
            // also destroy canvas element from DOM
            let marCanvas = document.querySelector("#myChartMar");
            marCanvas.parentElement.removeChild(marCanvas);
         } else if (document.getElementById("myChartApr")) {
            aprChart.destroy();
            // also destroy canvas element from DOM
            let aprCanvas = document.querySelector("#myChartApr");
            aprCanvas.parentElement.removeChild(aprCanvas);
         }

         // Step 2 - if there is no canvas & chart for selected month - display it
         if (!document.getElementById("myChart")) {
            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "myChartFeb");
            document.querySelector(".chartWrapper").appendChild(canvas);
            displayFebChart()
         }
      }

      // March chart
      // Step 1 - destroy previously made chart
      if (monthSelected.innerHTML == "March") {
         if (document.getElementById("myChartJan")) {
            janChart.destroy();
            // also destroy canvas element from DOM
            let janCanvas = document.querySelector("#myChartJan");
            janCanvas.parentElement.removeChild(janCanvas);
         } else if (document.getElementById("myChartFeb")) {
            febChart.destroy();
            // also destroy canvas element from DOM
            let febCanvas = document.querySelector("#myChartFeb");
            febCanvas.parentElement.removeChild(febCanvas);
         } else if (document.getElementById("myChartApr")) {
            aprChart.destroy();
            // also destroy canvas element from DOM
            let aprCanvas = document.querySelector("#myChartApr");
            aprCanvas.parentElement.removeChild(aprCanvas);
         }

         // Step 2 - if there is no canvas & chart for selected month - display it
         if (!document.getElementById("myChartMar")) {
            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "myChartMar");
            document.querySelector(".chartWrapper").appendChild(canvas);
            displayMarChart()
         }
      }

      // April chart
      // Step 1 - destroy previously made chart
      if (monthSelected.innerHTML == "April") {
         if (document.getElementById("myChartJan")) {
            janChart.destroy();
            // also destroy canvas element from DOM
            let janCanvas = document.querySelector("#myChartJan");
            janCanvas.parentElement.removeChild(janCanvas);
         } else if (document.getElementById("myChartFeb")) {
            febChart.destroy();
            // also destroy canvas element from DOM
            let febCanvas = document.querySelector("#myChartFeb");
            febCanvas.parentElement.removeChild(febCanvas);
         } else if (document.getElementById("myChartMar")) {
            marChart.destroy();
            // also destroy canvas element from DOM
            let marCanvas = document.querySelector("#myChartMar");
            marCanvas.parentElement.removeChild(marCanvas);
         }

         // Step 2 - if there is no canvas & chart for selected month - display it
         if (!document.getElementById("myChartApr")) {
            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "myChartApr");
            document.querySelector(".chartWrapper").appendChild(canvas);
            displayAprChart()
         }
      }
   })
})

function displayJanChart() {
   let ctx = document.getElementById('myChartJan').getContext('2d');

   // Orange Gradient
   let orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
   orangeGradient.addColorStop(0, "#FD3F2F");
   orangeGradient.addColorStop(1, "#FACE15");

   // Blue Gradient
   let blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
   blueGradient.addColorStop(0, "#6956EC");
   blueGradient.addColorStop(1, "#56B2BA");

   // Pink Gradient
   let pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
   pinkGradient.addColorStop(0, "#8D4DE8");
   pinkGradient.addColorStop(1, "#FF2366");

   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.jan.categories)[0], Object.keys(monthData.jan.categories)[1], Object.keys(monthData.jan.categories)[2]],
         // labels: ["food", "transportation", "other"],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: [orangeGradient, blueGradient, pinkGradient],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.jan.categories[Object.keys(monthData.jan.categories)[0]], monthData.jan.categories[Object.keys(monthData.jan.categories)[1]], monthData.jan.categories[Object.keys(monthData.jan.categories)[2]]]
         }]
      }
   });
   return janChart = newChart;
}

function displayFebChart() {
   let ctx = document.getElementById('myChartFeb').getContext('2d');

   // Orange Gradient
   let orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
   orangeGradient.addColorStop(0, "#FD3F2F");
   orangeGradient.addColorStop(1, "#FACE15");

   // Blue Gradient
   let blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
   blueGradient.addColorStop(0, "#6956EC");
   blueGradient.addColorStop(1, "#56B2BA");

   // Pink Gradient
   let pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
   pinkGradient.addColorStop(0, "#8D4DE8");
   pinkGradient.addColorStop(1, "#FF2366");



   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.feb.categories)[0], Object.keys(monthData.feb.categories)[1], Object.keys(monthData.feb.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: [orangeGradient, blueGradient, pinkGradient],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.feb.categories[Object.keys(monthData.feb.categories)[0]], monthData.feb.categories[Object.keys(monthData.feb.categories)[1]], monthData.feb.categories[Object.keys(monthData.feb.categories)[2]]]
         }],
         options: {
            // responsive: false,
            maintainAspectRatio: false
         }
      }
   });
   return febChart = newChart;
}

function displayMarChart() {
   let ctx = document.getElementById('myChartMar').getContext('2d');
   
   // Orange Gradient
   let orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
   orangeGradient.addColorStop(0, "#FD3F2F");
   orangeGradient.addColorStop(1, "#FACE15");

   // Blue Gradient
   let blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
   blueGradient.addColorStop(0, "#6956EC");
   blueGradient.addColorStop(1, "#56B2BA");

   // Pink Gradient
   let pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
   pinkGradient.addColorStop(0, "#8D4DE8");
   pinkGradient.addColorStop(1, "#FF2366");

   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.mar.categories)[0], Object.keys(monthData.mar.categories)[1], Object.keys(monthData.mar.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: [orangeGradient, blueGradient, pinkGradient],
            borderColor: 'rgb(255, 255, 255)',
            data: [monthData.mar.categories[Object.keys(monthData.mar.categories)[0]], monthData.mar.categories[Object.keys(monthData.mar.categories)[1]], monthData.mar.categories[Object.keys(monthData.mar.categories)[2]]]
         }]
      }
   });
   return marChart = newChart;
}

function displayAprChart() {
   let ctx = document.getElementById('myChartApr').getContext('2d');
   
   // Orange Gradient
   let orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
   orangeGradient.addColorStop(0, "#FD3F2F");
   orangeGradient.addColorStop(1, "#FACE15");

   // Blue Gradient
   let blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
   blueGradient.addColorStop(0, "#6956EC");
   blueGradient.addColorStop(1, "#56B2BA");

   // Pink Gradient
   let pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
   pinkGradient.addColorStop(0, "#8D4DE8");
   pinkGradient.addColorStop(1, "#FF2366");

   let newChart = new Chart(ctx, {
      type: "pie",

      data: {
         labels: [Object.keys(monthData.apr.categories)[0], Object.keys(monthData.apr.categories)[1], Object.keys(monthData.apr.categories)[2]],
         datasets: [{
            label: "My expenses by category",
            backgroundColor: [orangeGradient, blueGradient, pinkGradient],
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

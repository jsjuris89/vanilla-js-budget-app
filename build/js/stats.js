"use strict";

// Get localstorage data
var data = JSON.parse(localStorage.getItem("Data"));
var monthData = JSON.parse(localStorage.getItem("MonthData")); // Custom Select Box for months

var monthSelected = document.querySelector(".selected.selected-month");
var monthOptionsContainer = document.querySelector(".options-container.options-container-month");
var monthOptionsList = document.querySelectorAll(".option.option-month");
monthSelected.addEventListener("click", function () {
  monthOptionsContainer.classList.toggle("active");
}); // When user selects a month ---> choose that month statistics (graph)

monthOptionsList.forEach(function (o) {
  o.addEventListener("click", function () {
    monthSelected.innerHTML = o.querySelector("label").innerHTML;
    monthOptionsContainer.classList.remove("active"); // January chart
    // Step 1 - destroy previously made chart

    if (monthSelected.innerHTML == "January") {
      if (document.getElementById("myChartFeb")) {
        febChart.destroy(); // also destroy canvas element from DOM

        var febCanvas = document.querySelector("#myChartFeb");
        febCanvas.parentElement.removeChild(febCanvas);
      } else if (document.getElementById("myChartMar")) {
        marChart.destroy(); // also destroy canvas element from DOM

        var marCanvas = document.querySelector("#myChartMar");
        marCanvas.parentElement.removeChild(marCanvas);
      } else if (document.getElementById("myChartApr")) {
        aprChart.destroy(); // also destroy canvas element from DOM

        var aprCanvas = document.querySelector("#myChartApr");
        aprCanvas.parentElement.removeChild(aprCanvas);
      } else if (document.getElementById("myChartMay")) {
        mayChart.destroy(); // also destroy canvas element from DOM

        var mayCanvas = document.querySelector("#myChartMay");
        mayCanvas.parentElement.removeChild(mayCanvas);
      } else if (document.getElementById("myChartJun")) {
        junChart.destroy(); // also destroy canvas element from DOM

        var junCanvas = document.querySelector("#myChartJun");
        junCanvas.parentElement.removeChild(junCanvas);
      } else if (document.getElementById("myChartJul")) {
        julChart.destroy(); // also destroy canvas element from DOM

        var julCanvas = document.querySelector("#myChartJul");
        julCanvas.parentElement.removeChild(julCanvas);
      } // Step 2 - create the chart


      if (!document.getElementById("myChartJan")) {
        var canvas = document.createElement("canvas");
        canvas.setAttribute("id", "myChartJan");
        document.querySelector(".chartWrapper").appendChild(canvas);
        displayJanChart();
      }
    } // February chart
    // Step 1 - destroy previously made chart


    if (monthSelected.innerHTML == "February") {
      if (document.getElementById("myChartJan")) {
        janChart.destroy(); // also destroy canvas element from DOM

        var janCanvas = document.querySelector("#myChartJan");
        janCanvas.parentElement.removeChild(janCanvas);
      } else if (document.getElementById("myChartMar")) {
        marChart.destroy(); // also destroy canvas element from DOM

        var _marCanvas = document.querySelector("#myChartMar");

        _marCanvas.parentElement.removeChild(_marCanvas);
      } else if (document.getElementById("myChartApr")) {
        aprChart.destroy(); // also destroy canvas element from DOM

        var _aprCanvas = document.querySelector("#myChartApr");

        _aprCanvas.parentElement.removeChild(_aprCanvas);
      } else if (document.getElementById("myChartMay")) {
        mayChart.destroy(); // also destroy canvas element from DOM

        var _mayCanvas = document.querySelector("#myChartMay");

        _mayCanvas.parentElement.removeChild(_mayCanvas);
      } else if (document.getElementById("myChartJun")) {
        junChart.destroy(); // also destroy canvas element from DOM

        var _junCanvas = document.querySelector("#myChartJun");

        _junCanvas.parentElement.removeChild(_junCanvas);
      } else if (document.getElementById("myChartJul")) {
        julChart.destroy(); // also destroy canvas element from DOM

        var _julCanvas = document.querySelector("#myChartJul");

        _julCanvas.parentElement.removeChild(_julCanvas);
      } // Step 2 - create the chart


      if (!document.getElementById("myChartFeb")) {
        var _canvas = document.createElement("canvas");

        _canvas.setAttribute("id", "myChartFeb");

        document.querySelector(".chartWrapper").appendChild(_canvas);
        displayFebChart();
      }
    } // March chart
    // Step 1 - destroy previously made chart


    if (monthSelected.innerHTML == "March") {
      if (document.getElementById("myChartJan")) {
        janChart.destroy(); // also destroy canvas element from DOM

        var _janCanvas = document.querySelector("#myChartJan");

        _janCanvas.parentElement.removeChild(_janCanvas);
      } else if (document.getElementById("myChartFeb")) {
        febChart.destroy(); // also destroy canvas element from DOM

        var _febCanvas = document.querySelector("#myChartFeb");

        _febCanvas.parentElement.removeChild(_febCanvas);
      } else if (document.getElementById("myChartApr")) {
        aprChart.destroy(); // also destroy canvas element from DOM

        var _aprCanvas2 = document.querySelector("#myChartApr");

        _aprCanvas2.parentElement.removeChild(_aprCanvas2);
      } else if (document.getElementById("myChartMay")) {
        mayChart.destroy(); // also destroy canvas element from DOM

        var _mayCanvas2 = document.querySelector("#myChartMay");

        _mayCanvas2.parentElement.removeChild(_mayCanvas2);
      } else if (document.getElementById("myChartJun")) {
        junChart.destroy(); // also destroy canvas element from DOM

        var _junCanvas2 = document.querySelector("#myChartJun");

        _junCanvas2.parentElement.removeChild(_junCanvas2);
      } else if (document.getElementById("myChartJul")) {
        julChart.destroy(); // also destroy canvas element from DOM

        var _julCanvas2 = document.querySelector("#myChartJul");

        _julCanvas2.parentElement.removeChild(_julCanvas2);
      } // Step 2 - create the chart


      if (!document.getElementById("myChartMar")) {
        var _canvas2 = document.createElement("canvas");

        _canvas2.setAttribute("id", "myChartMar");

        document.querySelector(".chartWrapper").appendChild(_canvas2);
        displayMarChart();
      }
    } // April chart
    // Step 1 - destroy previously made chart


    if (monthSelected.innerHTML == "April") {
      if (document.getElementById("myChartJan")) {
        janChart.destroy(); // also destroy canvas element from DOM

        var _janCanvas2 = document.querySelector("#myChartJan");

        _janCanvas2.parentElement.removeChild(_janCanvas2);
      } else if (document.getElementById("myChartFeb")) {
        febChart.destroy(); // also destroy canvas element from DOM

        var _febCanvas2 = document.querySelector("#myChartFeb");

        _febCanvas2.parentElement.removeChild(_febCanvas2);
      } else if (document.getElementById("myChartMar")) {
        marChart.destroy(); // also destroy canvas element from DOM

        var _marCanvas2 = document.querySelector("#myChartMar");

        _marCanvas2.parentElement.removeChild(_marCanvas2);
      } else if (document.getElementById("myChartMay")) {
        mayChart.destroy(); // also destroy canvas element from DOM

        var _mayCanvas3 = document.querySelector("#myChartMay");

        _mayCanvas3.parentElement.removeChild(_mayCanvas3);
      } else if (document.getElementById("myChartJun")) {
        junChart.destroy(); // also destroy canvas element from DOM

        var _junCanvas3 = document.querySelector("#myChartJun");

        _junCanvas3.parentElement.removeChild(_junCanvas3);
      } else if (document.getElementById("myChartJul")) {
        julChart.destroy(); // also destroy canvas element from DOM

        var _julCanvas3 = document.querySelector("#myChartJul");

        _julCanvas3.parentElement.removeChild(_julCanvas3);
      } // Step 2 - create the chart


      if (!document.getElementById("myChartApr")) {
        var _canvas3 = document.createElement("canvas");

        _canvas3.setAttribute("id", "myChartApr");

        document.querySelector(".chartWrapper").appendChild(_canvas3);
        displayAprChart();
      }
    } // May chart
    // Step 1 - destroy previously made chart


    if (monthSelected.innerHTML == "May") {
      if (document.getElementById("myChartJan")) {
        janChart.destroy(); // also destroy canvas element from DOM

        var _janCanvas3 = document.querySelector("#myChartJan");

        _janCanvas3.parentElement.removeChild(_janCanvas3);
      } else if (document.getElementById("myChartFeb")) {
        febChart.destroy(); // also destroy canvas element from DOM

        var _febCanvas3 = document.querySelector("#myChartFeb");

        _febCanvas3.parentElement.removeChild(_febCanvas3);
      } else if (document.getElementById("myChartMar")) {
        marChart.destroy(); // also destroy canvas element from DOM

        var _marCanvas3 = document.querySelector("#myChartMar");

        _marCanvas3.parentElement.removeChild(_marCanvas3);
      } else if (document.getElementById("myChartApr")) {
        aprChart.destroy(); // also destroy canvas element from DOM

        var _aprCanvas3 = document.querySelector("#myChartApr");

        _aprCanvas3.parentElement.removeChild(_aprCanvas3);
      } else if (document.getElementById("myChartJun")) {
        junChart.destroy(); // also destroy canvas element from DOM

        var _junCanvas4 = document.querySelector("#myChartJun");

        _junCanvas4.parentElement.removeChild(_junCanvas4);
      } else if (document.getElementById("myChartJul")) {
        julChart.destroy(); // also destroy canvas element from DOM

        var _julCanvas4 = document.querySelector("#myChartJul");

        _julCanvas4.parentElement.removeChild(_julCanvas4);
      } // Step 2 - create the chart


      if (!document.getElementById("myChartMay")) {
        var _canvas4 = document.createElement("canvas");

        _canvas4.setAttribute("id", "myChartMay");

        document.querySelector(".chartWrapper").appendChild(_canvas4);
        displayMayChart();
      }
    } // June chart
    // Step 1 - destroy previously made chart


    if (monthSelected.innerHTML == "June") {
      if (document.getElementById("myChartJan")) {
        janChart.destroy(); // also destroy canvas element from DOM

        var _janCanvas4 = document.querySelector("#myChartJan");

        _janCanvas4.parentElement.removeChild(_janCanvas4);
      } else if (document.getElementById("myChartFeb")) {
        febChart.destroy(); // also destroy canvas element from DOM

        var _febCanvas4 = document.querySelector("#myChartFeb");

        _febCanvas4.parentElement.removeChild(_febCanvas4);
      } else if (document.getElementById("myChartMar")) {
        marChart.destroy(); // also destroy canvas element from DOM

        var _marCanvas4 = document.querySelector("#myChartMar");

        _marCanvas4.parentElement.removeChild(_marCanvas4);
      } else if (document.getElementById("myChartApr")) {
        aprChart.destroy(); // also destroy canvas element from DOM

        var _aprCanvas4 = document.querySelector("#myChartApr");

        _aprCanvas4.parentElement.removeChild(_aprCanvas4);
      } else if (document.getElementById("myChartMay")) {
        mayChart.destroy(); // also destroy canvas element from DOM

        var _mayCanvas4 = document.querySelector("#myChartMay");

        _mayCanvas4.parentElement.removeChild(_mayCanvas4);
      } else if (document.getElementById("myChartJul")) {
        julChart.destroy(); // also destroy canvas element from DOM

        var _julCanvas5 = document.querySelector("#myChartJul");

        _julCanvas5.parentElement.removeChild(_julCanvas5);
      } // Step 2 - create the chart


      if (!document.getElementById("myChartJun")) {
        var _canvas5 = document.createElement("canvas");

        _canvas5.setAttribute("id", "myChartJun");

        document.querySelector(".chartWrapper").appendChild(_canvas5);
        displayJunChart();
      }
    } // July chart
    // Step 1 - destroy previously made chart


    if (monthSelected.innerHTML == "July") {
      if (document.getElementById("myChartJan")) {
        janChart.destroy(); // also destroy canvas element from DOM

        var _janCanvas5 = document.querySelector("#myChartJan");

        _janCanvas5.parentElement.removeChild(_janCanvas5);
      } else if (document.getElementById("myChartFeb")) {
        febChart.destroy(); // also destroy canvas element from DOM

        var _febCanvas5 = document.querySelector("#myChartFeb");

        _febCanvas5.parentElement.removeChild(_febCanvas5);
      } else if (document.getElementById("myChartMar")) {
        marChart.destroy(); // also destroy canvas element from DOM

        var _marCanvas5 = document.querySelector("#myChartMar");

        _marCanvas5.parentElement.removeChild(_marCanvas5);
      } else if (document.getElementById("myChartApr")) {
        aprChart.destroy(); // also destroy canvas element from DOM

        var _aprCanvas5 = document.querySelector("#myChartApr");

        _aprCanvas5.parentElement.removeChild(_aprCanvas5);
      } else if (document.getElementById("myChartMay")) {
        mayChart.destroy(); // also destroy canvas element from DOM

        var _mayCanvas5 = document.querySelector("#myChartMay");

        _mayCanvas5.parentElement.removeChild(_mayCanvas5);
      } else if (document.getElementById("myChartJun")) {
        junChart.destroy(); // also destroy canvas element from DOM

        var _junCanvas5 = document.querySelector("#myChartJun");

        _junCanvas5.parentElement.removeChild(_junCanvas5);
      } // Step 2 - create the chart


      if (!document.getElementById("myChartJul")) {
        var _canvas6 = document.createElement("canvas");

        _canvas6.setAttribute("id", "myChartJul");

        document.querySelector(".chartWrapper").appendChild(_canvas6);
        displayJulChart();
      }
    }
  });
}); // Chart.js plugin

Chart.plugins.register({
  afterDraw: function afterDraw(chart) {
    if (chart.data.datasets[0].data.every(function (item) {
      return item === 0;
    })) {
      var ctx = chart.chart.ctx;
      var width = chart.chart.width;
      var height = chart.chart.height;
      chart.clear();
      ctx.save();
      ctx.font = '50px serif';
      ctx.textAlign = 'center';
      ctx.fillText('No data to display', width / 2, height / 2);
      ctx.restore();
    }
  }
});

function displayJanChart() {
  var ctx = document.getElementById('myChartJan').getContext('2d'); // Orange Gradient

  var orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
  orangeGradient.addColorStop(0, "#FD3F2F");
  orangeGradient.addColorStop(1, "#FACE15"); // Blue Gradient

  var blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
  blueGradient.addColorStop(0, "#6956EC");
  blueGradient.addColorStop(1, "#56B2BA"); // Pink Gradient

  var pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
  pinkGradient.addColorStop(0, "#8D4DE8");
  pinkGradient.addColorStop(1, "#FF2366");
  var newChart = new Chart(ctx, {
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
  var ctx = document.getElementById('myChartFeb').getContext('2d'); // Orange Gradient

  var orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
  orangeGradient.addColorStop(0, "#FD3F2F");
  orangeGradient.addColorStop(1, "#FACE15"); // Blue Gradient

  var blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
  blueGradient.addColorStop(0, "#6956EC");
  blueGradient.addColorStop(1, "#56B2BA"); // Pink Gradient

  var pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
  pinkGradient.addColorStop(0, "#8D4DE8");
  pinkGradient.addColorStop(1, "#FF2366");
  var newChart = new Chart(ctx, {
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
        maintainAspectRatio: false
      }
    }
  });
  return febChart = newChart;
}

function displayMarChart() {
  var ctx = document.getElementById('myChartMar').getContext('2d'); // Orange Gradient

  var orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
  orangeGradient.addColorStop(0, "#FD3F2F");
  orangeGradient.addColorStop(1, "#FACE15"); // Blue Gradient

  var blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
  blueGradient.addColorStop(0, "#6956EC");
  blueGradient.addColorStop(1, "#56B2BA"); // Pink Gradient

  var pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
  pinkGradient.addColorStop(0, "#8D4DE8");
  pinkGradient.addColorStop(1, "#FF2366");
  var newChart = new Chart(ctx, {
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
  var ctx = document.getElementById('myChartApr').getContext('2d'); // Orange Gradient

  var orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
  orangeGradient.addColorStop(0, "#FD3F2F");
  orangeGradient.addColorStop(1, "#FACE15"); // Blue Gradient

  var blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
  blueGradient.addColorStop(0, "#6956EC");
  blueGradient.addColorStop(1, "#56B2BA"); // Pink Gradient

  var pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
  pinkGradient.addColorStop(0, "#8D4DE8");
  pinkGradient.addColorStop(1, "#FF2366");
  var newChart = new Chart(ctx, {
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
  var ctx = document.getElementById('myChartMay').getContext('2d'); // Orange Gradient

  var orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
  orangeGradient.addColorStop(0, "#FD3F2F");
  orangeGradient.addColorStop(1, "#FACE15"); // Blue Gradient

  var blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
  blueGradient.addColorStop(0, "#6956EC");
  blueGradient.addColorStop(1, "#56B2BA"); // Pink Gradient

  var pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
  pinkGradient.addColorStop(0, "#8D4DE8");
  pinkGradient.addColorStop(1, "#FF2366");
  var newChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: [Object.keys(monthData.may.categories)[0], Object.keys(monthData.may.categories)[1], Object.keys(monthData.may.categories)[2]],
      datasets: [{
        label: "My expenses by category",
        backgroundColor: [orangeGradient, blueGradient, pinkGradient],
        borderColor: 'rgb(255, 255, 255)',
        data: [monthData.may.categories[Object.keys(monthData.may.categories)[0]], monthData.may.categories[Object.keys(monthData.may.categories)[1]], monthData.may.categories[Object.keys(monthData.may.categories)[2]]]
      }]
    }
  });
  return mayChart = newChart;
}

function displayJunChart() {
  var ctx = document.getElementById('myChartJun').getContext('2d'); // Orange Gradient

  var orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
  orangeGradient.addColorStop(0, "#FD3F2F");
  orangeGradient.addColorStop(1, "#FACE15"); // Blue Gradient

  var blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
  blueGradient.addColorStop(0, "#6956EC");
  blueGradient.addColorStop(1, "#56B2BA"); // Pink Gradient

  var pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
  pinkGradient.addColorStop(0, "#8D4DE8");
  pinkGradient.addColorStop(1, "#FF2366");
  var newChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: [Object.keys(monthData.jun.categories)[0], Object.keys(monthData.jun.categories)[1], Object.keys(monthData.jun.categories)[2]],
      datasets: [{
        label: "My expenses by category",
        backgroundColor: [orangeGradient, blueGradient, pinkGradient],
        borderColor: 'rgb(255, 255, 255)',
        data: [monthData.jun.categories[Object.keys(monthData.jun.categories)[0]], monthData.jun.categories[Object.keys(monthData.jun.categories)[1]], monthData.jun.categories[Object.keys(monthData.jun.categories)[2]]]
      }]
    }
  });
  return junChart = newChart;
}

function displayJulChart() {
  var ctx = document.getElementById('myChartJul').getContext('2d'); // Orange Gradient

  var orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
  orangeGradient.addColorStop(0, "#FD3F2F");
  orangeGradient.addColorStop(1, "#FACE15"); // Blue Gradient

  var blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
  blueGradient.addColorStop(0, "#6956EC");
  blueGradient.addColorStop(1, "#56B2BA"); // Pink Gradient

  var pinkGradient = ctx.createLinearGradient(0, 0, 0, 300);
  pinkGradient.addColorStop(0, "#8D4DE8");
  pinkGradient.addColorStop(1, "#FF2366");
  var newChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: [Object.keys(monthData.jul.categories)[0], Object.keys(monthData.jul.categories)[1], Object.keys(monthData.jul.categories)[2]],
      datasets: [{
        label: "My expenses by category",
        backgroundColor: [orangeGradient, blueGradient, pinkGradient],
        borderColor: 'rgb(255, 255, 255)',
        data: [monthData.jul.categories[Object.keys(monthData.jul.categories)[0]], monthData.jul.categories[Object.keys(monthData.jul.categories)[1]], monthData.jul.categories[Object.keys(monthData.jul.categories)[2]]]
      }]
    }
  });
  return julChart = newChart;
}
//# sourceMappingURL=stats.js.map

// Create chart instance
var container = am4core.create("donutchart", am4core.Container);
container.width = am4core.percent(100);
container.height = am4core.percent(100);
container.layout = "horizontal";
// container.parent = pieSeries;
container.horizontalCenter = "middle";
// container.verticalCenter = "middle";
// container.width = am4core.percent(40) / Math.sqrt(2);
container.fill = "white";

var title = container.createChild(am4core.Label);
title.text = "Fig: Comparison of composition of STEM workforce by ethnicity and afterschool participants with STEM oppotunities by ethnicity";
title.fontWeight = 600;
title.marginBottom = 900;

function createChart(data) {
    var chart = container.createChild(am4charts.PieChart);
    chart.data = data;

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "ethnicGroup";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    chart.seriesContainer.zIndex = -1;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

    chart.innerRadius = am4core.percent(40);

    // var container = new am4core.Container();
    // container.parent = pieSeries;
    // container.horizontalCenter = "middle";
    // container.verticalCenter = "middle";
    // container.width = am4core.percent(40) / Math.sqrt(2);
    // container.fill = "white";

    // var label = new am4core.Label();
    // label.parent = container;
    // label.text = "SUM: ${values.value.sum}";
    // label.horizontalCenter = "middle";
    // label.verticalCenter = "middle";
    // label.fontSize = 30;

    // chart.events.on("sizechanged", function(ev) {
    // var scale = (pieSeries.pixelInnerRadius * 2) / label.bbox.width;
    // if (scale > 1) {
    //     scale = 1;
    // }
    // label.scale = scale;
    // })
}
    


    createChart([{
      "ethnicGroup": "White",
      "value": 57
    }, {
      "ethnicGroup": "African American/Black",
      "value": 25
    }, {
      "ethnicGroup": "Asian American",
      "value": 5
    }, {
      "ethnicGroup": "Hispanic/Latinx",
      "value": 24
    }, {
      "ethnicGroup": "Other",
      "value": 1
    }]);

    createChart([{
        "ethnicGroup": "White",
        "value": 67
      }, {
        "ethnicGroup": "African American/Black",
        "value": 9
      }, {
        "ethnicGroup": "Asian American",
        "value": 13
      }, {
        "ethnicGroup": "Hispanic/Latinx",
        "value": 8
      }, {
        "ethnicGroup": "Other",
        "value": 3
      }]);

// // Create chart instance
// var chart = am4core.create("donutchart", am4charts.PieChart);

// // Add data 1
// chart.data = [{
//   "country": "Lithuania",
//   "value": 501.9
// }, {
//   "country": "Czechia",
//   "value": 301.9
// }, {
//   "country": "Ireland",
//   "value": 201.1
// }, {
//   "country": "Germany",
//   "value": 165.8
// }, {
//   "country": "Australia",
//   "value": 139.9
// }, {
//   "country": "Austria",
//   "value": 128.3
// }];

// // Add and configure Series
// var pieSeries = chart.series.push(new am4charts.PieSeries());
// pieSeries.dataFields.value = "value";
// pieSeries.dataFields.category = "country";
// pieSeries.labels.template.disabled = true;
// pieSeries.ticks.template.disabled = true;

// chart.seriesContainer.zIndex = -1;

// chart.legend = new am4charts.Legend();
// chart.legend.position = "right";

// chart.innerRadius = am4core.percent(40);

// var container = new am4core.Container();
// container.parent = pieSeries;
// container.horizontalCenter = "middle";
// container.verticalCenter = "middle";
// container.width = am4core.percent(40) / Math.sqrt(2);
// container.fill = "white";

// var label = new am4core.Label();
// label.parent = container;
// label.text = "SUM: ${values.value.sum}";
// label.horizontalCenter = "middle";
// label.verticalCenter = "middle";
// label.fontSize = 30;

// chart.events.on("sizechanged", function(ev) {
//   var scale = (pieSeries.pixelInnerRadius * 2) / label.bbox.width;
//   if (scale > 1) {
//     scale = 1;
//   }
//   label.scale = scale;
// })







// // Create chart instance
// var container = am4core.create("donutchart", am4core.Container);
// container.width = am4core.percent(100);
// container.height = am4core.percent(100);
// container.layout = "horizontal";

// function createChart(data) {

//   // Create chart
//   var chart = container.createChild(am4charts.PieChart);

//   // Add data
//   chart.data = data;

//   // Add and configure Series
//   var pieSeries = chart.series.push(new am4charts.PieSeries());
//   pieSeries.dataFields.value = "litres";
//   pieSeries.dataFields.category = "country";
//   pieSeries.labels.template.disabled = true;
//   pieSeries.ticks.template.disabled = true;
  
// };

// createChart([{
//   "country": "Lithuania",
//   "litres": 501
// }, {
//   "country": "Czechia",
//   "litres": 301
// }, {
//   "country": "Ireland",
//   "litres": 201
// }, {
//   "country": "Germany",
//   "litres": 165
// }, {
//   "country": "Australia",
//   "litres": 139
// }, {
//   "country": "Austria",
//   "litres": 128
// }, {
//   "country": "UK",
//   "litres": 99
// }, {
//   "country": "Belgium",
//   "litres": 60
// }, {
//   "country": "The Netherlands",
//   "litres": 50
// }]);

// createChart([{
//   "country": "Lithuania",
//   "litres": 250
// }, {
//   "country": "Czechia",
//   "litres": 360
// }, {
//   "country": "Ireland",
//   "litres": 150
// }, {
//   "country": "Germany",
//   "litres": 200
// }]);

// createChart([{
//   "country": "Czechia",
//   "litres": 301
// }, {
//   "country": "Ireland",
//   "litres": 600
// }, {
//   "country": "Germany",
//   "litres": 240
// }, {
//   "country": "Austria",
//   "litres": 128
// }, {
//   "country": "UK",
//   "litres": 99
// }, {
//   "country": "Belgium",
//   "litres": 60
// }]);
vBarChartData = {
  "data1": [
  {
    "category": "STEM Occupations",
    "value1": 8
  },
  {
    "category": "Non-STEM Occupations",
    "value1": 3.4
  }
], "data2": [
  {
    "category": "STEM Occupations",
    "value1": 89780
  },{
    "category": "Non-STEM Occupations",
    "value1": 40020
  }
]}

var vChartDataName1 = "Projected Employment Change(2019-29)"
var vChartDataName2 = 'Median Annual Wage(2020)'

/* Create the chart */
var vBarChart = am4core.create("vBarChart", am4charts.XYChart);

vBarChart.data = vBarChartData.data1

/* Add legend */
vBarChart.legend = new am4charts.Legend();

/* Add category axis */
var categoryAxis = vBarChart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;

/* Add value axis */
var valueAxis = vBarChart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;

/* Add column series */
var series1 = vBarChart.series.push(new am4charts.ColumnSeries());
series1.tooltipText = "{name}: {value1}";
series1.name = vChartDataName1;
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value1";
series1.defaultState.transitionDuration = 10000;
series1.hiddenState.transitionDuration = 10000;

// /* Add line series */
// var series2 = vBarChart.series.push(new am4charts.ColumnSeries());
// series2.tooltipText = "{name}: {valueY.value}";
// series2.name = "Median annual wage, 2020";
// series2.dataFields.categoryX = "category";
// series2.dataFields.valueY = "value2";

/* Add chart cursor */
vBarChart.cursor = new am4charts.XYCursor();
vBarChart.cursor.xAxis = categoryAxis;
vBarChart.cursor.fullWidthLineX = true;
vBarChart.cursor.lineX.strokeWidth = 0;
vBarChart.cursor.lineX.fill = am4core.color("#8F3985");
vBarChart.cursor.lineX.fillOpacity = 0.1;

function selectVBarChartDataset(set) {
  vBarChart.data = vBarChartData[set];
  console.log(vBarChartData[set])
  if(set === 'data1'){
    series1.name = vChartDataName1
  }
  else{
    series1.name = vChartDataName2
  }
}


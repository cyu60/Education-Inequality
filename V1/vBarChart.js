/* Create the chart */
var chart = am4core.create("vBarChart", am4charts.XYChart);

/* Make automatic colors more distinctive by increasing steps */
chart.colors.step = 2;

/* Set data */
chart.data = [ {
  "category": "STEM Occupations",
  "value1": 8,
  "value2": 89780
}, {
  "category": "Non-STEM Occupations",
  "value1": 3.4,
  "value2": 40020
}];

/* Add legend */
chart.legend = new am4charts.Legend();

/* Add category axis */
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

/* Add value axis */
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

/* Add column series */
var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.tooltipText = "{name}: {valueY.value}";
series1.name = "Projected employment change 2019-29";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value1";
series1.defaultState.transitionDuration = 5000;
series1.hiddenState.transitionDuration = 5000;

/* Add line series */
var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.tooltipText = "{name}: {valueY.value}";
series2.name = "Median annual wage, 2020";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "value2";

/* Add chart cursor */
chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = categoryAxis;
chart.cursor.fullWidthLineX = true;
chart.cursor.lineX.strokeWidth = 0;
chart.cursor.lineX.fill = am4core.color("#8F3985");
chart.cursor.lineX.fillOpacity = 0.1;
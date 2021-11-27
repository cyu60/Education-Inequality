parentBarChart = {
  "Programs are too expensive": [
    {
      category: "2014",
      value1: 43,
    },
    {
      category: "2020",
      value1: 57,
    },
  ],
  "Transportation issues, no safe way to and from program": [
    {
      category: "2014",
      value1: 39,
    },
    {
      category: "2020",
      value1: 53,
    },
  ],
  "Lack of available programs": [
    {
      category: "2014",
      value1: 29,
    },
    {
      category: "2020",
      value1: 42,
    },
  ],
};

// var vChartDataName1 = "Projected Employment Change(2019-29)";
// var vChartDataName2 = "Median Annual Wage(2020)";

const createParentsBarChart = (titleText) => {
  /* Create the chart */
  var vBarChart = am4core.create("parentsChart", am4charts.XYChart);

  vBarChart.data = parentBarChart[titleText];

  // Add title
  var title = vBarChart.titles.create();
  title.text = `Change in ${
    parentBarChart[titleText][1]["value1"] -
    parentBarChart[titleText][0]["value1"]
  }% between 2014 and 2020`;
  // title.text = parentBarChart[titleText];
  title.fontSize = 25;
  title.marginBottom = 30;

  /* Add legend */
  // vBarChart.legend = new am4charts.Legend();

  /* Add category axis */
  var categoryAxis = vBarChart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.location = 0;

  /* Add value axis */
  var valueAxis = vBarChart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;

  /* Add column series */
  var series1 = vBarChart.series.push(new am4charts.ColumnSeries());
  series1.tooltipText = "{value1}%";
  // series1.tooltipText = "{name}: {value1}%";
  // series1.name = vChartDataName1;
  // series1.name = vChartDataName1;
  series1.dataFields.categoryX = "category";
  series1.dataFields.valueY = "value1";
  // series1.defaultState.transitionDuration = 10000;
  // series1.hiddenState.transitionDuration = 10000;

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
};

function selectParentsChartDataset(option) {
  createParentsBarChart(option);
  // vBarChart.data = parentBarChart[set];
  // console.log(parentBarChart[set]);
  // if (set === "data1") {
  //   series1.name = vChartDataName1;
  // } else {
  //   series1.name = vChartDataName2;
  // }
}

createParentsBarChart("Programs are too expensive");

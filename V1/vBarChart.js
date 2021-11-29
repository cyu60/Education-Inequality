
vBarChartData = {
  "Projected Employment Change(2019-29)": [
    {
      category: "STEM Occupations",
      value1: 8,
    },
    {
      category: "Non-STEM Occupations",
      value1: 3.4,
    },
  ],
  "Median Annual Wage(2020)": [
    {
      category: "STEM Occupations",
      value1: 89780,
    },
    {
      category: "Non-STEM Occupations",
      value1: 40020,
    },
  ]
};

const createvBarChart = (titleText) => {
  /* Create the chart */
  var vBarChart = am4core.create("vBarChart", am4charts.XYChart);

  vBarChart.data = vBarChartData[titleText];

  // Add title
  var title = vBarChart.titles.create();
  if(titleText === 'Projected Employment Change(2019-29)'){
    title.text = `Difference of ${
      vBarChartData[titleText][0]["value1"] -
      vBarChartData[titleText][1]["value1"]
    }% between STEM and Non-STEM Occupations`;
  }
  else if (titleText === 'Median Annual Wage(2020)'){
    title.text = `Difference of \$${
      vBarChartData[titleText][0]["value1"] -
      vBarChartData[titleText][1]["value1"]
    } in Annual Wage between \n STEM and Non-STEM Occupations`;
  }
  title.fontSize = 25;
  title.marginBottom = 30;

  /* Add category axis */
  var categoryAxis = vBarChart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.location = 0;

  /* Add value axis */
  var valueAxis = vBarChart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;

  /* Add column series */
  var series1 = vBarChart.series.push(new am4charts.ColumnSeries());
  if(titleText === 'Projected Employment Change(2019-29)'){
    series1.tooltipText = "{value1}%";
  }
  else{
    series1.tooltipText = "${value1}";
  }

  series1.dataFields.categoryX = "category";
  series1.dataFields.valueY = "value1";
  series1.defaultState.transitionDuration = 5000;
  series1.hiddenState.transitionDuration = 5000;

  /* Add chart cursor */
  vBarChart.cursor = new am4charts.XYCursor();
  vBarChart.cursor.xAxis = categoryAxis;
  vBarChart.cursor.fullWidthLineX = true;
  vBarChart.cursor.lineX.strokeWidth = 0;
  vBarChart.cursor.lineX.fill = am4core.color("#8F3985");
  vBarChart.cursor.lineX.fillOpacity = 0.1;
};

function selectVBarChartDataset(option) {
  createvBarChart(option);
  console.log(option)
}

createvBarChart("Projected Employment Change(2019-29)");

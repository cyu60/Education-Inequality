//init data 
var donutChartData = { "data1": [{
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
      }],
      "data2": [{
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
      }]
    }

  var donutChartTitle1 = "Availability of Afterschool STEM Learning Opportunities by Ethnicity"
  var donutChartTitle2 = "STEM Jobs by Race and Ethnicity"

// Create chart instance
var donutChart = am4core.create("donutchart", am4charts.PieChart);

// Add data
donutChart.data = donutChartData.data1

// Add and configure Series
var pieSeries = donutChart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "value";
pieSeries.dataFields.category = "ethnicGroup";
pieSeries.ticks.template.disabled = true;

pieSeries.alignLabels = false;
pieSeries.labels.template.text = "{value.value}%";
pieSeries.labels.template.radius = am4core.percent(-40);
pieSeries.labels.template.fill = am4core.color("white");

pieSeries.labels.template.adapter.add("radius", function(radius, target) {
  if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
    return 0;
  }
  return radius;
});

pieSeries.labels.template.adapter.add("fill", function(color, target) {
  if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
    return am4core.color("#000");
  }
  return color;
});

donutChart.legend = new am4charts.Legend();
donutChart.legend.valueLabels.template.disabled = true;

var donutChartLabel = donutChart.chartContainer.createChild(am4core.Label);
donutChartLabel.text = donutChartTitle1;
donutChartLabel.align = "center";

function selectDonutChartDataset(set) {
  donutChart.data = donutChartData[set];
  if(set === 'data1'){
    donutChartLabel.text = donutChartTitle1
  }
  else{
    donutChartLabel.text = donutChartTitle2
  }
}

am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("hzbarchart", am4charts.XYChart);

chart.responsive.enabled = true;

// Create Title
var title = chart.titles.create();
title.text = "In a study by the PEAR institute of 160 afterschool STEM programs serving 1,600 students across 11 states:";
title.fontSize = 15;
title.marginBottom = 10;

// Add data
chart.data = [{
  "description": "STEM career knowledge increased because of students' afterschool experience",
  "value": '80%'
}, {
  "description": "Had more postive attitude about STEM because of students' afterschool experience",
  "value": '78%'
}, {
  "description": "Had more postive STEM identity because of students' afterschool experience",
  "value": '73%'
}, {
  "description": "Perserverance and critical thinking skills increased because of students' afterschool experience",
  "value": '72%'
}];

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "description";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.labels.template.disabled = true;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;

// valueAxis.renderer.grid.template.strokeWidth = 0;
// categoryAxis.renderer.grid.template.strokeWidth = 0;
valueAxis.renderer.grid.template.disabled = true;
// categoryAxis.renderer.grid.template.disabled = true;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueX = "value";
series.dataFields.categoryY = "description";
series.defaultState.transitionDuration = 10000;

var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{value}";
valueLabel.label.fontSize = 15;
valueLabel.label.horizontalCenter = "left";
valueLabel.label.dx = 10;

var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
categoryLabel.label.text = "{description}";
categoryLabel.label.fontSize = 15;
categoryLabel.label.horizontalCenter = "right";
categoryLabel.label.dx = -10;
categoryLabel.label.fill = am4core.color("#fff");

chart.maskBullets = false;
chart.paddingRight = 30;
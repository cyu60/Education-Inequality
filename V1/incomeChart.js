const createChart = (tagId, lowIncome, highIncome, titleText) => {
    

  const lowIncomeColor = am4core.color("#7D7C84");
  const highIncomeColor = am4core.color("#2D93AD");

  // Set theme
  am4core.useTheme(am4themes_animated);

  // Create chart
  var chart = am4core.create(tagId, am4charts.GaugeChart);

  // Create axis
  var axis = chart.xAxes.push(new am4charts.ValueAxis());
  axis.min = 0;
  axis.max = 100;
  axis.strictMinMax = true;

  // Set inner radius
  chart.innerRadius = -20;

  // Add legend
  var legend = new am4charts.Legend();
  legend.isMeasured = false;
  legend.y = am4core.percent(105);
  legend.verticalCenter = "bottom";
  legend.parent = chart.chartContainer;
  legend.data = [
    {
      name: "% of lowest income access",
      fill: lowIncomeColor,
    },
    {
      name: "% of highest income access",
      fill: highIncomeColor,
    },
  ];

  // Add title
  var title = chart.titles.create();
  title.text = titleText;
  title.fontSize = 25;
  title.marginBottom = 30;

  var labelList = new am4core.ListTemplate(new am4core.Label());
  labelList.template.isMeasured = false;
  labelList.template.background.strokeWidth = 2;
  labelList.template.fontSize = 25;
  labelList.template.padding(5, 5, 5, 5);
  labelList.template.y = am4core.percent(80);
  labelList.template.horizontalCenter = "middle";

  var lowIncomeLabel = labelList.create();
  lowIncomeLabel.parent = chart.chartContainer;
  lowIncomeLabel.x = am4core.percent(40);
  lowIncomeLabel.background.stroke = lowIncomeColor;
  lowIncomeLabel.fill = lowIncomeColor;
  lowIncomeLabel.text = lowIncome + "%";

  var highIncomeLabel = labelList.create();
  highIncomeLabel.parent = chart.chartContainer;
  highIncomeLabel.x = am4core.percent(60);
  highIncomeLabel.background.stroke = highIncomeColor;
  highIncomeLabel.fill = highIncomeColor;
  highIncomeLabel.text = highIncome + "%";

  // Add ranges
  var colorSet = new am4core.ColorSet();

  var range = axis.axisRanges.create();
  range.value = 0;
  range.endValue = 25;
  range.axisFill.fillOpacity = 1;
  range.axisFill.fill = colorSet.getIndex(0);
  // range.axisFill.fill = am4core.color("#88AB75");
  range.axisFill.zIndex = -1;

  var range2 = axis.axisRanges.create();
  range2.value = 25;
  range2.endValue = 50;
  range2.axisFill.fillOpacity = 1;
  range2.axisFill.fill = colorSet.getIndex(1);
  range2.axisFill.zIndex = -1;

  var range3 = axis.axisRanges.create();
  range3.value = 50;
  range3.endValue = 75;
  range3.axisFill.fillOpacity = 1;
  range3.axisFill.fill = colorSet.getIndex(2);
  range3.axisFill.zIndex = -1;

  var range4 = axis.axisRanges.create();
  range4.value = 75;
  range4.endValue = 100;
  range4.axisFill.fillOpacity = 1;
  range4.axisFill.fill = colorSet.getIndex(3);
  range4.axisFill.zIndex = -1;

  // Add hand
  var highIncomehand = chart.hands.push(new am4charts.ClockHand());
  highIncomehand.value = highIncome;
  highIncomehand.pin.disabled = true;
  highIncomehand.fill = am4core.color("#2D93AD");
  highIncomehand.stroke = am4core.color("#2D93AD");
  highIncomehand.innerRadius = am4core.percent(50);
  highIncomehand.radius = am4core.percent(80);
  highIncomehand.startWidth = 15;

  var lowIncomeHand = chart.hands.push(new am4charts.ClockHand());
  lowIncomeHand.value = lowIncome;
  lowIncomeHand.pin.disabled = true;
  lowIncomeHand.fill = am4core.color("#7D7C84");
  lowIncomeHand.stroke = am4core.color("#7D7C84");
  lowIncomeHand.innerRadius = am4core.percent(50);
  lowIncomeHand.radius = am4core.percent(80);
  lowIncomeHand.startWidth = 15;
//   const listOfData = [
//     { lowIncome: 27, highIncome: 44, title: "Technology and engineering" },
//     { lowIncome: 43, highIncome: 57, title: "Science learning" },
//     { lowIncome: 33, highIncome: 48, title: "Computer Science" },
//     { lowIncome: 65, highIncome: 65, title: "Math activities" },
//   ];

//   // Animate
//   setInterval(function () {
//     const randomData =
//       listOfData[Math.floor(Math.random() * listOfData.length)];
//       console.log(randomData);
//     lowIncomeHand.showValue(randomData[lowIncome], 1000, am4core.ease.cubicOut);
//     highIncomehand.showValue(randomData[highIncome], 1000, am4core.ease.cubicOut);
//     title.text = randomData[title];
//   }, 3000);
};
// Create a map for titles
const data = {
    "Technology and engineering": { lowIncome: 27, highIncome: 44 },
    "Science learning": { lowIncome: 43, highIncome: 57},
    "Computer Science": { lowIncome: 33, highIncome: 48},
    "Math activities": { lowIncome: 65, highIncome: 65},
}

const selectIncomeChartDataset = (option) => {  
    console.log("change" + option)
    createChart("incomeChart", data[option]['lowIncome'], data[option]['highIncome'], option);
}

selectIncomeChartDataset("Technology and engineering");
// createChart("incomeChart", 27, 44, "Technology and engineering");
// createChart("incomeChartScienceLearning", 43, 57, "Science Learning");
// createChart("incomeChartCS", 33, 48, "Computer Science");
// createChart("incomeChartMath", 65, 65, "Math Activities");

//  am4core.useTheme(am4themes_animated);

//  var chart = am4core.create("incomeChart", am4charts.PieChart3D);
//  chart.hiddenState.properties.opacity = 1; // this creates initial fade-in

//  chart.data = [
//    {
//      incomeLevel: "High Income",
//      percentage: 44,
//      color: am4core.color("#ED1C24")

//     },
//     {
//         incomeLevel: "High Income",
//         percentage: 56,
//         color: am4core.color("#FFFFFF")
//    },
// //    {
// //      incomeLevel: "Ireland",
// //      percentage: 201.1
// //    },
// //    {
// //      incomeLevel: "Germany",
// //      percentage: 165.8
// //    },
// //    {
// //      incomeLevel: "Australia",
// //      percentage: 139.9
// //    },
// //    {
// //      incomeLevel: "Austria",
// //      percentage: 128.3
// //    }
//  ];

//  chart.innerRadius = am4core.percent(60);
//  chart.depth = 50;

//  chart.legend = new am4charts.Legend();
//  chart.legend.position = "right";

//  var series = chart.series.push(new am4charts.PieSeries3D());
//  series.dataFields.value = "percentage";
//  series.dataFields.depthValue = "percentage";
//  series.dataFields.category = "incomeLevel";
// series.slices.template.propertyFields.fill = "color";
// series.dataFields.tooltipText = "{percentage}";

//  series.slices.template.cornerRadius = 5;
//  series.colors.step = 3;

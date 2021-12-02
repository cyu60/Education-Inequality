
// Theme
am4core.useTheme(am4themes_animated);

 // Create map instance
var chartmap = am4core.create("usamap", am4maps.MapChart);

// Set map definition
chartmap.geodata = am4geodata_usaLow;

// Set projection
chartmap.projection = new am4maps.projections.AlbersUsa();

// Create map polygon series
var polygonSeries_map = chartmap.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries_map.heatRules.push({
    property: "fill",
    target: polygonSeries_map.mapPolygons.template,
    min: chartmap.colors.getIndex(1).brighten(1),
    max: chartmap.colors.getIndex(1).brighten(-0.3),
    logarithmic: true
  });

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries_map.useGeodata = true;

// Set heatmap values for each state
polygonSeries_map.data = [
  {
    id: "US-AL",
    value: 0.169161,
    imgSrc: "img4StatesOnHover/AL.png"
  },
  {
    id: "US-AK",
    value: 0.0119414,
    imgSrc: "img4StatesOnHover/AK.png"
  },
  {
    id: "US-AZ",
    value: 0.016188,
    imgSrc: "img4StatesOnHover/AZ.png"
  },
  {
    id: "US-AR",
    value: 0.142818,
    imgSrc: "img4StatesOnHover/AR.png"
  },
  {
    id: "US-CA",
    value: 0.659709,
    imgSrc: "img4StatesOnHover/CA.png"
  },
  {
    id: "US-CO",
    value: 0.214338,
    imgSrc: "img4StatesOnHover/CO.png"
  },
  {
    id: "US-CT",
    value: 0.1816,
    imgSrc: "img4StatesOnHover/CT.png"
  },
  {
    id: "US-DE",
    value: 0.03062,
    imgSrc: "img4StatesOnHover/DE.png"
  },
  {
    id: "US-FL",
    value: 0.33902,
    imgSrc: "img4StatesOnHover/FL.png"
  },
  {
    id: "US-GA",
    value: 0.579002,
    imgSrc: "img4StatesOnHover/GA.png"
  },
  {
    id: "US-HI",
    value: 0.04042,
    imgSrc: "img4StatesOnHover/HI.png"
  },
  {
    id: "US-ID",
    value: 0.059501,
    imgSrc: "img4StatesOnHover/ID.png"
  },
  {
    id: "US-IL",
    value: 0.579864,
    imgSrc: "img4StatesOnHover/IL.png"
  },
  {
    id: "US-IN",
    value: 0.476732,
    imgSrc: "img4StatesOnHover/IN.png"
  },
  {
    id: "US-IA",
    value: 0.410138,
    imgSrc: "img4StatesOnHover/IA.png"
  },
  {
    id: "US-KS",
    value: 0.239929,
    imgSrc: "img4StatesOnHover/KS.png"
  },
  {
    id: "US-KY",
    value: 0.334105,
    imgSrc: "img4StatesOnHover/KY.png"
  },
  {
    id: "US-LA",
    value: 0.28476,
    imgSrc: "img4StatesOnHover/LA.png"
  },
  {
    id: "US-ME",
    value: 0.124914,
    imgSrc: "img4StatesOnHover/ME.png"
  },
  {
    id: "US-MD",
    value: 0.34297,
    imgSrc: "img4StatesOnHover/MD.png"
  },
  {
    id: "US-MA",
    value: 0.5947,
    imgSrc: "img4StatesOnHover/MA.png"
  },
  {
    id: "US-MI",
    value: 0.475958,
    imgSrc: "img4StatesOnHover/MI.png"
  },
  {
    id: "US-MN",
    value: 0.299591,
    imgSrc: "img4StatesOnHover/MN.png"
  },
  {
    id: "US-MS",
    value: 0.171358,
    imgSrc: "img4StatesOnHover/MS.png"
  },
  {
    id: "US-MO",
    value: 0.396482,
    imgSrc: "img4StatesOnHover/MO.png"
  },
  {
    id: "US-MT",
    value: 0.0251236,
    imgSrc: "img4StatesOnHover/MT.png"
  },
  {
    id: "US-NE",
    value: 0.1984098,
    imgSrc: "img4StatesOnHover/NE.png"
  },
  {
    id: "US-NV",
    value: 0.0140029,
    imgSrc: "img4StatesOnHover/NV.png"
  },
  {
    id: "US-NH",
    value: 0.12998,
    imgSrc: "img4StatesOnHover/NH.png"
  },
  {
    id: "US-NJ",
    value: 0.91235,
    imgSrc: "img4StatesOnHover/NJ.png"
  },
  {
    id: "US-NM",
    value: 0.040032,
    imgSrc: "img4StatesOnHover/NM.png"
  },
  {
    id: "US-NY",
    value: 2.8456,
    imgSrc: "img4StatesOnHover/NY.png"
  },
  {
    id: "US-NC",
    value: 0.39575,
    imgSrc: "img4StatesOnHover/NC.png"
  },
  {
    id: "US-ND",
    value: 0.030456,
    imgSrc: "img4StatesOnHover/ND.png"
  },
  {
    id: "US-OH",
    value: 0.716751,
    imgSrc: "img4StatesOnHover/OH.png"
  },
  {
    id: "US-OK",
    value: 0.12781,
    imgSrc: "img4StatesOnHover/OK.png"
  },
  {
    id: "US-OR",
    value: 0.0927939,
    imgSrc: "img4StatesOnHover/OR.png"
  },
  {
    id: "US-PA",
    value: 0.639301,
    imgSrc: "img4StatesOnHover/PA.png"
  },
  {
    id: "US-RI",
    value: 0.196,
    imgSrc: "img4StatesOnHover/RI.png"
  },
  {
    id: "US-SC",
    value: 0.135111,
    imgSrc: "img4StatesOnHover/SC.png"
  },
  {
    id: "US-SD",
    value: 0.069228,
    imgSrc: "img4StatesOnHover/SD.png"
  },
  {
    id: "US-TN",
    value: 0.296584,
    imgSrc: "img4StatesOnHover/TN.png"
  },
  {
    id: "US-TX",
    value: 0.466493,
    imgSrc: "img4StatesOnHover/TX.png"
  },
  {
    id: "US-UT",
    value: 0.0551818,
    imgSrc: "img4StatesOnHover/UT.png"
  },
  {
    id: "US-VT",
    value: 0.13098,
    imgSrc: "img4StatesOnHover/VT.png"
  },
  {
    id: "US-VA",
    value: 2.921396,
    imgSrc: "img4StatesOnHover/VA.png"
  },
  {
    id: "US-WA",
    value: 0.134761,
    imgSrc: "img4StatesOnHover/WA.png"
  },
  {
    id: "US-WV",
    value: 0.198766,
    imgSrc: "img4StatesOnHover/WV.png"
  },
  {
    id: "US-WI",
    value: 0.358436,
    imgSrc: "img4StatesOnHover/WI.png"
  },
  {
    id: "US-WY",
    value: 0.010363,
    imgSrc: "img4StatesOnHover/WY.png"
  }
];

// Set up heat legend
let heatLegend = chartmap.createChild(am4maps.HeatLegend);
heatLegend.series = polygonSeries_map;
heatLegend.align = "right";
heatLegend.valign = "bottom";
heatLegend.height = am4core.percent(80);
heatLegend.orientation = "vertical";
heatLegend.valign = "middle";
heatLegend.marginRight = am4core.percent(4);
heatLegend.valueAxis.renderer.opposite = true;
heatLegend.valueAxis.renderer.dx = - 25;
heatLegend.valueAxis.strictMinMax = false;
heatLegend.valueAxis.fontSize = 9;
heatLegend.valueAxis.logarithmic = true;

// Configure series tooltip
var polygonTemplate = polygonSeries_map.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: \n ILI Density: {value}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#3c5bdc");

//Add label
// var clabel = chartmap.createChild(am4core.Label);
// //label.isMeasured = false; //uncomment to make the label not adjust the rest of the chart elements to accommodate its placement
// clabel.fontSize = 16;
// clabel.x = am4core.percent(100);
// clabel.horizontalCenter = "middle";
// clabel.verticalCenter = "bottom";
// clabel.align = "center";
// clabel.html = "<ul><li>List item 1</li><li>List item 2</li></ul>";
// clabel.toBack();

var label = chartmap.createChild(am4core.Label);
label.html = "<a href='https://www.science.org/doi/10.1126/sciadv.abb3819#supplementary-materials'>Data Source</a>";
label.fontSize = 20;
//label.align = "center";
// clabel.horizontalCenter = "bottom";
// clabel.verticalCenter = "bottom";
label.x = 130;
label.y = 10;
label.toBack();

// heat legend behavior
polygonSeries_map.mapPolygons.template.events.on("over", function (event) {
  handleHover(event.target);
})

polygonSeries_map.mapPolygons.template.events.on("hit", function (event) {
  handleHover(event.target);
})

function handleHover(column) {
  if (!isNaN(column.dataItem.value)) {
    heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
  }
  else {
    heatLegend.valueAxis.hideTooltip();
  }
}

polygonSeries_map.mapPolygons.template.events.on("out", function (event) {
  heatLegend.valueAxis.hideTooltip();
})

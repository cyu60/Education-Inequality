// Theme
am4core.useTheme(am4themes_animated);

 // Create map instance
var chart = am4core.create("usmap2", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_usaLow;

// Set projection
chart.projection = new am4maps.projections.AlbersUsa();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  // min: chart.colors.getIndex(1).brighten(1),
  // max: chart.colors.getIndex(1).brighten(-0.3),
  "min": am4core.color("#f1bad2"),
  "max": am4core.color("#9a295b"),
  logarithmic: true
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set heatmap values for each state
polygonSeries.data = [
  {
    id: "US-AL",
    value: 444710,
    imgSrc: "img4StatesOnHover/AL.png"
  },
  {
    id: "US-AK",
    value: 626932,
    imgSrc: "img4StatesOnHover/AK.png"
  },
  {
    id: "US-AZ",
    value: 5130632,
    imgSrc: "img4StatesOnHover/AZ.png"
  },
  {
    id: "US-AR",
    value: 2673400,
    imgSrc: "img4StatesOnHover/AR.png"
  },
  {
    id: "US-CA",
    value: 33871648,
    imgSrc: "img4StatesOnHover/CA.png"
  },
  {
    id: "US-CO",
    value: 4301261,
    imgSrc: "img4StatesOnHover/CO.png"
  },
  {
    id: "US-CT",
    value: 3405565,
    imgSrc: "img4StatesOnHover/CT.png"
  },
  {
    id: "US-DE",
    value: 783600,
    imgSrc: "img4StatesOnHover/DE.png"
  },
  {
    id: "US-FL",
    value: 15982378,
    imgSrc: "img4StatesOnHover/FL.png"
  },
  {
    id: "US-GA",
    value: 8186453,
    imgSrc: "img4StatesOnHover/GA.png"
  },
  {
    id: "US-HI",
    value: 1211537,
    imgSrc: "img4StatesOnHover/HI.png"
  },
  {
    id: "US-ID",
    value: 1293953,
    imgSrc: "img4StatesOnHover/ID.png"
  },
  {
    id: "US-IL",
    value: 12419293,
    imgSrc: "img4StatesOnHover/IL.png"
  },
  {
    id: "US-IN",
    value: 6080485,
    imgSrc: "img4StatesOnHover/IN.png"
  },
  {
    id: "US-IA",
    value: 2926324,
    imgSrc: "img4StatesOnHover/IA.png"
  },
  {
    id: "US-KS",
    value: 2688418,
    imgSrc: "img4StatesOnHover/KS.png"
  },
  {
    id: "US-KY",
    value: 4041769,
    imgSrc: "img4StatesOnHover/KY.png"
  },
  {
    id: "US-LA",
    value: 4468976,
    imgSrc: "img4StatesOnHover/LA.png"
  },
  {
    id: "US-ME",
    value: 1274923,
    imgSrc: "img4StatesOnHover/ME.png"
  },
  {
    id: "US-MD",
    value: 5296486,
    imgSrc: "img4StatesOnHover/MD.png"
  },
  {
    id: "US-MA",
    value: 6349097,
    imgSrc: "img4StatesOnHover/MA.png"
  },
  {
    id: "US-MI",
    value: 9938444,
    imgSrc: "img4StatesOnHover/MI.png"
  },
  {
    id: "US-MN",
    value: 4919479,
    imgSrc: "img4StatesOnHover/MN.png"
  },
  {
    id: "US-MS",
    value: 2844658,
    imgSrc: "img4StatesOnHover/MS.png"
  },
  {
    id: "US-MO",
    value: 5595211,
    imgSrc: "img4StatesOnHover/MO.png"
  },
  {
    id: "US-MT",
    value: 902195,
    imgSrc: "img4StatesOnHover/MT.png"
  },
  {
    id: "US-NE",
    value: 1711263,
    imgSrc: "img4StatesOnHover/NE.png"
  },
  {
    id: "US-NV",
    value: 1998257,
    imgSrc: "img4StatesOnHover/NV.png"
  },
  {
    id: "US-NH",
    value: 1235786,
    imgSrc: "img4StatesOnHover/NH.png"
  },
  {
    id: "US-NJ",
    value: 8414350,
    imgSrc: "img4StatesOnHover/NJ.png"
  },
  {
    id: "US-NM",
    value: 1819046,
    imgSrc: "img4StatesOnHover/NM.png"
  },
  {
    id: "US-NY",
    value: 18976457,
    imgSrc: "img4StatesOnHover/NY.png"
  },
  {
    id: "US-NC",
    value: 8049313,
    imgSrc: "img4StatesOnHover/NC.png"
  },
  {
    id: "US-ND",
    value: 642200,
    imgSrc: "img4StatesOnHover/ND.png"
  },
  {
    id: "US-OH",
    value: 11353140,
    imgSrc: "img4StatesOnHover/OH.png"
  },
  {
    id: "US-OK",
    value: 3450654,
    imgSrc: "img4StatesOnHover/OK.png"
  },
  {
    id: "US-OR",
    value: 3421399,
    imgSrc: "img4StatesOnHover/OR.png"
  },
  {
    id: "US-PA",
    value: 12281054,
    imgSrc: "img4StatesOnHover/PA.png"
  },
  {
    id: "US-RI",
    value: 1048319,
    imgSrc: "img4StatesOnHover/RI.png"
  },
  {
    id: "US-SC",
    value: 4012012,
    imgSrc: "img4StatesOnHover/SC.png"
  },
  {
    id: "US-SD",
    value: 754844,
    imgSrc: "img4StatesOnHover/SD.png"
  },
  {
    id: "US-TN",
    value: 5689283,
    imgSrc: "img4StatesOnHover/TN.png"
  },
  {
    id: "US-TX",
    value: 20851820,
    imgSrc: "img4StatesOnHover/TX.png"
  },
  {
    id: "US-UT",
    value: 2233169,
    imgSrc: "img4StatesOnHover/UT.png"
  },
  {
    id: "US-VT",
    value: 608827,
    imgSrc: "img4StatesOnHover/VT.png"
  },
  {
    id: "US-VA",
    value: 7078515,
    imgSrc: "img4StatesOnHover/VA.png"
  },
  {
    id: "US-WA",
    value: 5894121,
    imgSrc: "img4StatesOnHover/WA.png"
  },
  {
    id: "US-WV",
    value: 1808344,
    imgSrc: "img4StatesOnHover/WV.png"
  },
  {
    id: "US-WI",
    value: 5363675,
    imgSrc: "img4StatesOnHover/WI.png"
  },
  {
    id: "US-WY",
    value: 493782,
    imgSrc: "img4StatesOnHover/WY.png"
  }
];

// // Set up heat legend
// let heatLegend = chart.createChild(am4maps.HeatLegend);
// heatLegend.series = polygonSeries;
// heatLegend.align = "right";
// heatLegend.valign = "bottom";
// heatLegend.height = am4core.percent(80);
// heatLegend.orientation = "vertical";
// heatLegend.valign = "middle";
// heatLegend.marginRight = am4core.percent(4);
// heatLegend.valueAxis.renderer.opposite = true;
// heatLegend.valueAxis.renderer.dx = - 25;
// heatLegend.valueAxis.strictMinMax = false;
// heatLegend.valueAxis.fontSize = 9;
// heatLegend.valueAxis.logarithmic = true;

// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
//polygonTemplate.tooltipText = "{name}: {imgSrc}";
polygonTemplate.tooltipHtml = "<img src='{imgSrc}' />";
polygonTemplate.adapter.add("tooltipHTML", function (html, ev) {
  if (!ev.dataItem.dataContext.site) {
      return "<img src='{imgSrc}' />";
  }
  return html;
})
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
//hs.properties.fill = am4core.color("#fa70ea");
hs.properties.fill = am4core.color("#9a295b");


// Add chart title
var title = chart.titles.create();
title.text = "24.6M children would participate in an afterschool program if one were available in 2020";
title.fontSize = 25;
title.marginBottom = 30;
title.marginTop = 30;


// Add bottom label
// var mapLabel = chart.chartContainer.createChild(am4core.Label);
// mapLabel.tooltipHtml = "<img src='img4StatesOnHover/National.png' />";
// mapLabel.adapter.add("tooltipHTML", function (html, ev) {
//   if (!ev.dataItem.dataContext.site) {
//       return "<img src='img4StatesOnHover/National.png' />";
//   }
//   return html;
// })
// label.align = "center";




// // heat legend behavior
// polygonSeries.mapPolygons.template.events.on("over", function (event) {
//   handleHover(event.target);
// })

// polygonSeries.mapPolygons.template.events.on("hit", function (event) {
//   handleHover(event.target);
// })

// function handleHover(column) {
//   if (!isNaN(column.dataItem.value)) {
//     heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
//   }
//   else {
//     heatLegend.valueAxis.hideTooltip();
//   }
// }

// polygonSeries.mapPolygons.template.events.on("out", function (event) {
//   heatLegend.valueAxis.hideTooltip();
// })
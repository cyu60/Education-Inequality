
var margin_choropleth = {
    top: 10,
    left: 10,
    bottom: 10,
    right: 10
},
width_choropleth = 857,
width_choropleth = width_choropleth - margin_choropleth.left - margin_choropleth.right,
mapRatio = .5,
height_choropleth = width_choropleth * mapRatio;

// D3 Projection
var projection = d3.geoAlbersUsa()
.scale(width_choropleth)
.translate([width_choropleth / 2, height_choropleth / 2]);

// Define path generator
var path = d3.geoPath()
.projection(projection);

var viewboxwidth = width_choropleth * 1;
var viewboxheight = height_choropleth - 20;

d3.json("us-states.json", function(json) {
var centered;
var formatComma = d3.format(',');
var fill = d3.scaleLog()
    .domain([10, 500])
    .range(["brown", "steelblue"]);

var svg_choropleth = d3.select("#usamap")
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("viewBox", "0 0 " + viewboxwidth + " " + viewboxheight + "");

var map = svg_choropleth.append("g")
    .attr("id", "states")
    .selectAll("path")
    .data(json.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("stroke", "#fff")
    .style("stroke-width", "0.1")
    .style("fill", function(d) {
        return fill(path.area(d));
    })
    .on("click", clicked);

svg_choropleth.append("g")
    .attr("class", "states-names")
    .selectAll("text")
    .data(json.features)
    .enter()
    .append("svg:text")
    .text(function(d) {
        return d.properties.name;
    })
    .attr("x", function(d) {
        return path.centroid(d)[0];
    })
    .attr("y", function(d) {
        return path.centroid(d)[1];
    })
    .attr("text-anchor", "middle")
    .attr("fill", "white");


function clicked(d) {

    var x, y, k;

    if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 4;
        centered = d;

    } else {
        x = viewboxwidth / 2;
        y = viewboxheight / 2;
        k = 1;
        centered = null;
    }

    map.selectAll('path')
        .classed('active', centered && function(d) {
            return d === centered;
        });

    map.transition()
        .duration(750)
        .attr('transform', 'translate(' + viewboxwidth / 2 + ',' + viewboxheight / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');

    svg_choropleth.selectAll('text')
        .transition()
        .duration(750)
        .attr('transform', 'translate(' + viewboxwidth / 2 + ',' + viewboxheight / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');
}
});

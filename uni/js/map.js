// dimensions of map visualisation
var width;
var height;
// 'svg' to draw in, 'g' element to group everything together
var svg;
var g;
// projection to convert from coordinates to pixels
var projection;

// path function to create line paths
var path;

// global variable stores currently selected constituency
var active = d3.select(null);

var barChartWidth = document.getElementById("visMapBar").clientWidth;
var barChartHeight = document.getElementById("visMapBar").clientHeight;

var barChartSVG = d3.select("#visMapBar")
    .append("svg")
    .attr("width", barChartWidth)
    .attr("height", barChartHeight)
    .append("g")
    .attr("transform", "translate(" + 200 + "," + 10 + ")")

//var y_scale = d3.scaleLinear()
  //.range([barChartHeight-50, 0])
  //.domain([1, 70]);

var y_scale = d3.scaleBand()
  .range([barChartHeight-50,0]);

var yLabels = ["","Any Gambling", "", "Any Non-lottery gambling", "", "Any online gambling", "", "National Lottery", "", "Scratchcards"];
var yLabelsOverall = ["Any Gambling", "Any Non-lottery gambling", "Any online gambling", "National Lottery", "Scratchcards"];
//var yLabels = ["Scratchcards", "National Lottery", "No Gambling", "Any online gambling", "Any non-lottery gambling", "Any Gambling"];


//var x_scale = d3.scaleBand()
  //.range([0, barChartWidth - 100]);

var x_scale = d3.scaleLinear()
  .range([0, barChartWidth - 225])
  .domain([1, 70]);

var x_axis = d3.axisBottom(x_scale);
var y_axis = d3.axisLeft(y_scale).ticks(5)
  .tickFormat(function(d){
    return yLabels[d];
  });

barChartSVG.append("g")
  .attr("class", "x axis barAxis");

barChartSVG.append("g")
  .attr("class", "y axis barAxis");

function updateBarChart(region){

  if (region === "Overall"){
    $("#mapTitle").html("GB Average");
  }else {
    $("#mapTitle").html("GB Average vs " + region);
  }


  var barChartCsv;
  var barChartData;

  if (region === "North East"){
    barChartCsv = "northeast.csv";
  } else if (region === "North West"){
    barChartCsv = "northwest.csv";
  } else if (region === "Yorkshire and The Humber"){
    barChartCsv = "yorkshire.csv";
  } else if (region === "East Midlands"){
    barChartCsv = "eastmidlands.csv";
  } else if (region === "West Midlands"){
    barChartCsv = "westmidlands.csv";
  } else if (region === "Eastern"){
    barChartCsv = "east.csv";
  } else if (region === "London"){
    barChartCsv = "london.csv";
  } else if (region === "South East"){
    barChartCsv = "southeast.csv";
  } else if (region === "South West"){
    barChartCsv = "southwest.csv";
  } else if (region === "Wales"){
    barChartCsv = "wales.csv";
  } else if (region === "Scotland"){
    barChartCsv = "scotland.csv";
  } else if (region === "Overall"){
    barChartCsv = "overall.csv";
    var y_axis = d3.axisLeft(y_scale).ticks(5)
      .tickFormat(function(d){
        return yLabelsOverall[d];
      });
  }

  d3.csv("https://danclark93.github.io/uni/data/" + barChartCsv, function(csv_data){
    barChartData = csv_data;

    var t = d3.transition()
      .duration(600)
      .ease(d3.easeLinear);

    y_scale.domain(d3.range(barChartData.length));

    var bars = barChartSVG.selectAll(".bar")
       .data(barChartData);

    bars
        .exit()
        .remove();

    var new_bars = bars
      .enter()
      .append("rect")
      .attr("stroke", "white")
      .attr("class", "bar");

    new_bars.merge(bars)
      .transition(t)
      .attr("fill", function(d,i){
        if (region == "Overall"){
          return "#bd0026";
        } else {
          if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9){
            return "#e31a1c";
          } else {
            return "#bd0026";
          }
        }
      })
      .attr("x", 0)
      .attr("width", function(d){
        return barChartWidth - (barChartWidth - x_scale(d.Percentage));
      })
      .attr("height", y_scale.bandwidth())
      .attr("y", function(d, i){
        return y_scale(i);
      });

      var barsText = barChartSVG.selectAll(".label")
        .data(barChartData);

      barsText
        .exit()
        .remove()

      var new_barsText = barsText
        .enter()
        .append("text")
        .attr("class","label");

      new_barsText.merge(barsText)
        .transition(t)
        .attr("x", function(d){
          return x_scale(eval(d.Percentage)-3);
        })
        .attr("y", function(d, i){
          return y_scale(i) + (y_scale.bandwidth()/2);
        })
        .attr("fill", "#d5d5d5")
        .attr("height", y_scale.bandwidth())
        .attr("dx",".35em")
        .attr("dy","0.5em")
        .text(function(d){
          return d.Percentage + "%";
        });

      barChartSVG.select(".x.axis")
        .attr("transform", "translate(0, " + 400 + ")")
        .call(x_axis)
        .attr("fill", "#FFFFFF")
        .attr("stroke", "#FFFFFF");

      barChartSVG.select(".y.axis")
        .call(y_axis)
        .attr("fill", "#FFFFFF")
        .attr("stroke", "#FFFFFF");
  })

}



// reset function returns to default state
function reset() {
  active.style("opacity", 1.0);
  active.style("stroke", "black");
  active = d3.select(null);
  updateBarChart("Overall");
}

function clicked(d) {
     if(active.node() === this) {
        reset();
      }
      else {
        updateBarChart(d.properties.EER13NM);
        active.style("opacity", 1.0);
        active.style("stroke", "#000");
        active = d3.select(this);
        active.style("opacity", 0.3)
        active.style("stroke", "#c0c0c0");

        var b = path.bounds(d);
        var dx = b[1][0] - b[0][0];
        var dy = b[1][1] - b[0][1];
        var x = (b[0][0] + b[1][0]) / 2;
        var y = (b[0][1] + b[1][1]) / 2;
        var s = 0.95 / Math.max(dx/width, dy/height);
        var t = [width/2 - s * x, height/2 - s * y];

   }

  }

function draw(eer) {
  //console.log(eer2);
  projection
    .scale(1)
    .translate([0,0]);
var b = path.bounds(topojson.feature(eer, eer.objects["eer"]));
var s = .95 / Math.max((b[1][0] - b[0][0])/width, (b[1][1] - b[0][1])/height);
var t = [(width - s * (b[1][0] + b[0][0]))/2, (height - s * (b[1][1] + b[0][1]))/2];

projection
  .scale(s)
  .translate(t);

// select

  var areas = g.selectAll(".area")
    .data(topojson.feature(eer, eer.objects["eer"]).features);

// enter
  areas
    .enter()
      .append("path")
      .attr("class", "area")
      .attr("fill", "#ffffff")
        .attr("d", path)
        .on('click', clicked)
}

// initialise our visualisation
function init() {

    width = document.getElementById("visMap").clientWidth;
    height = document.getElementById("visMap").clientHeight;

    svg = d3.select("#visMap")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

    g = svg.append("g");

    projection = d3.geoAlbers()
      .rotate([0, 0]);

    path = d3.geoPath()
      .projection(projection);


    d3.queue()
      .defer(d3.json, "https://danclark93.github.io/uni/js/topo.json")
      .await(function(error, boundary_data){
        draw(boundary_data);
      });

   updateBarChart("Overall");
}

init();

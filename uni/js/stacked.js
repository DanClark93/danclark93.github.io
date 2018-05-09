d3.csv("https://danclark93.github.io/uni/data/stackedData.csv", function(err, data) {
  var allCategories = ["Remote Casino Betting And Bingo","Betting","Society Lottery","Adult Gaming Centre","Bingo","Casino","External Lottery Manager","Family Entertainment Centre"];
  var years = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
  var tooltip = d3.select("body").append("div").attr("class", "toolTip");
  var groups = {}
  var categories = {};
  var xkey = "Category" // the x axis
  var gkey = "Year" // what we group by
  data.forEach(function(d) {
    if(!groups[d[gkey]]) {
      groups[d[gkey]] = [d];
    } else {
      groups[d[gkey]].push(d)
    }
  })

  var processed = [];
  var result = {};

  years.forEach(function(year,i) {
        var xdata = {};
      allCategories.forEach(function(g, k) {

        //console.log(groups[year][k]["Category"] + "-" + groups[year][k]["Year"] + "-" + groups[year][k]["Value"]);
        groups[year].forEach(function(event, j) {
          //console.log(parseFloat(groups[year][j]["Value"]));
            xdata[event[xkey]] = parseFloat(groups[year][j]["Value"]);
        })
      })
  processed.push(xdata);
})
//console.log(processed);
  var n = allCategories.length,
      m = processed.length,
      stack = d3.stack().keys(allCategories);

  var layers = stack(processed); // calculate the stack layout

  layers.forEach(function(d,i) { //adding keys to every datapoint
      d.forEach(function(dd,j){
          dd.year = years[j];
          dd.category = allCategories[i];
        })
  });

  var yGroupMax = d3.max(layers, function(layer) {
        return d3.max(layer, function(d) {
          return d[1] - d[0];
        });
      }),
      yStackMax = d3.max(layers, function(layer) {
        return d3.max(layer, function(d) {
          return d[1];
        });
      });
   var margin = {top: 40, right: 10, bottom: 20, left: 100},
       width = document.querySelector("#visStacked").clientWidth - margin.left - margin.right,
      height = 325 - margin.top - margin.bottom;

   var x = d3.scaleBand()
            .domain(years)
            .rangeRound([0, width])
            .padding(0.08);

   var y = d3.scaleLinear()
            .domain([0, yStackMax])
            .range([height, 0]);

  	var z = d3.scaleBand().domain(allCategories).rangeRound([0, x.bandwidth()]);

    var color = d3.scaleOrdinal()
       .domain([0, n-1])
       .range(colorbrewer.DanCustom[9]);

    var svg = d3.select("#visStacked").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var layer = svg.selectAll(".layer")
          .data(layers)
          .enter().append("g")
          .attr("class", "layer")
          .style("fill", function(d, i) { return color(i); });

    var rect = layer.selectAll("rect")
          .data(function(d) { return d; })
          .enter().append("rect")
          .attr("x", function(d) {
              return x(d.year); })
          .attr("y", height)
          .attr("width", x.bandwidth())
          .attr("height", 0)
          .on("mouseover", function(d){
           tooltip
             .style("left", d3.event.pageX - 150 + "px")
             .style("top", d3.event.pageY - 350 + "px")
             .style("display", "inline-block")
             .html(JSON.stringify(d.data).replace(/,/g, '<br>').replace("{","").replace("}","").replace(/(['"])/g,"")).replace(":",": ");
       })
    		.on("mouseout", function(d){ tooltip.style("display", "none");});

    rect.transition()
          .delay(function(d, i) { return i * 10; })
          .attr("y", function(d) {
              return y(d[1]);
          })
          .attr("height", function(d) {
              return y(d[0]) - y(d[1]);
          });
    const yAxis = svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
    			.call(d3.axisBottom(x).tickSizeOuter(0));

    svg.append("g")
          .attr("class", "y axis")
          .call(d3.axisLeft(y))
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", -90)
          .attr("dy", "0.71em")
          .text("Number of complaints");

    var legend = svg.selectAll(".legend")
          .data(allCategories)
          .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
         .attr("x", 300)
         .attr("width", 18)
         .attr("height", 18)
         .style("fill", function(d,i) { return color(i) });

    legend.append("text")
        .attr("x", 280)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .style("fill", "#d5d5d5")
        .text(function(d) { return d; });

    d3.selectAll("input").on("change", change);

        function change() {
          if (this.value === "grouped") transitionGrouped();
          else transitionStacked();
        }

        function transitionGrouped() {
          y.domain([0, yGroupMax]);

          svg.select(".y")
            .transition(d3.transition().duration(800))
            .call(d3.axisLeft(y));

          rect.transition()
              .duration(500)
              .delay(function(d, i) { return i * 10; })
          		.attr("x", function(d) {
                          return x(d.year)+ z(d.category);
                      })
                      .attr("width", x.bandwidth() / m)
                      .transition()
                      .attr("y", function(d) {
                          return y(d.data[d.category]);
                      })
                      .attr("height", function(d) {
                          return height - y(d.data[d.category]);
                      });
        }

        function transitionStacked() {
          y.domain([0, yStackMax]);

          svg.select(".y")
            .transition(d3.transition().duration(800))
            .call(d3.axisLeft(y));

          rect.transition()
              .duration(500)
              .delay(function(d, i) { return i * 10; })
              .attr("y", function(d) {
                return y(d[1]);
              })
              .attr("height", function(d) {
                  return y(d[0]) - y(d[1]);
              })
            .transition()
              .attr("x", function(d) { return x(d.year); })
              .attr("width", x.bandwidth());
        }
      });

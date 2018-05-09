
    d3.csv('https://raw.githubusercontent.com/dieterholger/dieterholger.github.io/master/data/gamblingcommissionfines.csv', draw);

    function draw(data) {

      // Turns all the strings in the csv into integer values.

      data.forEach(function(d) {
        d.Total = +d.Total;
        d['Social Responsibility'] = +d['Social Responsibility'];
        d.Advertising = +d.Advertising;
        d['Money Laundering'] = +d['Money Laundering'];
      });

      var tooltip = d3.select("body").append("div").attr("class", "toolTip");

      var width = document.getElementById('visFines').offsetWidth,
        height = document.getElementById('visFines').offsetHeight;

        var margin = {
          top: 20,
          right: 350,
          bottom: 30,
          left: 350
        };

      var svg = d3.select('#visFines')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', '0 0 ' + width + ' ' + height)
        .append('g');

      width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;

      svg.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      // Create x and y scale.

      var xScale = d3.scaleLinear()
        .range([0, width]);

      var yScale = d3.scaleBand()
        .range([0, height])
        .padding(0.1);

      // Create domains.

      xScale.domain([0, d3.max(data, function(d) {
        return d.Total; // Total for each company is stored in the .csv.
      })]);

      yScale.domain(data.map(function(d) {
        return d.Company; // These are the labels.
      }));

      // Create axes.

      var x_axis = svg.append('g')
        .attr('class', 'axis')
        .attr('padding', 1)
        .attr('transform', 'translate(' + 0 + ',' + height + ')')
        .call(d3.axisBottom(xScale)
          .ticks(10, 's'))
        .append("text")
          .attr("x", -120)
          .attr("y", 10)
          .attr("dy", "0.71em")
          .text("Total number of fines (£)");;

      var y_axis = svg.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(yScale))
        .selectAll('text')

      // Choose which columns to have as keys with slice method.

      var keys = data.columns.slice(1, 4);

      // Create stack of the data with keys.

      var stack = d3.stack(data)
        .keys(keys);

      // Create series of the data.

      var series = stack(data);

      // Create color scale with colorbrewer or pass in array of colors.

      var colorScale = d3.scaleOrdinal()
        .domain([0, 5])
        .range(colorbrewer.DanCustom[3]);

      // Append rectangles.

      var bars = svg.append('g')
        .selectAll('g')
        .data(series)
        .enter()
        .append('g')
        .attr('fill', function(d) {
          return colorScale(d.key);
        })
        .selectAll('rect')
        .data(function(d) {
          return d;
        })
        .enter()
        .append('rect')
        .attr('y', function(d) {
          return yScale(d.data.Company);
        })
        .attr('x', function(d) {
          return xScale(d[0]);
        })

      bars.transition()
        .duration(1000)
        .delay(function(d, i) {
          return i * 250;
        })
        .attr('width', function(d) {
          return xScale(d[1]) - xScale(d[0]);
        })
        .attr('height', yScale.bandwidth());

      // Mousover settings.

      bars.on('mouseover', function(d) {
         tooltip
           .style("left", d3.event.pageX + 50 + "px")
           .style("top", d3.event.pageY + 50 + "px")
           .style("display", "inline-block")
           .html("<p><font size='3rem'><center>" + d.data.Company + "</p></center></font><p><font size='2rem'>Amount: " + formatComma(d.data.Total) + "</p></center></font><p><font size='2rem'>Year: " + d.data.Year + "</p></font>")
        })
        .on('mouseout', function(d) {
          tooltip.style("display", "none");
        });

      // Formats numbers with commas for display in the tooltip.

      var formatComma = d3.format(",");

      // Settings for the legend.

      var legendRectSize = 18;
      var legendSpacing = 4;

      var legend = svg.selectAll('.legend')
        // Sets the data to the keys and reverses their order so they appear correctly.
        .data(keys)
        .enter()
        .append('g')
        .attr('transform', function(d, i) {
          // Modify vert and horzontal variables by adding or subracting pixels to change its position.
          var height = legendRectSize + legendSpacing;
          var offset = height * colorScale.length / 2;
          var horz = width + 50;
          var vert = i * height - offset;
          return 'translate(' + horz + ',' + vert + ')';
        });

      legend.append('rect')
        .transition()
        .duration(1000)
        .attr('width', legendRectSize)
        .attr('height', legendRectSize)
        .style('fill', colorScale)
        .style('stroke', colorScale);

      legend.append('text')
        .attr('x', legendRectSize + legendSpacing)
        .attr('y', legendRectSize - legendSpacing)
        .style('fill', "#d5d5d5")
        .text(function(d, i) {
          return keys[i];
        })
    }

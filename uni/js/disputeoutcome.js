  d3.csv('https://raw.githubusercontent.com/dieterholger/dieterholger.github.io/master/data/disputeoutcomes.csv', draw);

function draw(data) {

      // Turns all the strings in the csv into integer values.

      data.forEach(function(d) {
        d.Total = +d.Total;
      });

      var width = 500,
        height = 100;

      var margin = {
        top: 10,
        right: 100,
        bottom: 30,
        left: 20
      };

      var svg = d3.select('#visDisputeOutcome')
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

      xScale.domain([0, d3.sum(data, function(d) {
        return d.Total;
      })]);

      // Create axes.

      var x_axis = svg.append('g')
        .attr('class', 'axis')
        .attr('padding', 1)
        .attr('transform', 'translate(' + 0 + ',' + height + ')')
        .call(d3.axisBottom(xScale)
          .ticks(10, 's'));

      // Choose which columns to have as keys with slice method.

      var keys = data.map(function(d) {
        return d.Conclusions;
      });

      var newData = [{}];

      data.forEach(function(d) {
        newData[0][d.Conclusions] = d.Total
      });

      // Create stack of the data with keys.

      var stack = d3.stack()
        .keys(keys);

      // Create series of the data.

      var series = stack(newData);


      // Create color scale with colorbrewer or pass in array of colors.

      var colorScale = d3.scaleOrdinal()
        .domain([0, 3])
        .range(colorbrewer.Oranges[3]);

      // Append rectangles.

      var bars = svg.selectAll(null)
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
        .attr('x', function(d, i) {
          return xScale(d[0]);
        })
        .attr('width', function(d, i) {
          return xScale(d[1]) - xScale(d[0]);
        })
        .attr("height", yScale.bandwidth());

    };

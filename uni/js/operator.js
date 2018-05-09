
  d3.csv('https://raw.githubusercontent.com/dieterholger/dieterholger.github.io/master/data/complaintsvsoperators.csv', draw)

    function draw(data) {
      var width = document.getElementById('visOpeatorIncrease').offsetWidth,
        height = 325;
      var margin = {top: 40, right: 10, bottom: 20, left: 100};
  
      var svg = d3.select('#visOpeatorIncrease')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', '0 0 ' + width + ' ' + height)
        .append('g')
      width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;
      svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      var xScale = d3.scaleBand()
        .range([0, width])
        .padding(0.08);
      var yScale = d3.scaleLinear()
        .range([height, 0]);
      xScale.domain(data.map(function(d) {
        return d.Year;
      }));
      yScale.domain([0, d3.max(data, function(d) {
        return +d.Operators;
      })]);
      var x_xaxis = svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + 0 + ',' + height + ')')
        .call(d3.axisBottom(xScale));
      var y_axis = svg.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(yScale)
          .ticks(10, 's'))
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", -90)
          .attr("dy", "0.71em")
          .text("Number of operators");
      var bars = svg.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('fill', '#bd0026')
        .attr('class', 'bar')
        .attr('x', function(d) {
          return xScale(d.Year);
        })
        .attr('y', function(d) {
          return yScale(+d.Operators);
        })
        .attr('width', xScale.bandwidth())
        .attr('height', function(d) {
          return height - yScale(+d.Operators);
        });
    }

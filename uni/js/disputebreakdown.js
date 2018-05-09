d3.csv('https://raw.githubusercontent.com/dieterholger/dieterholger.github.io/master/data/disputeshare.csv', draw)

function draw(data) {

      var width = document.getElementById('visDisputeBreakdown').offsetWidth,
        height = document.getElementById('visDisputeBreakdown').offsetHeight;

      var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 350
      };

      var svg = d3.select('#visDisputeBreakdown')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', '0 0 ' + width + ' ' + height)
        .append('g')

      width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;

      svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var xScale = d3.scaleLinear()
        .range([0, width]);

      var yScale = d3.scaleBand()
        .range([0, height])
        .padding(0.1);

      var colorScale = d3.scaleLinear()
        .range(['rgb(255, 255, 204)', 'rgb(189, 0, 38)']) // or use hex values
        .domain([0, 25]);

      xScale.domain([0, 25]);

      yScale.domain(data.map(function(d) {
        return d.Type; // These are the labels.
      }));


      var x_xaxis = svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + 0 + ',' + height + ')')
        .call(d3.axisBottom(xScale))
        .append("text")
        .attr("x", -80)
        .attr("y", 10)
        .attr("dy", "0.71em")
        .text("% of disputes");

      var y_axis = svg.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(yScale)
          .ticks(10, 's'));

      var bars = svg.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('fill', function(d){
          return colorScale(+d.Percent.replace("%",""))
        })
        .attr('class', 'bar')
        .attr("y", function (d) {
                return yScale(d.Type);
            })
        .attr("height", yScale.bandwidth())
        .attr("x", 0)
        .attr("width", function (d) {
              return xScale(+d.Percent.replace("%",""));
        });


    }

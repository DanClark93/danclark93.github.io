import * as selection from 'd3-selection';
import * as scale from 'd3-scale';
import * as array from 'd3-array';
import * as axis from 'd3-axis';
import * as jetpack from 'd3-jetpack';
import * as shape from 'd3-shape';
import * as transition from 'd3-transition';
import * as annotation from 'd3-svg-annotation';
import { getColor } from '../colors.js';

const d3 = {
  ...selection,
  ...scale,
  ...array,
  ...axis,
  ...jetpack,
  ...shape,
  ...transition,
  ...annotation,
};

let svg, x, y, config;

export const drawChart = node => {
  if (!node) return;

  // set the dimensions and config.margin of the graph
  const { width, height } = node.getBoundingClientRect();

  const isMobile = width < 500 ? true : false;

  config = {
    width: width,
    height: height,
    margin: {
      top: 5,
      right: isMobile ? 10 : 40,
      bottom: 20,
      left: 40,
    },
    get usableWidth() {
      return this.width - this.margin.left - this.margin.right;
    },
    get usableHeight() {
      return this.height - this.margin.top - this.margin.bottom;
    },
  };

  // set the width and height of the svg
  svg = d3
    .select(node)
    .at({
      width: config.width,
      height: config.height,
    })
    .append('g')
    .at({
      transform: `translate(${config.margin.left},${config.margin.top})`,
      width: config.width,
      height: config.height,
    });

  // set the x and y scales
  x = d3
    .scaleLinear()
    .domain([2013, 2030])
    .range([0, config.usableWidth]);

  y = d3
    .scaleLinear()
    .range([config.usableHeight, 0])
    .domain([8, 20]);

  // x and y axis
  const xAxis = svg.append('g').at({
    transform: 'translate(0, ' + config.usableHeight + ')',
    class: 'xAxis',
    id: 'xAxis',
  });

  const yAxis = svg.append('g').at({
    transform: 'translate(0, ' - config.usableHeight + ')',
    class: 'yAxis',
    id: 'yAxis',
  });

  xAxis.call(
    d3
      .axisBottom(x)
      .ticks(5)
      .tickSizeOuter(0)
      .tickFormat(d => {
        return d;
      })
      .tickValues([2013, 2020, 2025, 2030])
  );

  yAxis.call(
    d3
      .axisLeft(y)
      .tickValues([10, 14, 18])
      .tickSizeInner(-config.usableWidth)
      .tickSizeOuter(0)
      .tickFormat(d => {
        return d === 18 ? d + 'ug/m3' : d;
      })
  );

  //Little hack to ensure axis displays inside the line
  d3.selectAll('.xAxis text').st({
    'text-anchor': (d, i) => {
      return i === 0 ? 'start' : i === 3 ? 'end' : 'middle';
    },
  });

  //linearGradient to get the colour gradient affect
  //these percentages are worked calculated using the color buckets in colors.js
  svg
    .append('linearGradient')
    .attr('id', 'temperature-gradient')
    .attr('gradientUnits', 'userSpaceOnUse')
    .attr('x1', 0)
    .attr('y1', y(12))
    .attr('x2', 0)
    .attr('y2', y(18))
    .selectAll('stop')
    .data([
      { offset: '0%', color: '#F5DF26' },
      { offset: '17.83%', color: '#EFCD27' },
      { offset: '18.52%', color: '#E8B927' },
      { offset: '19.39%', color: '#E2A627' },
      { offset: '20.41%', color: '#DC9428' },
      { offset: '21.53%', color: '#D78427' },
      { offset: '22.73%', color: '#D77D25' },
      { offset: '24.11%', color: '#D67522' },
      { offset: '25.18%', color: '#D56C20' },
      { offset: '27.42%', color: '#D4641D' },
      { offset: '29.36%', color: '#D45B1B' },
      { offset: '31.55%', color: '#D35017' },
      { offset: '34.04%', color: '#D24714' },
      { offset: '37.02%', color: '#D13C11' },
      { offset: '40.25%', color: '#D0330E' },
      { offset: '44.02%', color: '#CA2C0C' },
      { offset: '48.66%', color: '#C3290B' },
      { offset: '53.11%', color: '#BA250A' },
      { offset: '57.28%', color: '#B22108' },
      { offset: '63.10%', color: '#A61D07' },
      { offset: '69.75%', color: '#8B1806' },
      { offset: '78.21%', color: '#6A1205' },
      { offset: '89.37%', color: '#4E0E03' },
      { offset: '95%', color: '#2E0802' },
      { offset: '100%', color: '#070100' },
    ])
    .enter()
    .append('stop')
    .attr('offset', function(d) {
      return d.offset;
    })
    .attr('stop-color', function(d) {
      return d.color;
    });

  // draw the WHO guideline annotation - line
  const whoAnnotation = [
    {
      note: {
        title: 'WHO guideline  ',
        label: '',
        wrap: 110,
        align: 'right',
      },
      x: x(2013),
      y: y(10),
      dx: config.usableWidth,
      dy: 0,
    },
  ];

  const makeWHOAnnotation = annotation
    .annotation()
    .type(annotation.annotationLabel)
    .annotations(whoAnnotation);

  svg
    .append('g')
    .at({ class: 'whoAnnotation' })
    .call(makeWHOAnnotation);

  // draw highlight rectangle for WHO guideline
  svg.append('rect').at({
    x: x(2013),
    y: y(10),
    width: config.usableWidth,
    height: y(8) - y(10),
    class: 'highlight',
  });

  //legend
  const legendBox = svg.append('g').at({
    transform: `translate(${config.margin.legend},0)`,
  });

  legendBox
    .at({
      class: 'legendBox',
    })
    .append('line')
    .at({
      x1: config.usableWidth - 225,
      x2: config.usableWidth - 205,
      y1: 31,
      y2: 31,
      stroke: '#B22108',
      'stroke-width': 2,
    });

  legendBox
    .append('text')
    .at({
      x: config.usableWidth - 200,
      y: 35,
    })
    .text('Your school');

  legendBox
    .at({
      class: 'legendBox',
    })
    .append('line')
    .at({
      x1: config.usableWidth - 115,
      x2: config.usableWidth - 95,
      y1: 31,
      y2: 31,
      stroke: '#7c7c7c',
      'stroke-width': 2,
      'stroke-dasharray': 2,
    });

  legendBox
    .append('text')
    .at({
      x: config.usableWidth - 90,
      y: 35,
    })
    .text('London average');
};

export const animate = data => {
  const averageData = [
    { year: 2013, pm25: 15.79 },
    { year: 2020, pm25: 14.22 },
    { year: 2025, pm25: 13.83 },
    { year: 2030, pm25: 13.48 },
  ];

  data = [
    { year: 2013, pm25: data.avg2013 },
    { year: 2020, pm25: data.avg2020 },
    { year: 2025, pm25: data.avg2025 },
    { year: 2030, pm25: data.avg2030 },
  ];

  // use a clip path to synchronize the animation of the line
  const clip = svg.append('clipPath').at({
    id: 'clip',
  });

  const clipRect = clip.append('rect').at({
    width: 0,
    height: config.usableHeight,
  });

  const areaGenerator = d3
    .line()
    .x(d => {
      return x(d.year);
    })
    .y(d => {
      return y(d.pm25);
    })
    .curve(d3.curveNatural);

  // plot the average
  const averageAreas = svg
    .selectAll('areas')
    .data(averageData)
    .enter()
    .append('path')
    .at({
      class: 'area averageArea',
      d: d => {
        return areaGenerator(averageData);
      },
      'clip-path': 'url(#clip)',
    });

  // plot the school
  const areas = svg
    .selectAll('areas')
    .data(data)
    .enter()
    .append('path')
    .at({
      class: 'area',
      d: d => {
        return areaGenerator(data);
      },
      'clip-path': 'url(#clip)',
    });

  clipRect
    .transition()
    .duration(5000)
    .at({
      width: config.usableWidth,
    });

  // draw the average dots
  svg
    .selectAll('.average-circle')
    .data(averageData)
    .enter()
    .append('circle')
    .at({
      class: 'average-circle',
      r: 7.5,
      cx: d => {
        return x(d.year);
      },
      cy: d => {
        return y(d.pm25);
      },
    })
    .st({
      opacity: 0,
    })
    .transition()
    .delay((d, i) => {
      return i * 1000;
    })
    .st({
      opacity: 0.5,
      fill: '#7c7c7c',
    });

  // draw the dots
  svg
    .selectAll('.school-circle')
    .data(data)
    .enter()
    .append('circle')
    .at({
      class: 'school-circle',
      r: 7.5,
      cx: d => {
        return x(d.year);
      },
      cy: d => {
        return y(d.pm25);
      },
    })
    .st({
      opacity: 0,
    })
    .transition()
    .delay((d, i) => {
      return i * 1000;
    })
    .st({
      opacity: 1,
      fill: d => {
        return getColor(d.pm25);
      },
    });
};

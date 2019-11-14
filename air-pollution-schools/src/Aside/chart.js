/* global window */
import * as selection from 'd3-selection';
import * as scale from 'd3-scale';
import * as array from 'd3-array';
import * as axis from 'd3-axis';
import * as jetpack from 'd3-jetpack';
import * as shape from 'd3-shape';
import * as transition from 'd3-transition';
import * as interpolate from 'd3-interpolate';
import * as chromatic from 'd3-scale-chromatic';
import { getColor } from '../colors.js';

const d3 = {
  ...selection,
  ...scale,
  ...array,
  ...axis,
  ...jetpack,
  ...shape,
  ...transition,
  ...interpolate,
  ...chromatic,
};

let x, config, svg;

const drawLabel = (
  pm25,
  text = 'Average',
  below = false,
  alignRight = false
) => {
  const line = svg.append('line');

  line.at({
    x1: x(pm25),
    y1: below ? config.usableHeight : config.barHeight,
    x2: x(pm25),
    y2: below ? config.usableHeight : config.barHeight,
  });

  line
    .transition()
    .duration(2000)
    .at({
      x2: x(pm25),
      y2: below
        ? config.usableHeight / 2
        : config.usableHeight / 2 + config.barHeight,
      class: 'annotation-line',
    });

  const labeltext = svg
    .append('text')
    .tspans(() => d3.wordwrap(`${text} ${pm25.toFixed(2)}ug/m3`, 12))
    .at({
      class: 'label',
      x: d => {
        return alignRight ? x(pm25) - 10 : x(pm25) + 10;
      },
      y: below ? config.usableHeight - 15 : config.barHeight + 15,
    })
    .st({
      'text-anchor': alignRight ? 'end' : 'start',
    });
};

export const drawChart = (node, school) => {
  if (!node) return;

  // data to generate the heatmap feel of the bar, but its basically just a stacked bar chart
  let data = [
    {
      pm25: 9.9,
      previous: 6,
    },
  ];

  // generate an array of 0.1 from 10-20 to draw rectangles allowing for the gradient
  for (let i = 10; i < 20; i = i + 0.15) {
    let item = { pm25: i, previous: i - 0.15 };
    data.push(item);
  }

  // set the dimensions and config.margin of the graph
  const { width, height } = node.getBoundingClientRect();
  const isMobile = width < 500 ? true : false;

  config = {
    width: width,
    height: height,
    margin: {
      top: 50,
      right: 0,
      bottom: 0,
      left: isMobile ? 0 : 30,
    },
    barHeight: 46,
    get usableWidth() {
      return this.width - this.margin.left - this.margin.right;
    },
    get usableHeight() {
      return this.height - this.margin.top - this.margin.bottom;
    },
  };

  // set the width and height of the svg
  svg = d3.select(node).at({
    width: config.width,
    height: config.height,
  });

  // x scale
  x = d3
    .scaleLinear()
    .range([config.margin.left, config.usableWidth])
    .domain([6, 20]);

  const colorScale = d3.scaleSequential(d3.interpolateYlOrRd).domain([10, 20]);

  const g = svg.append('g').at({
    transform: `translate(${config.margin.left}, ${config.usableHeight / 2})`,
  });

  const bar = g
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .at({
      width: d => {
        return x(d.pm25) - x(d.previous);
      },
      x: d => {
        return x(d.previous);
      },
      height: config.barHeight,
    })
    .st({
      // fill the first block from 6-9.9 in blue, for the rest use the color scale
      fill: (d, i) => {
        return i === 0 ? getColor(d.pm25) : colorScale(d.pm25);
      },
      stroke: (d, i) => {
        return i === 0 ? getColor(d.pm25) : colorScale(d.pm25);
      },
    });

  // draw the three labels out for min/average/max
  // add a timeout on them so they appear one at a time
  window.setTimeout(() => {
    drawLabel(school.min, 'Lowest', true, true);
  }, 500);
  window.setTimeout(() => {
    drawLabel(school.avg2016);
  }, 2750);
  window.setTimeout(() => {
    drawLabel(school.max, 'Highest', true);
  }, 5000);
};

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

export const drawChart = node => {
  if (!node) return;

  // data to generate the heatmap feel of the bar, but its basically just a stacked bar chart
  let data = [];

  // generate an array of 0.1 from 10-20 to draw rectangles allowing for the gradient
  for (let i = 10; i < 20; i = i + 0.15) {
    let item = { pm25: i, previous: i - 0.15 };
    data.push(item);
  }

  // set the dimensions and config.margin of the graph
  const { width, height } = node.getBoundingClientRect();

  config = {
    width: width,
    height: height,
    margin: {
      top: 50,
      right: 0,
      bottom: 0,
      left: 0,
    },
    barHeight: 20,
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
    .domain([10, 20]);

  const xAxis = svg.append('g').at({
    transform: `translate(-5, ${config.barHeight})`,
    class: 'xAxisLegend',
    id: 'xAxis',
  });

  xAxis.call(
    d3
      .axisBottom(x)
      .ticks(2)
      .tickSizeOuter(0)
      .tickFormat(d => {
        return d + 'µg/m3';
      })
      .tickValues([10, 20])
  );

  //Little hack to ensure axis displays inside the line
  d3.selectAll('.xAxisLegend text').st({
    'text-anchor': (d, i) => {
      return d === 20 ? 'end' : 'start';
    },
  });

  const colorScale = d3.scaleSequential(d3.interpolateYlOrRd).domain([10, 20]);

  const g = svg.append('g').at({ transform: 'translate(0,0)' });

  // x axis label
  g.append('text')
    .at({
      x: config.usableWidth / 2,
      y: config.barHeight + 20,
      class: 'xLabel',
    })
    .text('Worse pollution →')
    .st({
      'text-anchor': 'middle',
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
        return colorScale(d.pm25);
      },
      stroke: (d, i) => {
        return colorScale(d.pm25);
      },
    });
};

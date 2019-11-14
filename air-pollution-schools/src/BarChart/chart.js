/* global window */
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

let g, y, config, isMobile, svg;

export const drawChart = node => {
  if (!node) return;

  // set the dimensions and config.margin of the graph
  const { width, height } = node.getBoundingClientRect();
  isMobile = width < 500 ? true : false;

  config = {
    width: width,
    height: height,
    margin: {
      top: 50,
      right: 50,
      bottom: 30,
      left: isMobile ? 70 : 150,
    },
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

  g = svg.append('g').at({
    transform: `translate(${config.margin.left},${config.margin.top})`,
    width: config.usableWidth,
    height: config.usableHeight,
  });

  // set the y scales
  y = d3
    .scaleLinear()
    .range([config.usableHeight, 0])
    .domain(
      // d3.extent(data, d => {
      //   return d.avg2016;
      // })
      [8, 18]
    );

  // draw the y axis on the right hand side
  const yAxis = g.append('g').at({
    transform: `translate(${config.usableWidth + 10} ,0)`,
    class: 'yAxis',
    id: 'yAxis',
  });

  yAxis.call(
    d3
      .axisRight(y)
      .ticks(5)
      .tickSizeInner(0)
      .tickSizeOuter(0)
      .tickPadding(10)
      .tickFormat(d => {
        return isMobile ? d : d === 18 ? d + 'ug/m3' : d;
      })
  );

  // x axis label
  svg
    .append('text')
    .at({
      x: config.width / 2,
      y: config.height,
      class: 'xLabel',
    })
    .text('Worse polluted schools →')
    .st({
      'text-anchor': 'middle',
    });

  // draw highlight rectangle for WHO guideline
  g.append('rect').at({
    x: isMobile ? -config.margin.left + 10 : -config.margin.left,
    y: y(10),
    width: config.width - config.margin.right,
    height: y(8) - y(10),
    class: 'highlight',
  });
};

export const animate = (data, selected, onClickedCircle, createLabel) => {
  if (!data) return null;
  // sort data into avg2016 pm25 order
  data.sort(function(a, b) {
    return b.avg2016 < a.avg2016 ? 1 : -1;
  });

  const x = d3
    .scaleBand()
    .range([0, config.usableWidth])
    .padding(0.1)
    .domain(
      data.map(d => {
        return d.name;
      })
    );

  // create content for label and send to the createLabel() function
  let d = [];
  d['x'] = isMobile
    ? 10
    : config.usableWidth / 2 > x(selected.name)
    ? x(selected.name) + 170
    : x(selected.name) - 260;
  (d['y'] = 50),
    (d['background'] = getColor(selected.avg2016)),
    (d['color'] = selected.avg2016 < 13.2 ? '#000' : '#fff'),
    (d['rank'] = data.filter(b => b.name === selected.name)[0].rank);

  isMobile && createLabel(d);

  // draw the bars
  g.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .on('mouseover', function(d) {
      if (!isMobile) {
        d['x'] = x(d.name);
        d['y'] = y(d.avg2016);
        onClickedCircle(d);

        d3.selectAll('.bar').st({
          opacity: 0.5,
        });
        d3.select(this).st({
          opacity: 1,
        });
      }
    })
    .on('mouseout', function(d) {
      if (!isMobile) {
        onClickedCircle(null);

        d3.selectAll('.bar').st({
          opacity: 1,
        });
      }
    })
    .at({
      class: 'bar',
      x: d => {
        return x(d.name);
      },
      y: d => {
        return config.usableHeight;
      },
      width: x.bandwidth(),
      height: 0,
    })
    .st({
      fill: d => {
        return getColor(d.avg2016);
      },
    })
    .transition()
    .duration(1000)
    .delay((d, i) => {
      return i * 35;
    })
    .at({
      y: d => {
        return y(d.avg2016);
      },
      height: d => {
        return config.usableHeight - y(d.avg2016);
      },
    });

  // WHO guideline annotation - line
  const whoAnnotation = [
    {
      note: {
        title: 'WHO guideline',
        label: '',
        wrap: isMobile ? 60 : 110,
        align: 'start',
      },
      x: config.usableWidth,
      y: y(10),
      dx: isMobile
        ? -config.usableWidth - (config.margin.left - 10)
        : -config.usableWidth - config.margin.left,
      dy: 0,
    },
  ];

  const makeWHOAnnotation = annotation
    .annotation()
    .type(annotation.annotationLabel)
    .annotations(whoAnnotation);

  g.append('g')
    .at({ class: 'whoAnnotation' })
    .call(makeWHOAnnotation);

  // Best school annotation - line
  const bestSchoolAnnotation = [
    {
      note: {
        title: isMobile ? 'Least' : 'Least (Pratts Bottom Primary School)',
        label: '',
        wrap: 130,
        align: 'start',
      },
      x: config.usableWidth,
      y: y(11.41),
      dx: isMobile
        ? -config.usableWidth - (config.margin.left - 10)
        : -config.usableWidth - config.margin.left,
      dy: 0,
    },
  ];

  const makeBestSchoolAnnotation = annotation
    .annotation()
    .type(annotation.annotationLabel)
    .annotations(bestSchoolAnnotation);

  g.append('g')
    .at({ class: 'bestAnnotation' })
    .call(makeBestSchoolAnnotation);

  // Worst school annotation - line
  const worstSchoolAnnotation = [
    {
      note: {
        title: isMobile
          ? 'Most polluted in London'
          : 'Most polluted in London (City of London school)',
        label: '',
        wrap: 160,
        align: 'start',
      },
      x: config.usableWidth,
      y: y(17.23),
      dx: isMobile
        ? -config.usableWidth - (config.margin.left - 10)
        : -config.usableWidth - config.margin.left,
      dy: 0,
    },
  ];

  const makeWorstSchoolAnnotation = annotation
    .annotation()
    .type(annotation.annotationLabel)
    .annotations(worstSchoolAnnotation);

  g.append('g')
    .at({ class: 'worstAnnotation' })
    .call(makeWorstSchoolAnnotation);

  // clear all current timeouts
  let id = window.setTimeout(function() {}, 0);

  while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
  }
  // draw circle, line and text for the annotation
  // only draw out the annotated bar once the bars have stopped animating (e.g. the length of the data * 50)
  window.setTimeout(() => {
    const circle = g
      .append('circle')
      .at({
        r: 1e-6,
        cx: x(selected.name) + x.bandwidth() / 2,
        cy: -50,
      })
      .st({
        fill: getColor(selected.avg2016),
      })
      .transition()
      .duration(400)
      .at({
        r: 7,
      });

    const line = g.append('line');

    line.at({
      x1: x(selected.name) + x.bandwidth() / 2,
      y1: -40,
      x2: x(selected.name) + x.bandwidth() / 2,
      y2: -40,
    });

    line
      .transition()
      .duration(2000)
      .at({
        x2: x(selected.name) + x.bandwidth() / 2,
        y2: y(selected.avg2016),
        class: 'annotation-line',
      });

    !isMobile && createLabel(d);

    g.selectAll('.bar')
      .data(data)
      .transition()
      .delay(1800)
      .at({
        class: d => {
          return d.name === selected.name ? 'bar selected' : 'bar';
          //return 'bar';
        },
      });
  }, data.length * 35 + 1000);
};

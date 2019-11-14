// @flow
/* global document */
require('intersection-observer');
import React from 'react';
import style from './style.scss';
import ChartLabel from '../ChartLabel';
import Tooltip from '../Tooltip';
import { drawChart, animate } from './chart';

export class BarChart extends React.Component {
  state = {
    clickedCircle: null,
    hasAnimated: false,
    inView: false,
    label: null,
  };

  static defaultProps = {
    threshold: 0.0,
    root: null,
    rootMargin: '-30px',
    onCharge: () => {},
    className: null,
  };

  scrollIntoView = () => {
    const element = document.getElementById('Chart');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  doAnimation = inView => {
    //animate the bars once scrolled into view and only do it once
    const { data, selected } = this.props;

    const { hasAnimated } = this.state;
    if (inView) {
      if (!hasAnimated)
        animate(
          data,
          selected,
          this.onClickedCircle.bind(this),
          this.createLabel.bind(this)
        );
      this.setState({ inView: true, hasAnimated: true });
    } else {
      this.setState({ inView: false });
    }
  };

  onClickedCircle = d => {
    this.setState({
      clickedCircle: d,
    });
  };

  createLabel = d => {
    this.setState({
      label: d,
    });
  };

  componentDidMount() {
    drawChart(this.node);

    const { threshold, root, rootMargin } = this.props;

    const options = {
      root,
      rootMargin,
      threshold,
    };

    const onChange = e => {
      this.doAnimation(e[0].isIntersecting);
    };

    {
      /* eslint-disable */
    }
    const observer = new IntersectionObserver(onChange, options);
    {
      /* eslint-disable */
    }

    observer.observe(this.node);

    this.scrollIntoView();
  }

  componentDidUpdate(prevProps) {
    const { data, selected } = this.props;
    const { inView } = this.state;

    if (prevProps.data !== data) {
      this.node.innerHTML = '';
      this.setState({
        hasAnimated: false,
        clickedCircle: null,
        label: null,
      });
      drawChart(this.node);
      this.scrollIntoView();
      if (inView) {
        animate(
          data,
          selected,
          this.onClickedCircle.bind(this),

          this.createLabel.bind(this)
        );
        this.setState({ hasAnimated: true });
      }
    }
  }

  render() {
    const { clickedCircle, label } = this.state;
    const { data, selected } = this.props;

    return (
      <div className={style.Chart} id="Chart">
        {label && (
          <ChartLabel data={label} borough={data} selected={selected} />
        )}
        {clickedCircle && <Tooltip data={clickedCircle} />}
        <svg ref={node => (this.node = node)} />
      </div>
    );
  }
}

export default BarChart;

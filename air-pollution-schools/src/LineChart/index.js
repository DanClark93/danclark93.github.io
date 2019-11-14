// @flow
require('intersection-observer');
import React from 'react';
import style from './style.scss';
import { drawChart, animate } from './chart';

export class LineChart extends React.Component {
  state = {
    hasAnimated: false,
    inView: false,
  };

  static defaultProps = {
    threshold: 0.0,
    root: null,
    rootMargin: '-10px',
    onChange: () => {},
    className: null,
  };

  doAnimation = inView => {
    //animate the line once scrolled into view and only do it once
    const { data } = this.props;
    const { hasAnimated } = this.state;
    if (inView) {
      if (!hasAnimated) animate(data);
      this.setState({ inView: true, hasAnimated: true });
    } else {
      this.setState({ inView: false });
    }
  };

  componentDidMount() {
    drawChart(this.node);
    const { threshold, root, rootMargin, data } = this.props;
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

    // safari bug. if on safari, animate straight away as the intersection observer isnt working for this component for some reason...
    const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isSafari || iOS) animate(data);
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    const { inView } = this.state;
    if (prevProps.data !== data) {
      this.node.innerHTML = '';
      this.setState({
        hasAnimated: false,
      });
      drawChart(this.node);
      if (inView) animate(data);
    }
  }

  render() {
    return (
      <div className={style.Chart}>
        <svg ref={node => (this.node = node)} />
      </div>
    );
  }
}

export default LineChart;

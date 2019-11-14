/* global IntersectionObserver */

import React from 'react';

class Observer extends React.Component {
  static defaultProps = {
    threshold: 0.0,
    root: null,
    rootMargin: '0px',
    onChange: () => {},
    className: null,
  };

  componentDidMount() {
    const { threshold, root, rootMargin, onChange } = this.props;

    const options = {
      root,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver(onChange, options);

    observer.observe(this.refs.node);
  }

  render() {
    const { className } = this.props;

    return <div className={className} ref="node" />;
  }
}

export default Observer;

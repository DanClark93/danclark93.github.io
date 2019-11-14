import React from 'react';
import { drawChart } from './chart';

import style from './style.scss';

export default class Legend extends React.Component {
  componentDidMount() {
    drawChart(this.node);
  }

  render() {
    return (
      <div className={style.MapLegend}>
        <svg ref={node => (this.node = node)} />
      </div>
    );
  }
}

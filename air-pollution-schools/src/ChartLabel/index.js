// @flow
import React from 'react';
const converter = require('number-to-words');

import style from './style.scss';

export class ChartLabel extends React.Component {
  formatRank = rank => {
    return rank && converter.toOrdinal(rank);
  };

  render() {
    const { borough, selected, data } = this.props;
    if (!data) return null;

    const styles = {
      left: data.x,
      top: data.y,
      border: '1px solid ' + data.background,
      rank: data.rank,
    };
    return (
      data && (
        <div className={style.ChartLabel} style={styles}>
          <p>
            The average concentration of particulate pollution at{' '}
            {selected.name} is <strong>{selected.avg2016.toFixed(1)}</strong>{' '}
            µg/m&sup3;. The World Health Organisation (WHO) considers a score
            lower than <strong>10</strong> to be safe. In {selected.borough},
            your school ranks <strong>{this.formatRank(data.rank)}</strong> out
            of <strong>{borough.length}</strong> schools
          </p>
        </div>
      )
    );
  }
}

export default ChartLabel;

// @flow
/* global document */
import React from 'react';

import style from './style.scss';

export default ({ data }) => {
  // functions to manoeuvre x and y position of tooltip so it stays inside the chart
  const { width } = document.getElementById('Chart').getBoundingClientRect();

  // const isMobile = width < 500 ? true : false;

  const styles = {
    left: data.x,
    top: data.y,
  };

  return (
    data && (
      <div className={style.Tooltip} style={styles}>
        <h4>{data.name}</h4>
        <h5>{data.avg2016.toFixed(2)}µg/m&sup3;</h5>
      </div>
    )
  );
};

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Observer from '../Observer';

import { waypointPosition } from '../../config';

import style from './style.scss';

export const Intro = ({ onProgress, onReset, showStartButton }) => (
  <header className={style.Intro}>
    <main>
      <img src={require('./times-logo-old.png')} />
      <h1 className="Headline">How The Times reported the Armistice</h1>
      <p className="Dip">
        Explore an annotated version of the newspaper published on November 12,
        1918 — the first to celebrate the signing of the Armistice agreement
      </p>
      <button disabled={!showStartButton} onClick={() => onProgress('click')}>
        {showStartButton ? 'Begin' : 'Loading...'}
      </button>
    </main>
    <Observer
      rootMargin={`-${waypointPosition}% 0px -${99 - waypointPosition}% 0px`}
      onChange={e => {
        if (e[0].isIntersecting) onReset();
      }}
    />
  </header>
);
export default withStyles(style)(Intro);

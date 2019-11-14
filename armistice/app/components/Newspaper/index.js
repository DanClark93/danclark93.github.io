import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import style from './style.scss';

import Page from '../Page';

import { waypointPosition, displayWaypoint } from '../../config';

import { pages, stories } from '../../data';

const Newspaper = ({
  storyIndex,
  onStoryChange,
  onPageLoad,
  intersectionRoot,
}) => (
  <div className={style.Newspaper}>
    <div
      className={style.waypoint}
      style={{
        display: displayWaypoint ? 'initial' : 'none',
        top: `${waypointPosition}%`,
      }}
    />

    <div className={style.pages}>
      {pages.map((page, index) => (
        <Page
          image={page}
          key={index}
          intersectionRoot={intersectionRoot}
          onPageLoad={onPageLoad(index)}
          stories={stories.filter(s => s.pageIndex === index)}
          onStoryEnter={key => onStoryChange(key, 'scroll')}
          activeStory={storyIndex}
        />
      ))}
    </div>
  </div>
);

export default withStyles(style)(Newspaper);

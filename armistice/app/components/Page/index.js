/* global Image */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Anchor } from '../AnchorProvider';
import Observer from '../Observer';

import { waypointPosition } from '../../config';

import style from './style.scss';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const imgixify = (url, { w, blur }) => {
  const replacedUrl = url.startsWith('/assets')
    ? url.replace(
        '/assets',
        'https://times-static-assets.imgix.net/public/takeover-pages/times-armistice/assets'
      )
    : url.replace(
        'https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/',
        'https://times-static-assets.imgix.net/'
      );

  return `${replacedUrl}?q=40&w=${w}&blur=${blur}&auto=compress`;
};

class Page extends React.Component {
  state = {
    hasImageLoaded: false,
  };

  loadImage = () => {
    const { image, onPageLoad } = this.props;

    const img = new Image();

    img.onload = () => {
      this.setState(
        () => ({
          hasImageLoaded: true,
        }),
        () => onPageLoad()
      );
    };

    img.src = imgixify(image, {
      w: 1500,
      blur: 0,
    });
  };

  handlePageObserver = ([entry]) => {
    const { hasImageLoaded } = this.state;

    if (!hasImageLoaded && entry.isIntersecting) {
      this.loadImage();
    }
  };

  render() {
    const {
      image,
      stories,
      onStoryEnter,
      activeStory,
      intersectionRoot,
    } = this.props;
    const { hasImageLoaded } = this.state;

    return (
      <div className={style.Page}>
        <Observer
          className={style.pageObserver}
          root={intersectionRoot}
          rootMargin="0px 0px 40% 0px"
          onChange={this.handlePageObserver}
        />

        <figure>
          <img
            src={imgixify(image, {
              w: 400,
              blur: 50,
            })}
          />
          {hasImageLoaded && (
            <img
              src={imgixify(image, {
                w: 1500,
                blur: 0,
              })}
              className={style.fullPageImage}
            />
          )}
        </figure>
        <aside>
          {stories.map((story, index) => (
            <div
              key={index}
              className={classNames(
                style.story,
                activeStory === story.index && style.active
              )}
              style={{
                top: `${story.position.top}%`,
                left: `${story.position.left}%`,
                height: `${story.position.height}%`,
                width: `${story.position.width}%`,
              }}
            >
              <Anchor
                className={style.storyAnchor}
                name={`story-${story.index}`}
              >
                <Observer
                  className={style.storyObserver}
                  root={intersectionRoot}
                  rootMargin={`-${waypointPosition}% 0px -${99 -
                    waypointPosition}% 0px`}
                  onChange={e => {
                    if (e[0].isIntersecting) onStoryEnter(story.index);
                  }}
                />
              </Anchor>
            </div>
          ))}
        </aside>
      </div>
    );
  }
}

export default withStyles(style)(Page);

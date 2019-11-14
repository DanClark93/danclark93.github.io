/* global window, document */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-9352106-37');

import Intro from '../Intro';
import Newspaper from '../Newspaper';
import Sidebar from '../Sidebar';
import LoggedOut from '../LoggedOut';
import AnchorProvider, { AnchorContext } from '../AnchorProvider';
import Progress from '../Progress';

import style from './style.scss';

import { stories } from '../../data';

export class Armistice extends React.Component {
  state = {
    storyIndex: null,
    isFirstPageReady: false,
    hasBegun: false,
    hasContainer: false,
  };

  handleStoryChange = scrollToNode => (index, method = 'click') => {
    if (!stories[index]) return;

    // Prevents button nav on mobile from causing multiple stories to be skipped
    if (
      window.matchMedia('screen and (max-width: 767px)').matches &&
      method === 'scroll'
    )
      return;

    this.setState(
      () => ({
        storyIndex: index,
      }),
      () => {
        if (method === 'click')
          scrollToNode(
            `story-${index}`,
            this.calculateOffset(stories[index].customViewportOffsetPercent)
          );

        ReactGA.event({
          category: 'Navigation',
          action: `Move to story by ${method}`,
          value: index,
          label: index.toString(),
        });

        if (index === 0) {
          setTimeout(() => {
            this.setState(() => ({
              hasBegun: true,
            }));
          }, 5000);
        }
      }
    );
  };

  handleStart = scrollToNode => (method = 'click') => {
    this.setState(
      () => ({
        storyIndex: 0,
      }),
      () => {
        if (method === 'click')
          scrollToNode(
            `story-0`,
            this.calculateOffset(stories[0].customViewportOffsetPercent)
          );

        ReactGA.event({
          category: 'Navigation',
          action: `Move to story by ${method}`,
          value: 0,
          label: '0',
        });

        setTimeout(() => {
          this.setState(() => ({
            hasBegun: true,
          }));
        }, 5000);
      }
    );
  };

  calculateOffset = (customViewportOffsetPercent = 0) => {
    const { clientHeight } = document.getElementsByTagName('aside')[0];

    return (clientHeight / 100) * customViewportOffsetPercent;
  };

  handleRestart = () => {
    this.setState(() => ({
      storyIndex: null,
    }));
  };

  handlePageLoad = index => () => {
    if (index === 0) {
      this.setState(
        () => ({
          isFirstPageReady: true,
        }),
        () => {
          document.body.classList.remove('armistice--loading');
        }
      );
    }
  };

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);

    document.body.classList.add('armistice--loading');

    this.setState(
      () => ({
        hasContainer: true,
      }),
      () => {
        setTimeout(() => {
          this.refs.container.scrollTo(0, 0);
        }, 500);
      }
    );
  }

  render() {
    const { isAuthenticated } = this.props;
    const { storyIndex, isFirstPageReady, hasBegun, hasContainer } = this.state;
    const totalStories = stories.length - 1;

    return (
      <React.Fragment>
        {!isAuthenticated && <LoggedOut isActive={hasBegun} />}
        <div className={style.scrollContainer} ref="container">
          {hasContainer && (
            <AnchorProvider>
              <AnchorContext.Consumer>
                {({ scrollToNode }) => (
                  <main className={style.Armistice}>
                    <Intro
                      onReset={this.handleRestart}
                      onProgress={this.handleStart(
                        scrollToNode(this.refs.container)
                      )}
                      showStartButton={isFirstPageReady}
                    />

                    <Progress
                      currentPage={storyIndex}
                      pageCount={totalStories}
                    />
                    <div className={style.content}>
                      <Newspaper
                        storyIndex={storyIndex}
                        totalStories={stories.length - 1}
                        onStoryChange={this.handleStoryChange(
                          scrollToNode(this.refs.container)
                        )}
                        intersectionRoot={this.refs.container}
                        onPageLoad={this.handlePageLoad}
                      />
                      <Sidebar
                        storyIndex={storyIndex}
                        onStoryChange={this.handleStoryChange(
                          scrollToNode(this.refs.container)
                        )}
                      />
                    </div>
                  </main>
                )}
              </AnchorContext.Consumer>
            </AnchorProvider>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(style)(Armistice);

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Transition } from 'react-transition-group';

import style from './style.scss';

import { stories } from '../../data';

export class Sidebar extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.node && prevProps.storyIndex !== this.props.storyIndex) {
      this.node.scroll({ top: 0, behavior: 'smooth' });
    }
  }

  revealContent = () => {
    if (this.node) {
      this.node.scroll({
        top: this.node.getBoundingClientRect().height,
        behavior: 'smooth',
      });
    }
  };

  render() {
    const { storyIndex, onStoryChange } = this.props;

    const story = stories[storyIndex];

    return (
      <Transition in={!!story} timeout={200}>
        {state => (
          <div
            className={[style.Sidebar, style[state]].join(' ')}
            ref={node => (this.node = node)}
          >
            {story && (
              <React.Fragment>
                <div className={style.content}>
                  <div className={style.excerpt}>
                    <span className={style.number}>
                      Excerpt {storyIndex + 1} of {stories.length}
                    </span>
                    <story.Excerpt />
                  </div>

                  <div className={style.commentary}>
                    <div className={style.author}>
                      <img src={require(`./T.png`)} />
                      <h4>Times Archive</h4>
                      <h5>Annotation</h5>
                    </div>
                    <story.Commentary />
                  </div>
                </div>
                <nav>
                  <button
                    disabled={storyIndex - 1 < 0}
                    onClick={() => onStoryChange(storyIndex - 1, 'click')}
                  >
                    Previous
                  </button>

                  <button onClick={this.revealContent}>
                    <i className="Icon Icon--arrowDown" />
                  </button>

                  <button
                    disabled={storyIndex + 1 >= stories.length}
                    onClick={() => onStoryChange(storyIndex + 1, 'click')}
                  >
                    Next
                  </button>
                </nav>
              </React.Fragment>
            )}
          </div>
        )}
      </Transition>
    );
  }
}

export default withStyles(style)(Sidebar);

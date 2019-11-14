// Libraries
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Transition } from 'react-transition-group';

// Styles
import style from './style.scss';

import mainImage from './header.jpg';

// Component
const LoggedOut = ({ isActive }) => (
  <Transition in={isActive} timeout={200}>
    {state => (
      <div className={[style.LoggedOut, style[state]].join(' ')}>
        <div className={style.overlay} />
        <div className={style.container}>
          <aside style={{ backgroundImage: `url(${mainImage})` }} />
          <main>
            <h1 className="Headline">Want to read more?</h1>
            <p className="Dip">
              Register a few details to discover how the Times reported the
              armistice
            </p>
            <a
              className="SubscriptionBlock-btn SubscriptionBlock-btn-primary"
              href="https://join.thetimes.co.uk/?pc=regacc&gotoUrl=https://www.thetimes.co.uk/article/armistice-end-first-world-war-ww1-psnx52d2k"
            >
              Register now
            </a>
            <span>No credit card required</span>
          </main>
        </div>
      </div>
    )}
  </Transition>
);

// Export
export default withStyles(style)(LoggedOut);

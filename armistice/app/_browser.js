/* global document */

// Libraries
import 'intersection-observer';
import 'stickyfilljs';
import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './app';

const context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  },
};

const render = () => {
  const renderElement = document.getElementById('times-armistice-app');
  const isAuthenticated = renderElement.classList.contains(
    'times-armistice-app__authenticated'
  );

  // Render the app
  ReactDOM.render(
    <App context={context} isAuthenticated={isAuthenticated} />,
    renderElement
  );
};

render();

export default render;

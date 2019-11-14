/* global document */

// Libraries
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// App
import App from './app.js';

if (typeof document !== 'undefined') {
  require('./_browser');
}

export default (locals, callback) => {
  const css = new Set();

  const context = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: (...styles) => {
      styles.forEach(style => css.add(style._getCss()));
    },
  };

  // Statically render the app for both authenticated and unauthenticated users
  const htmls = {
    auth: ReactDOMServer.renderToString(
      <App context={context} authenticated={true} />
    ),
    unAuth: ReactDOMServer.renderToString(
      <App context={context} authenticated={false} />
    ),
  };

  const generator = {
    component: data => require('./templates/component')(data),
    article: data => require('./templates/article')(data),
    html: data => require('./templates/html')(data),
  };

  const data = Object.assign(
    {},
    {
      criticalCss: [...css].join(''),
      htmlAuth: htmls['auth'],
      htmlUnAuth: htmls['unAuth'],
      updatedDate: new Date().toISOString(),
    },
    require('../times.config')
  );

  let response;

  // Switch over the output type
  switch (locals.output) {
    case 'html':
      response = generator.html(data);
      break;
    case 'component-xml':
      response = generator.component(data);
      break;
    case 'article-xml':
      response = generator.article(data);
      break;
  }

  // Return it to webpack
  callback(null, response);
};

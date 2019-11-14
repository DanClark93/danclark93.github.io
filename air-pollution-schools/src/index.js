// @flow
/* global document, HTMLElement */

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

import { processAttributes } from './helpers';

const prototype = Object.create(HTMLElement.prototype);
prototype.createdCallback = function() {
  ReactDOM.render(<Root {...processAttributes(this.attributes)} />, this);
};
prototype.attachedCallback = function() {};
prototype.attributeChangedCallback = function() {};
prototype.detachedCallback = function() {};
document.registerElement('times-airpollution-schools', {
  prototype,
});

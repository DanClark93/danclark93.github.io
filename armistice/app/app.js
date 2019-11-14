// Libraries
import React from 'react';

import PropTypes from 'prop-types';

// Components
import Armistice from './components/Armistice';

const ContextType = {
  insertCss: PropTypes.func.isRequired,
};

class App extends React.Component {
  getChildContext() {
    return this.props.context;
  }

  render() {
    const { isAuthenticated } = this.props;

    return <Armistice isAuthenticated={isAuthenticated} />;
  }
}

App.childContextTypes = ContextType;

export default App;

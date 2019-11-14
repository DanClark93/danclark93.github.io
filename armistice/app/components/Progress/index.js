import React from 'react';
import style from './style.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ProgressBar from 'react-progressbar';

export class Progress extends React.Component {
  render() {
    const { currentPage, pageCount } = this.props;
    const progress = (currentPage / pageCount) * 100;
    return (
      <ProgressBar
        className={style.ProgressContainer}
        completed={progress}
        color="#0088cc"
        height="100%"
      />
    );
  }
}

export default withStyles(style)(Progress);

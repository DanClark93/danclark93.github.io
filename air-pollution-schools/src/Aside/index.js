import React from 'react';
import CountUp from 'react-countup';
import { drawChart } from './chart';

import style from './style.scss';

export default class Aside extends React.Component {
  componentDidMount() {
    const { school } = this.props;
    drawChart(this.node, school);
  }

  componentDidUpdate(prevProps) {
    const { school } = this.props;

    if (prevProps.school !== school) {
      this.node.innerHTML = '';
      drawChart(this.node, school);
    }
  }

  render() {
    const { school } = this.props;

    return (
      <div className={style.Aside}>
        <h2>Air quality at your school</h2>
        <h3>
          The particulate pollution (µg/m3) that children at {school.name} are
          exposed to. Anything higher than 10 is considered dangerous by the
          World Health Organisation (WHO)
        </h3>

        <svg ref={node => (this.node = node)} />
        <p>
          The lowest, average and highest represent air pollution recordings
          from across the school grounds
        </p>
      </div>
    );
  }
}

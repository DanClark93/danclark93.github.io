// @flow
import React, { type StatelessFunctionalComponent } from 'react';

import style from './style.scss';

type Props = {
  headline: ?string,
  standfirst: ?string,
  label: ?string,
};
const Heading: StatelessFunctionalComponent<Props> = ({
  headline,
  standfirst,
  label,
}) => (
  <header className={style.Heading}>
    {label && <div className={style.Label}>{label}</div>}
    {headline && <div className={style.Headline}>{headline}</div>}
    {standfirst && <div className={style.Standfirst}>{standfirst}</div>}
  </header>
);

export default Heading;

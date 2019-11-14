//Libraries
import React from 'react';
import Select from 'react-select';

import style from './style.scss';

export class Search extends React.Component {
  render() {
    const { options, onChange, isDisabled } = this.props;

    return (
      <div className={style.SelectDropdown}>
        <Select
          isSearchable={true}
          options={options}
          onChange={val => {
            onChange(val);
          }}
          placeholder="Search for a school"
          isDisabled={isDisabled}
          ref="dropdown"
        />
      </div>
    );
  }
}

export default Search;

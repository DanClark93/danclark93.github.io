// @flow
import React from 'react';
import joinClasses from 'join-classes';
import Select from 'react-select';
import { getColor } from '../colors.js';

import style from './style.scss';

const reorder = (a, b) =>
  Object.keys(b).reduce(
    (acc, k) => ({
      ...acc,
      [k]: a[k],
    }),
    {}
  );

class Table extends React.Component {
  state = {
    show: 5,
    skip: 0,
    searchTerm: null,
    sortBy: 'rank',
    reverseSort: false,
    count: null,
    error: false,
    searchPlaceholder: 'Search',
  };

  //   handleReorder = key => {
  //     const { reverseSort, sortBy } = this.state;
  //     const { data } = this.props;

  //     this.setState({
  //       reverseSort: sortBy === key && reverseSort === false,
  //       sortBy: key,
  //     });

  //     if (this.state.reverseSort) {
  //       data.sort((a, b) => {
  //         return b[key] < a[key] ? 1 : -1;
  //       });
  //     } else {
  //       data.sort((a, b) => {
  //         return b[key] > a[key] ? 1 : -1;
  //       });
  //     }
  //   };

  render() {
    const {
      enableSearch,
      enablePageFilter,
      columns,
      onPageFilterChange,
      onSearchChange,
      data,
      onPreviousClick,
      onNextClick,
      enableNavigation,
      selected,
      pollution,
    } = this.props;
    const {
      skip,
      show,
      count,
      searchTerm,
      sortBy,
      reverseSort,
      searchPlaceholder,
    } = this.state;
    return (
      <div className={style.Container}>
        <section className={style.Controls}>
          {enablePageFilter && (
            <Select
              value={show}
              clearable={false}
              searchable={false}
              onChange={onPageFilterChange}
              options={[5, 10, 20, 50].map(v => ({
                value: v,
                label: v,
              }))}
              className={style.Select}
            />
          )}

          {enableSearch && (
            <input
              type="text"
              name="search"
              placeholder={searchPlaceholder}
              onChange={onSearchChange}
            />
          )}
        </section>

        <table className={joinClasses(style.Table, style.mobile)}>
          {columns && (
            <thead>
              <tr>
                {Object.entries(columns).map(([key, column]) => (
                  <th
                    key={key}
                    className={joinClasses(
                      column.isSortable && style.isSortable,
                      sortBy === key && style.isSorted,
                      sortBy === key && reverseSort
                        ? style.sortUp
                        : style.sortDown
                    )}
                    style={column.style || {}}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {data && data.length === 0 && (
              <tr
                className={style.messageRow}
                style={{
                  height: `calc(6rem * ${show})`,
                }}
              >
                <td colSpan={Object.keys(columns).length}>
                  No results containing your search term were found
                </td>
              </tr>
            )}

            {data &&
              data.length > 0 &&
              data.map((d, i) => (
                <tr
                  key={i}
                  style={
                    d.name === selected
                      ? { border: '2px solid ' + getColor(pollution) }
                      : {}
                  }
                >
                  {Object.entries(reorder(d, columns)).map(([key, value]) => (
                    <td
                      key={key}
                      style={columns[key].style || {}}
                      data-name={columns[key].label}
                    >
                      {columns[key].render
                        ? columns[key].render(value)
                        : key === 'avg2016'
                        ? value.toFixed(2)
                        : value}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        {enableNavigation && (
          <section className={style.Navigation}>
            {count && data && !searchTerm && (
              <p>
                Displaying {(skip + 1).toLocaleString()} to{' '}
                {(skip + data.length).toLocaleString()} of{' '}
                {count.toLocaleString()} entries
              </p>
            )}
            {count && data && searchTerm && (
              <p>
                Displaying {skip + 1} to {skip + data.length} results for "
                {searchTerm}"
              </p>
            )}
            <aside>
              <button onClick={onPreviousClick}>
                <i className="Icon Icon--arrowLeft" />
              </button>

              <button onClick={onNextClick}>
                <i className="Icon Icon--arrowRight" />
              </button>
            </aside>
          </section>
        )}
      </div>
    );
  }
}
export default Table;

/* global fetch */
import React from 'react';
import Heading from '../Heading';
import Search from '../Search';
import EsriMap from '../EsriMap';
import Legend from '../Legend';
import LineChart from '../LineChart';
import BarChart from '../BarChart';
import Table from '../Table';
import { schools } from '../data';
import style from './style.scss';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-75890899-2');

export class Root extends React.Component {
  state = {
    school: null,
    error: null,
    borough: null,
    closest: null,
    isDisabled: false,
  };

  handleSchoolSearch = urn => {
    if (urn) {
      // disable search until barchart animation has finished
      this.loadSchoolData(urn.value);
    }
  };

  loadSchoolData = urn =>
    fetch(
      `https://jp7t8o0ap8.execute-api.eu-west-1.amazonaws.com/prod/school/?urn=${urn}`
    )
      .then(res => {
        switch (res.status) {
          case 200:
            return res.json();
          default:
            throw new Error('School not found. Please try searching again');
        }
      })
      .then(json => {
        if (json) {
          this.setState({
            school: json['0'],
            error: null,
          });
          this.loadBoroughData(json['0'].borough);
          this.loadClosestSchoolsData(json['0'].catchid);
          ReactGA.event({
            category: 'airpollution-schools-component',
            action: 'School searched - ' + urn,
          });
        } else {
          this.enableSearch();
          throw new Error('School not found. Please try searching again');
        }
      })
      .catch(e => {
        this.setState({ error: e.message });
      });

  loadBoroughData = borough =>
    fetch(
      `https://jp7t8o0ap8.execute-api.eu-west-1.amazonaws.com/prod/school/?borough=${borough}`
    )
      .then(res => {
        switch (res.status) {
          case 200:
            return res.json();
          default:
            throw new Error('School borough not found');
        }
      })
      .then(json => {
        if (json) {
          this.setState({
            borough: json,
          });
        }
      })
      .catch(e => {
        this.setState({ error: e.message });
      });

  loadClosestSchoolsData = catchment =>
    fetch(
      `https://jp7t8o0ap8.execute-api.eu-west-1.amazonaws.com/prod/school/?urn=${catchment}`
    )
      .then(res => {
        switch (res.status) {
          case 200:
            return res.json();
          default:
            throw new Error('Closest schools not found');
        }
      })
      .then(json => {
        if (json) {
          this.setState({
            closest: json,
          });
        }
      })
      .catch(e => {
        this.setState({ error: e.message });
      });

  componentDidMount() {
    // testing
    // this.loadSchoolData(100822);
    ReactGA.event({
      category: 'airpollution-schools-component',
      action: 'pageview',
    });
  }

  render() {
    const { headline, standfirst, label } = this.props;
    const { school, borough, closest, isDisabled, error } = this.state;
    const columns = {
      rank: {
        label: 'Rank',
        style: {
          textAlign: 'center',
        },
        render: v => parseInt(v).toLocaleString(),
      },
      london_rank: {
        label: 'London rank',
        style: {
          textAlign: 'center',
        },
        render: v => parseInt(v).toLocaleString(),
      },
      name: {
        label: 'Name',
        style: {
          minWidth: '36%',
          textAlign: 'left',
        },
      },
      type: {
        label: 'Type',
        style: {
          textAlign: 'center',
        },
      },
      number_of_pupils: {
        label: 'Pupils',
        style: {
          textAlign: 'center',
        },
      },
      avg2016: {
        label: 'Air quality',
        style: {
          textAlign: 'center',
        },
      },
    };

    closest &&
      closest.sort((a, b) => {
        return b.rank < a.rank ? 1 : -1;
      });

    return (
      <main>
        <div className={style.HeadingContainer}>
          <Heading label={label} headline={headline} standfirst={standfirst} />
          <Search
            onChange={this.handleSchoolSearch}
            options={schools}
            isDisabled={isDisabled}
          />
        </div>
        {error && (
          <p className={style.error}>
            Unable to load school information. Please try again
          </p>
        )}

        {borough && school && closest && (
          <React.Fragment>
            <h2>How does your borough compare?</h2>
            <BarChart data={borough} selected={school} />
            <h2>Is air quality at your school improving?</h2>
            <h3>
              At {school.name} the annual average in 2030 is predicted to be{' '}
              {school.avg2030.toFixed(1)}µg/m&sup3; —{' '}
              {school.avg2030 > school.avg2013 ? 'an increase' : 'a drop'} of{' '}
              {Math.abs(
                ((school.avg2030 - school.avg2013) / school.avg2013) * 100
              ).toFixed(1)}
              % compared to 2013
            </h3>
            <div className={style.Middle}>
              <div className={style.Map}>
                <EsriMap school={school} />
                <Legend />
              </div>
              <div className={style.LineChart}>
                <LineChart data={school} />
              </div>
            </div>
            <h2>Is there a school with cleaner air near you?</h2>
            <h3>The list below shows your ten closest schools</h3>
            <Table
              enablePageFilter={false}
              enableSearch={false}
              columns={columns}
              enableNavigation={false}
              data={closest}
              selected={school.name}
              pollution={school.avg2016}
            />
            <p className={style.Methodology}>
              How did we calculate these scores — and why are they only
              available for London? Read our{' '}
              <a
                target="_blank"
                href="https://www.thetimes.co.uk/edition/news/air-pollution-at-london-schools-frequently-asked-questions-2pdrb8gnp"
              >
                methodology
              </a>
            </p>
            <p className={style.Source}>
              Source: Greater London Authority, Ordnance Survey, Department for
              Education
            </p>
          </React.Fragment>
        )}
      </main>
    );
  }
}

export default Root;

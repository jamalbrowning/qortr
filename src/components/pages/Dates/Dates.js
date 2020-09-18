import React from 'react';

import dateData from '../../helpers/data/dateData';
import DateCard from '../DateCards/DateCards';

class Dates extends React.Component {
  state = {
    dates: [],
  }

  componentDidMount() {
    dateData.getDates()
      .then((dates) => this.setState({ dates }))
      .catch((err) => console.error('get dates broke', err));
  }

  render() {
    const { dates } = this.state;

    const dateCard = dates.map((date) => <DateCard key={date.id} date={date}/>);

    return (
      <div className="UserPage">
        <h1>All Dates</h1>
        <div className="DateCard">{dateCard}</div>
      </div>
    );
  }
}

export default Dates;

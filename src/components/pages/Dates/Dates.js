import React from 'react';

import dateData from '../../helpers/data/dateData';
import DateCard from '../DateCards/DateCards';

class Dates extends React.Component {
  state = {
    dates: [],
  }

  getDates = () => {
    dateData.getDates()
      .then((dates) => this.setState({ dates }))
      .catch((err) => console.error('get dates broke', err));
  }

  componentDidMount() {
    this.getDates();
  }

  deleteDate = (dateId) => {
    dateData.deleteDate(dateId)
      .then(() => {
        this.getDates();
      })
      .catch((err) => console.error('delete dates dint work', err));
  }

  render() {
    const { dates } = this.state;
    const dateCard = dates.map((date) => <DateCard key={date.id} date={date} deleteDate={this.deleteDate}/>);

    return (
      <div className="UserPage">
        <div className="DateCard">{dateCard}</div>
      </div>
    );
  }
}

export default Dates;

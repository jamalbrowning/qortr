import React from 'react';

import dateData from '../../helpers/data/dateData';
import DateCard from '../DateCards/DateCardRandom';

import '../Dates/Dates.scss';

class DateGen extends React.Component {
  state = {
    dates: [],
    randomdate: {},
  }

 refreshPage = () => {
   window.location.reload(false);
 };

  getRandomDates = () => {
    dateData.getDates()
      .then((res) => {
        this.setState({ dates: res });
        const randomDatePick = Math.floor(Math.random() * (res.length));
        console.error('this is random datre', res[randomDatePick]);
        this.setState({ randomdate: res[randomDatePick] });
      })
      .catch((err) => console.error('get dates broke', err));
  }

  componentDidMount() {
    this.getRandomDates();
  }

  render() {
    const { randomdate } = this.state;
    // console.log('this is dates', dates);
    // console.log('randooooo', randomDatePick);
    // console.log(dates[randomDatePick]);
    // const cardToUse = dates[randomDatePick];
    // console.log('carddddd', cardToUse);
    // console.log('fromarray', Object.keys(cardToUse))
    // const newCards = [];
    // newCards.push(cardToUse);
    // console.log('CARD TO USE YO', cardToUse.typeOf())

    // console.log('id', cardToUse.id)
    const dateCard = <DateCard key={randomdate.id} date={randomdate} deleteDate={this.deleteDate}/>;

    return (
      <div className="UserPage">
        <div className="DateCard">{dateCard}</div>
        <button className="btn btn-danger new-date" onClick={this.refreshPage}> New Date</button>
      </div>
    );
  }
}

export default DateGen;

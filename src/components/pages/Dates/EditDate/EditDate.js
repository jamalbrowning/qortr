import React from 'react';

import dateData from '../../../helpers/data/dateData';

class EditDate extends React.Component {
  state = {
    date: {
      title: '',
      imgUrl: '',
      description: '',
      dateFormat: '',
    },
  }

  componentDidMount() {
    dateData.getDateById(this.props.match.params.dateId)
      .then((res) => {
        const date = res.data;
        this.setState({ date });
      })
      .catch((err) => console.error('can not get date', err));
  }

  changeTitleEvent = (e) => {
    e.preventDefault();
    const { date } = this.state;
    date.title = e.target.value;
    this.setState({ date });
  };

  changeImgEvent = (e) => {
    e.preventDefault();
    const { date } = this.state;
    date.imgUrl = e.target.value;
    this.setState({ date });
  };

  changeDescriptionEvent = (e) => {
    e.preventDefault();
    const { date } = this.state;
    date.description = e.target.value;
    this.setState({ date });
  };

  changeDateFormatEvent = (e) => {
    e.preventDefault();
    const { date } = this.state;
    date.dateFormat = e.target.value;
    this.setState({ date });
  };

  updateDate = (e) => {
    e.preventDefault();
    const { dateId } = this.props.match.params;

    dateData
      .updateDate(dateId, this.state.date)
      .then(() => {
        this.props.history.push(`/dates/${dateId}`);
      })
      .catch((err) => console.error('edit date broke', err));
  };

  render() {
    const {
      title,
      imgUrl,
      description,
      dateFormat,
    } = this.state.date;

    return (
      <div className="EditDate">
        <h1>EditDate</h1>
        <h1>NewDate</h1>
        <h1>Add New Stuff</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="">title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Date Title"
              value={title}
              onChange={this.changeTitleEvent}
              />
              <label htmlFor="">Image</label>
              <input
                type="text"
                className="form-control"
                id="dateImage"
                placeholder="Enter Item Image URL"
                value={imgUrl}
                onChange={this.changeImgUrlEvent}
                />
                <label htmlFor="">Description</label>
              <input
                type="text"
                className="form-control"
                id="dateDesc"
                placeholder="Enter Date Description"
                value={description}
                onChange={this.changeDescriptionEvent}
                />
                <label htmlFor="">Date Format</label>
              <input
                type="text"
                className="form-control"
                id="dateFormat"
                placeholder="Enter Date Format"
                value={dateFormat}
                onChange={this.changeDateFormatEvent}
                />
          </div>
          <button className="btn btn-warning" onClick={this.updateDate}>Save Item</button>
        </form>
      </div>
    );
  }
}

export default EditDate;

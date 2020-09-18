import React from 'react';

import dateData from '../../helpers/data/dateData';

class NewDate extends React.Component {
  state = {
    title: '',
    imgUrl: '',
    description: '',
    dateFormat: '',
  }

  changeTitleEvent = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  changeImgUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imgUrl: e.target.value });
  }

  changeDescriptionEvent = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  changeDateFormatEvent = (e) => {
    e.preventDefault();
    this.setState({ dateFormat: e.target.value });
  }

  saveNewDate = (e) => {
    e.preventDefault();
    const {
      title,
      description,
      imgUrl,
      dateFormat,
    } = this.state;

    const newDate = {
      title,
      description,
      imgUrl,
      dateFormat,
    };

    dateData.createDate(newDate)
      .then((res) => {
        this.props.history.push('/dates');
      })
      .catch((err) => console.error('cant create new date', err));
  }

  render() {
    const {
      title,
      imgUrl,
      description,
      dateFormat,
    } = this.state;

    return (
      <div className="newDate">
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
          <button className="btn btn-warning" onClick={this.saveNewDate}>Save Item</button>
        </form>
      </div>
    );
  }
}

export default NewDate;

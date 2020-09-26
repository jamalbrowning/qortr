import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Card, CardImg, CardText, CardBody,
} from 'reactstrap';

import dateShape from '../../helpers/props/dateShape';

import './DateCards.scss';

class DateCards extends React.Component {
  static propTypes = {
    date: dateShape.dateShape,
    deleteDate: PropTypes.func.isRequired,
  }

  deleteDateEvent = (e) => {
    e.preventDefault();
    const { date, deleteDate } = this.props;
    deleteDate(date.id);
  }

  render() {
    const { date } = this.props;
    const editLink = `/edit/${date.id}`;

    return (
      <div className="dateCard" id={ date.dateId }>
      <Card>
       <h4 className="cardTitle">{date.title}</h4>
       <CardImg top width="100%" src={ date.imgUrl } alt="Card image cap" />
        <CardBody className="cardBody">
          <p className="realFormat">Meeting Enviornment</p>
          <CardText className="format">{date.dateFormat}</CardText>
          <span className="line"></span>
          <p className="realFormat">How to</p>
          <CardText className="description">{date.description}</CardText>

        </CardBody>
        <div>
          <Link to={editLink} className="btn btn-success m-3"><i className="fas fa-pencil-alt"></i></Link>
          <button className="btn btn-outline-danger m-3" onClick={this.deleteDateEvent}><i className="fas fa-trash-alt"></i></button>
          </div>
      </Card>
    </div>
    );
  }
}

export default DateCards;

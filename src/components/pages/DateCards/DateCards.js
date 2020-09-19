import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
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
      <div className="dateCard">
      <Card>
        <CardImg top width="100%" src={ date.imgUrl } alt="Card image cap" />
        <CardBody>
          <CardTitle>{date.title}</CardTitle>
          <CardText>{date.dateFormat}</CardText>
          <CardText>{date.description}</CardText>
          <Link to={editLink} className="btn btn-success m-3"><i className="fas fa-pencil-alt"></i></Link>
          <button className="btn btn-secondary m-3" onClick={this.deleteDateEvent}><i className="fas fa-trash-alt"></i></button>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default DateCards;

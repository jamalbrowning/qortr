import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
} from 'reactstrap';

import dateShape from '../../helpers/props/dateShape';

import './DateCards.scss';

class DateCardRandom extends React.Component {
  static propTypes = {
    date: dateShape.dateShape,
  }

  render() {
    const { date } = this.props;

    return (
      <div className="dateCard" id={ date.dateId }>
      <Card>
      <CardTitle className="cardTitle">{date.title}</CardTitle>
        <CardImg top width="100%" src={ date.imgUrl } alt="Card image cap" />
        <CardBody className="cardBody">
          <p className="realFormat">How to Interact</p>
          <CardText className="format">{date.dateFormat}</CardText>
          <span className="line"></span>
          <p className="realFormat">What to do</p>
          <CardText>{date.description}</CardText>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default DateCardRandom;
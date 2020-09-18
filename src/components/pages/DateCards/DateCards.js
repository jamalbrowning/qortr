import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
} from 'reactstrap';

import dateShape from '../../helpers/props/dateShape';

import './DateCards.scss';

class DateCards extends React.Component {
  static propTypes = {
    date: dateShape.dateShape,
  }

  render() {
    const { date } = this.props;

    return (
      <div className="dateCard">
      <Card>
        <CardImg top width="100%" src={ date.imgUrl } alt="Card image cap" />
        <CardBody>
          <CardTitle>{date.title}</CardTitle>
          <CardText>{date.dateFormat}</CardText>
          <CardText>{date.description}</CardText>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default DateCards;

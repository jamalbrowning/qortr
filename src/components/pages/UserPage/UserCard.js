import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
} from 'reactstrap';

import userShape from '../../helpers/props/userShape';
import './UserPage.scss';

class UserCard extends React.Component {
  static propTypes = {
    user: userShape.userShape,
  }

  render() {
    const { user } = this.props;

    return (
      <div className="userCard">
      <Card className="profile-card">
        <CardImg top width="100%" src={ user.profilePic } alt="Card image cap" />
        <CardBody>
          <CardTitle>{user.username}</CardTitle>
          <CardText>{user.status}</CardText>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default UserCard;

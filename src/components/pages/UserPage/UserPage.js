import React from 'react';

import userData from '../../helpers/data/userData';
import authData from '../../helpers/data/authData';
import UserCard from './UserCard';

import './UserPage.scss';

class UserPage extends React.Component {
  state = {
    users: [],
  }

  componentDidMount() {
    userData.getUserByUid(authData.getUid())
      .then((users) => this.setState({ users }))
      .catch((err) => console.error('get user broke', err));
  }

  render() {
    const { users } = this.state;

    const userCard = users.map((user) => <UserCard key={user.id} user={user}/>);

    return (
      <div className="UserPage">
        <h1>Profile</h1>
        <div className="UserCard">{userCard}</div>
      </div>
    );
  }
}

export default UserPage;

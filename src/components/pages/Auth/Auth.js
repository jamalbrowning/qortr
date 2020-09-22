import React from 'react';

import 'firebase/auth';
import { Link } from 'react-router-dom';

import './Auth.scss';

class Auth extends React.Component {
  render() {
    return (
      <div className="Auth">
        <p>Welcome to <span className="qortr">qortr.</span></p>
        <p>Stop thinking and get to dating.</p>
        <Link to="/dateGen" className="btn btn-success m-3 generateBTN"><i class="fas fa-hand-holding-heart fa-2x"></i></Link>

      </div>
    );
  }
}

export default Auth;

import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <p>Welcome to qortr.</p>
        <button className=" login btn btn-info" onClick={this.loginClickEvent}><i className="fab fa-google fa-2x"></i>oogle login</button>
      </div>
    );
  }
}

export default Auth;

import React from 'react';
import './App.scss';
import {
  Switch,
  BrowserRouter,
  Redirect,
  Route,
} from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../components/helpers/data/connection';

import MyNavBar from '../components/pages/MyNavBar/MyNavBar';
import Auth from '../components/pages/Auth/Auth';
import Contact from '../components/pages/Contact/Contact';
import NewDate from '../components/pages/NewDate/NewDate';
import Dates from '../components/pages/Dates/Dates';
import Landing from '../components/pages/Landing/Landing';
import UserPage from '../components/pages/UserPage/UserPage';
// import Footer from '../components/pages/Footer/Footer';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavBar authed={authed} />
            <div className="container">
              <Switch>
                <PrivateRoute path="/home" component={Landing} authed={authed}/>
                <PrivateRoute path="/new" component={NewDate} authed={authed}/>
                <Route path="/contact" component={Contact}/>
                <PrivateRoute path="/dates" component={Dates} authed={authed}/>
                <PrivateRoute path="/profile" component={UserPage} authed={authed}/>
                <PublicRoute path="/auth" component={Auth} authed={authed}/>
                <Redirect from="*" to="/home" />
              </Switch>
            </div>
            {/* <Footer/> */}
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

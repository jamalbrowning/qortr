import React from 'react';
import './App.scss';

import 'firebase/auth';
import fbConnection from '../components/helpers/data/connection';

import MyNavBar from '../components/pages/MyNavBar/MyNavBar';

fbConnection();
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
      </div>
    );
  }
}

export default App;

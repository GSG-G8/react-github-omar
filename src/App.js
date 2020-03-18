import React from 'react';
import './App.css';
import Orgs from './components/orgs';
import Tabs from './components/tabs';
import Users from './components/users';
import User from './components/user';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="left_side">
          <Orgs />
          <Users />
        </div>
        <div className="right_side">
          <Tabs />
          <div className="content">
            <User />
          </div>
        </div>
      </div>
    );
  }
}

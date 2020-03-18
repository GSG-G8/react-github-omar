import React from 'react';
import './App.css';
import Orgs from './components/orgs';
import Tabs from './components/tabs';
import Users from './components/users';
import Repos from './components/repos';
import User from './components/user';

import DATA from './config.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      org: 'GSG-G8',
      mode: 'users',
      users: [],
      repos: [],
      userIndex: -1,
      repoIndex: -1,
    };
  }

  componentDidMount() {
    const { mode, org } = this.state;
    if (mode === 'users') {
      fetch(
        `https://api.github.com/orgs/${org}/members?access_token=${DATA.token}&per_page=100`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ users: data });
        });
    } else if (mode === 'repos') {
      fetch(
        `https://api.github.com/orgs/${org}/repos?access_token=${DATA.token}&per_page=100`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ repos: data });
        });
    }
  }

  selectUser = index => {
    this.setState({ userIndex: index });
  };

  selectRepo = index => {
    this.setState({ repoIndex: index });
  };

  render() {
    const { mode, users, repos, userIndex, repoIndex } = this.state;

    return (
      <div className="App">
        <div className="left_side">
          <Orgs />
          {mode === 'users' && (
            <Users
              users={users}
              selected={userIndex}
              callBack={this.selectUser}
            />
          )}
          {mode === 'repos' && (
            <Repos repos={repos} callBack={this.selectRepo} />
          )}
        </div>
        <div className="right_side">
          <Tabs />
          <div className="content">
            {mode === 'users' && userIndex >= 0 && (
              <User user={users[userIndex]} />
            )}
            {mode === 'repos' && repoIndex >= 0 && (
              <User repo={repos[repoIndex]} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

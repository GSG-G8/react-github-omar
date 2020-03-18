import React from 'react';

export default class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { repos } = this.props;

    return (
      <div className="repos">
        <ul>
          {repos.map(repo => (
            <li key={repo.login}>
              <a href="./">{repo.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

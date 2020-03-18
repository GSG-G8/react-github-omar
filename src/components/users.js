import React from 'react';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="users">
        <ul>
          <li>
            <a href="./">user_name</a>
          </li>
          <li>
            <a href="./">user_name</a>
          </li>
          <li>
            <a href="./">user_name</a>
          </li>
        </ul>
      </div>
    );
  }
}

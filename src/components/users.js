import React from 'react';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      callBack: this.props.callBack,
    };
  }

  selectUser(index) {
    this.state.callBack(index);
  }

  render() {
    const { users } = this.props;

    return (
      <div className="users">
        <ul className="users_list">
          {users.map((user, index) => (
            <li key={user.login} className="users_item">
              <a href="javascript:void(0);" onClick={() => this.selectUser(index)}>
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Users.propTypes = {
//   users: React.PropTypes.number,
// };

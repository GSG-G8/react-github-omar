import React from 'react';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: 'name',
      // login: 'omar-dahdouh',
      // avatarUrl: 'https://avatars2.githubusercontent.com/u/1?v=4',
    };
  }

  render() {
    //const { name, login, avatarUrl } = this.state;
    const { avatar_url, login, name } = this.props.user;

    return (
      <div className="user">
        <img src={avatar_url} className="avatar" alt={login} />
        <div className="user_info">
          <span className="user_name">{name}</span>
        </div>
      </div>
    );
  }
}

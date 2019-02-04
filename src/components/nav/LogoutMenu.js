import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

function LoginMenu(props) {
  const { onLogin, onRegister, active, style } = props;
  return (
    <Menu.Menu position="right">
      <Menu.Item
        style={style}
        active={active}
        activeClassName="active red"
        onClick={onLogin}
        as={NavLink}
        to='/users/login'
        name='Login' >
        <Icon name='sign in' />LOGIN
      </Menu.Item>
      <Menu.Item
        style={style}
        active={active}
        activeClassName="active red"
        onClick={onRegister}
        as={NavLink}
        to='/users/register'
        name='Register'
      >
        <Icon name='user plus' />REGISTER
      </Menu.Item>
    </Menu.Menu>
  )
}

export default LoginMenu

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu, Image } from 'semantic-ui-react';

function LoginMenu(props) {
  const { onLogout, username } = props;
  return (
    <Menu.Item position="right" >
      <Image avatar spaced="right" src='/Assets/user.png' style={{ marginBottom: 10 }} />
      <Dropdown pointing="top right" text={username}>
        <Dropdown.Menu>
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item text="Settings" icon="settings" />
          <Dropdown.Item as={NavLink} to='/' onClick={onLogout} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}


export default LoginMenu

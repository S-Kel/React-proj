import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';

import { logoutUser } from "../../redux/actions/authenticateUserAction";

import LoginMenu from './LoginMenu';
import LogoutMenu from './LogoutMenu';

class Nav extends Component {
    state = {
        activeItem: ''
    }
    capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleOnLoginClick = (e, { name }) => {
        console.log('handleOnLoginClick');
        this.setState({ activeItem: name });
    }
    handleOnSignoutClick = e => {
        console.log('handleOnSignoutClick');
        this.props.logoutUser();
    }
    handleOnRegisterClick = (e, { name }) => {
        console.log('handleOnRegister');
        this.setState({ activeItem: name });
    }

    render() {
        const loggedInAsAdmin = true;   //TODO: MUST REPLACED THIS LINE
        const { loggedIn, emailToken } = this.props;
        const { activeItem } = this.state;
        console.log('emailToken', emailToken)
        return (
            <Menu className="sticky" icon='labeled' size='mini' style={{ paddingLeft: 20, paddingRight: 20 }} >
                <Menu.Item
                    as={NavLink} to='/'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    exact activeClassName="active red"
                    style={dodgerRed}
                >
                    <Icon name='home' />HOME
                </Menu.Item>
                <Menu.Item
                    as={NavLink} to='/about'
                    name='about'
                    active={activeItem === 'info'}
                    onClick={this.handleItemClick}
                    activeClassName="active red"
                    style={dodgerRed}
                >
                    <Icon name='info' />ABOUT
                </Menu.Item>
                {loggedIn && loggedInAsAdmin && (
                    <Menu.Item
                        as={NavLink} to='/dashboard'
                        name='dashboard'
                        active={activeItem === 'users'}
                        onClick={this.handleItemClick}
                        activeClassName="active red" >
                        <Icon name='users' />DASHBOARD
                    </Menu.Item>)
                }

                <Menu.Item
                    position='right'
                    as={NavLink} to='/create'
                    name='create'
                    active={activeItem === 'add'}
                    onClick={this.handleItemClick}
                    activeClassName="active red"
                    style={dodgerRed}
                >
                    <Icon name='add circle' />CREATE EVENT
                </Menu.Item>
                {/* {loggedIn && loggedInAsAdmin && (<Menu.Item
                        as={NavLink} to='/dashboard'
                        name='dashboard'
                        active={activeItem === 'users'}
                        onClick={this.handleItemClick}
                        activeClassName="active teal" >
                        <Icon name='users' />Dashboard
                        </Menu.Item>)
                } */}

                {
                    loggedIn
                        ? (<LoginMenu
                            username={(emailToken.split('@')[0]).toUpperCase()}
                            onLogout={this.handleOnSignoutClick} />)
                        : (<LogoutMenu
                            active={activeItem === 'sign in'}
                            // onClick={this.handleItemClick}                            
                            onLogin={this.handleOnLoginClick}
                            onRegister={this.handleOnRegisterClick} />)
                }

            </Menu>
        );

    };
};

Nav.propTypes = {
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    emailToken: state.auth.authenticatedUserEmail

})

const dodgerRed = {
    fontFamily: 'Raley, sans-serif',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 2,
    color: '#9d9d9d'

}
// connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default connect(mapStateToProps, { logoutUser })(Nav);

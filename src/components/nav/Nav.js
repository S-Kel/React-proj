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
        const { loggedIn, emailToken } = this.props;
        const { activeItem } = this.state;
        console.log('emailToken', emailToken)
        return (
                <nav>
                    <ul>
                        <li>
                            <Logo />
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                            {'  |  '}
                            <Link to='/about'>About</Link>
                            {'  |  '}
                            <Link to='/contact'>Contact</Link>
                            {loggedIn && ['  |  ', <Link to='/users/logout'>Logout</Link>]}
                            {!loggedIn && ['  |  ', <Link to='/users/register'>Register</Link>, '  |  ', <Link to='/users/login'>Login</Link>]}
                        </li>
                    </ul>
                </nav >
            
            );
    };
};

Nav.propTypes = {
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    // loggedIn: state.auth.loggedIn,
    // emailToken: state.auth.authenticatedUserEmail

})


// connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default connect(mapStateToProps, { logoutUser })(Nav);

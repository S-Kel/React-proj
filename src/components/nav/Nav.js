import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from './Logo';

class Nav extends Component {

    render() {
        const { loggedIn } = this.props
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

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,

})

// connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default connect(mapStateToProps)(Nav);
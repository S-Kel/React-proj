import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';

import { authenticateUser, logoutUser } from "../../redux/actions/authenticateUserAction";

class Authentication extends Component {

    componentWillReceiveProps = async (nextProps) => {
        nextProps.authType === 'logout' && this.props.logoutUser();
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const userRoute = this.props.authType === 'register' ? '/users/register' : '/users/login';
        const postData = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        this.props.authenticateUser(userRoute, postData);
        this.props.loggedIn && console.log('You have been logged in as ', this.props.user)
    };

    render() {
        const { authType } = this.props
        return (
            <Fragment>
                {authType === 'logout' && <Redirect to='/' />}
                {authType === 'register' && <RegistrationForm submit={this.handleSubmit} />}
                {authType === 'login' && <LoginForm submit={this.handleSubmit} />}
            </Fragment>
        );
    };
};

Authentication.propTypes = {
    authType: PropTypes.oneOf(['register', 'login', 'logout']).isRequired,
    authenticateUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    user: state.auth.authenticatedUserEmail
})

// connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default connect(mapStateToProps, { authenticateUser, logoutUser })(Authentication);

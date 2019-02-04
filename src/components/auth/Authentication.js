import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { withLastLocation } from 'react-router-last-location';
import { LandingPg } from '../pages/LandingPage/LandingPg'
import { authenticateUser, logoutUser } from "../../redux/actions/authenticateUserAction";

class Authentication extends Component {


    handleSubmit = (event) => {
        event.preventDefault();
        const userRoute = this.props.history.location.pathname;
        console.log('User Route', userRoute);

        const postData = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        this.props.authenticateUser(userRoute, postData);
    };

    render() {
        const { loggedIn, role } = this.props
        // const from = lastLocation ? lastLocation.pathname : '/';
        const authType = this.props.history.location.pathname.split('/')[2];
        console.log('props here all the way', this.props.history)
        return (
            <Fragment>
                {loggedIn && role === 'admin' && <Redirect to='/dashboard' />}
                {loggedIn && role === 'user' && <Redirect to='/' />}
                {authType === 'logout' && <Redirect to='/' />}
                {authType === 'register' && <RegistrationForm submit={this.handleSubmit} />}
                {authType === 'login' && <LoginForm submit={this.handleSubmit} />}
            </Fragment>
        );
    };
};

Authentication.propTypes = {
    authenticateUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    // user: PropTypes.object.isRequired,
    // error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    user: state.auth.authenticatedUserEmail,
    role: state.auth.authenticatedUserRole,
    error: state.auth.authError
})

// connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default connect(mapStateToProps, { authenticateUser, logoutUser })(withLastLocation(Authentication));

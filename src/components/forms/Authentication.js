import React, { Fragment, Component } from 'react';
<<<<<<< HEAD:src/components/forms/Authentication.js
import RegistrationForm from './RegistrationForm'
import { api } from '../../api/init';
=======
import { Redirect } from 'react-router-dom';
import { api } from '../api/init';
import RegistrationForm from './RegistrationForm';
>>>>>>> add_logout:src/components/Authentication.js
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';

export default class Authentication extends Component {

    componentWillReceiveProps = async (nextProps) => {
        if (nextProps.authType === 'logout') {
            await api.get('/users/logout');
        };
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const userRoute = this.props.authType === 'register' ? '/users/register' : '/users/login';
        try {
            const response = await api.post(userRoute, {
                email: event.target.email.value,
                password: event.target.password.value
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was a problem authenticating user', error);
        };
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
    authType: PropTypes.oneOf(['register', 'login', 'logout']).isRequired
};

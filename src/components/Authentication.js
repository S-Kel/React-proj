import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm'
import { api } from '../api/init';

export default class Registration extends Component {

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await api.post('/users/register', {
                email: event.target.email.value,
                password: event.target.password.value
            })
            console.log(response.data)
        } catch (error) {
            console.error('There was a problem registering this user', error)
        }
    };

    render() {
        return (
            <RegistrationForm onSubmit={this.handleSubmit} />
        )
    };
};

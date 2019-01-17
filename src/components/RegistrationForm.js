import React from 'react'

export default function RegistrationForm(props) {
    const { onSubmit } = props
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='email'>Email: <input type='email' name='email' /></label><br />
            <label htmlFor='password'>Password: <input type='password' name='password' /></label><br />
            <button type='submit'>Register</button>
        </form>
    )
}

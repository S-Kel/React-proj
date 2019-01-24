import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Fragment>
            <Link to="/">
                <img src='https://via.placeholder.com/100' alt='app-logo' />
            </Link>
        </Fragment>
    )
}

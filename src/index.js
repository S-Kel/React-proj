import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import App from './App';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Registration from './components/Authentication';


const routing = (
    <Router>
        <Fragment>
            <Nav />
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/users/register' component={Registration} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

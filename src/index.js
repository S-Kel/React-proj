import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
<<<<<<< HEAD
import { Provider } from 'react-redux'
import configureStore from './store';
=======
import Nav from './components/Nav';
>>>>>>> cdfb1f636d12a81efd4a6da77c6dbd7eb8115573
import App from './App';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Authentication from './components/Authentication';

<<<<<<< HEAD
ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root'));
=======
>>>>>>> cdfb1f636d12a81efd4a6da77c6dbd7eb8115573

const routing = (
    <Router>
        <Fragment>
            <Nav />
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/users/register' render={(props) => { return <Authentication {...props} type={'register'} /> }} />
                <Route path='/users/login' render={(props) => { return <Authentication {...props} type={'login'} /> }} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

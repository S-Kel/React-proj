import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import App from './App';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Authentication from './components/Authentication';


const routing = (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/users/register' render={(props) => { return <Authentication {...props} type={'register'} /> }} />
                <Route path='/users/login' render={(props) => { return <Authentication {...props} type={'login'} /> }} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

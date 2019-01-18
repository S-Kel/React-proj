import React, { Fragment, Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Authentication from './components/Authentication';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Nav />
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/users/register' render={(props) => { return <Authentication {...props} type={'register'} /> }} />
              <Route path='/users/login' render={(props) => { return <Authentication {...props} type={'login'} /> }} />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  };
};

export default App;

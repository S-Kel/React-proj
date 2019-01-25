import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';

import "./App.css";
import Welcome from "../components/pages/Welcome";
import Nav from "../components/nav/Nav";
import NotFound from "../components/_404/NotFound";
import About from "../components/pages/About";
// import Contact from "../components/pages/Contact";
// import Authentication from "../components/forms/Authentication";
import CreateEventForm from "../components/forms/events/EventForm";
import Contact from "../components/pages/Contact";
import Authentication from "../components/auth/Authentication";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "../components/pages/Footer";
import LandingPg from "../components/pages/LandingPage/LandingPg";
import InfoPg from "../components/pages/LandingPage/InfoPg"

class App extends Component {
  // simpleAction = event => {
  //   this.props.simpleAction();
  // };
  render() {
    // const user = this.props.user;
    // console.log(user);
    return (
      <div className="App">
        <Router>
          <div>
          <LastLocationProvider>
            <Fragment>
              <Nav/>
              <Switch>
                <Route exact path="/"component={LandingPg}/>
                
                <Route path="/about" component={About} />
                <Route path="/create" component={CreateEventForm} />
                {/* <Route path="/users/register" component={Authentication} />
                <Route path="/users/login" component={Authentication} />
                <Route path="/users/logout" component={Authentication} /> */}
                <Route component={NotFound} />
              </Switch>
            </Fragment>
          </LastLocationProvider>
        </div>
        </Router>
        
        <Footer/>
      </div >
    );
  };
}
const mapPropsToTypes = state => ({
  // simpleReducer: state.simpleReducer,
  // user: state.user.loggedInUser
});

export default connect(
  mapPropsToTypes,
  {}
)(App);

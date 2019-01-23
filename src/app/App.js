import React, { Fragment,  Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';


import "./App.css";
import Welcome from "../components/home/Welcome";
import Nav from "../components/nav/Nav";
import NotFound from "../components/_404/NotFound";
import About from "../components/home/About";
// import Contact from "../components/pages/Contact";
// import Authentication from "../components/forms/Authentication";
import CreateEventForm from "../components/forms/events/EventForm";


class App extends Component {
  // simpleAction = event => {
  //   this.props.simpleAction();
  // };
  render() {
    return (
      <div className="App">
        <Router>
          <LastLocationProvider>
            <Fragment>
              <Nav />
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/about" component={About} />
                <Route path="/create" component={CreateEventForm} />
                {/* <Route path="/users/register" component={Authentication} />
                <Route path="/users/login" component={Authentication} />
                <Route path="/users/logout" component={Authentication} /> */}
                <Route component={NotFound} />
              </Switch>
            </Fragment>
          </LastLocationProvider>
        </Router>
      </div >
    );
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

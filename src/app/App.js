import React, { Fragment, Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { simpleAction } from "../components/redux/actions/simpleAction";

import "./App.css";
import Welcome from "../components/home/Welcome";
import Nav from "../components/nav/Nav";
import NotFound from "../components/_404/NotFound";
import About from "../components/home/About";
import Contact from "../components/forms/Contact";
import Authentication from "../components/forms/Authentication";

class App extends Component {
  handleSimpleAction = event => {
    this.props.simpleAction();
    console.log(this.props);
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Nav />
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/users/register"
                render={props => {
                  return <Authentication {...props} type={"register"} />;
                }}
              />
              <Route
                path="/users/login"
                render={props => {
                  return <Authentication {...props} type={"login"} />;
                }}
              />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        </Router>
        <button onClick={this.handleSimpleAction}> test </button>
        <pre>{JSON.stringify(this.props)}</pre>
        <Welcome />
      </div>
    );
  }
}
const mapPropsToTypes = state => ({
  simpleReducer: state.simpleReducer
});

export default connect(
  mapPropsToTypes,
  { simpleAction }
)(App);

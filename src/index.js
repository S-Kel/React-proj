import 'semantic-ui-css/semantic.min.css';
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";

import store from "./components/redux/store/store";
import Nav from "./components/nav/Nav";
import App from "./app/App";
import NotFound from "./components/_404/NotFound";
import About from "./components/home/About";
import Contact from "./components/forms/Contact";
import Authentication from "./components/forms/Authentication";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// const routing = (
//   <Router>
//     <Fragment>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={App} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <Route
//           path="/users/register"
//           render={props => {
//             return <Authentication {...props} type={"register"} />;
//           }}
//         />
//         <Route
//           path="/users/login"
//           render={props => {
//             return <Authentication {...props} type={"login"} />;
//           }}
//         />
//         <Route component={NotFound} />
//       </Switch>
//     </Fragment>
//   </Router>
// );

// ReactDOM.render(routing, document.getElementById("root"));

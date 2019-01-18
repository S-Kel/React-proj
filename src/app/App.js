import React, { Component } from "react";
import "./App.css";
import Welcome from "../components/home/Welcome";

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.simpleAction}> test </button>
        <pre>{JSON.stringify(this.props)}</pre>
        <Welcome />
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

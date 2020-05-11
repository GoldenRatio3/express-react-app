import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { greeting: "Test Greeting" };
  }

  componentDidMount() {
    fetch("/api/greeting").then((resp) => {
      if (resp.status !== 200) {
        console.log("Looks like there was a problem." + resp.status);
      }

      return resp.json().then((data) => {
        this.setState({ greeting: data.greeting });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.greeting}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  textInput: {
    color: "white",
  },
};

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

  fetchGreeting = (event) => {
    const name = event.target.value;
    fetch("/api/greeting?name=" + name).then((resp) => {
      if (resp.status !== 200) {
        console.log("Looks like there was a problem." + resp.status);
      }

      return resp.json().then((data) => {
        this.setState({ greeting: data.greeting });
      });
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.greeting}</p>
          <TextField
            InputProps={{
              className: classes.textInput,
            }}
            InputLabelProps={{
              className: classes.textInput,
            }}
            label="Enter your name"
            onBlur={this.fetchGreeting}
          />
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);

import React, { Component } from "react";
import classes from "./App.module.css";
import withClass from "./hoc/withClass";
import Aux from "./hoc/Aux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      textList: []
    };
  }

  handleChangeText = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  handleButtonClick = input => {
    let listArray = this.state.textList;

    listArray.push(input);
    this.setState({
      textList: listArray,
      inputText: ""
    });
  };

  render() {
    return (
      <Aux>
        <div>
          <input
            value={this.state.inputText}
            type="text"
            onChange={event => this.handleChangeText(event)}
          />
          <button onClick={() => this.handleButtonClick(this.state.inputText)}>
            Dodaj
          </button>

          <ul>
            {this.state.textList.map(text => {
              return <li>{text}</li>;
            })}
          </ul>
        </div>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

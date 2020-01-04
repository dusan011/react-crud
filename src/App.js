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

  handleDeleteItem = id => {
    const newItem = this.state.textList;
    newItem.splice(id, 1);

    this.setState({
      textList: newItem
    });
    console.log(newItem);
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

          <table>
            <tr>
              <th>List</th>
              <th>Action</th>
            </tr>

            {this.state.textList.map((text, index) => {
              return (
                <tr>
                  <td>{text}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDeleteItem(index);
                      }}
                    >
                      Obrisi
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

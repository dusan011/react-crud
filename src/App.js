import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    title: "React SIMPLE CRUD APPLICATION",
    act: 0,
    index: "",
    datas: []
  };

  componentDidMount() {
    this.refs.name.focus();
  }

  onSubmit = e => {
    e.preventDefault();

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if (this.state.act === 0) {
      //new
      let data = {
        name,
        address
      };
      datas.push(data);
    } else {
      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  handleRemove = index => {
    let datas = this.state.datas;

    datas.splice(index, 1);
    this.setState({
      datas: datas
    });
  };

  handleEdit = i => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  };

  render() {
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input
            type="text"
            ref="name"
            placeholder="your name"
            className="formField"
          />
          <input
            type="text"
            ref="address"
            placeholder="your address"
            className="formField"
          />
          <button
            type="submit"
            className="myButton"
            onClick={e => this.onSubmit(e)}
          >
            {this.state.act === 0 ? "Dodaj" : "Izmeni"}
          </button>
        </form>
        <pre>
          {this.state.datas.map((data, i) => (
            <li key={i} className="myList">
              {i + 1}. {data.name}, {data.address}
              <button
                type="submit"
                className="myListButton"
                onClick={() => this.handleRemove(i)}
              >
                Delete
              </button>
              <button
                type="submit"
                className="myListButton"
                onClick={() => this.handleEdit(i)}
              >
                Edit
              </button>
            </li>
          ))}
        </pre>
      </div>
    );
  }
}

export default App;

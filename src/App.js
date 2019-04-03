import React, { Component } from "react";
import "./App.css";
import SimpleForm from "./components/SimpleForm";

class App extends Component {
  render() {
    let name = "risclog";
    let someStr = "hallo" + name + "!";

    console.log("lint it" + someStr);

    return (
      <div className="App">
        <SimpleForm />
      </div>
    );
  }
}

export default App;

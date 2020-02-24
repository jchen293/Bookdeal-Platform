import React, { Component } from "react";
import Table from "./components/accountPage";

var data2 = [
  { id: 1, name: "Gob", value: "2" },
  { id: 2, name: "Buster", value: "5" },
  { id: 3, name: "George Michael", value: "4" }
];

class App extends Component {
  render() {
    return (
      <div>
        <p>Basic Table</p>
        <Table data={data} />
      </div>
    );
  }
}

export default App;

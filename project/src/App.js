import React, { Component } from "react";
import "./App.css";
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";
import InterestsPage from "./components/interestsPage";
import axios from "axios";

class App extends Component {
  // initialize our state
  state = {
    api: "http://localhost:3001/api",
    content: null,
    deleteByIdFromDB: null,
    book: [
      {
        title: "Harry Potter",
        price: "$2",
        course: "CSE442",
        url:
          "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
      },
      {
        title: "Harry Potter",
        price: "$20",
        course: "CSE442",
        url:
          "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
      }
    ]
  };

  componentDidMount() {
    this.setState({ content: <Body api={this.state.api} /> });
  }

  //Warning! This is use for test purpose, This will delete all data in database
  deleteAll = () => {
    this.state.data.forEach(dat => {
      axios.delete(this.state.api + "/deleteByIdData", {
        data: {
          id: dat._id
        }
      });
    });
  };

  //This method allow to add multiple book at once
  // arrBook = array of JSON that contain book information (see dataschema for detail)
  addAll = arrBook => {
    arrBook.forEach(bok => {
      axios.post(this.state.api + "/putData", bok);
    });
  };

  setContent = obj => {
    this.setState({ content: obj });
  };

  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Header setContent={this.setContent} api={this.state.api} />
        {/* <button onClick={this.deleteAll}>Delete All Book</button> */}
        {this.state.content}
        <Footer setContent={this.setContent} api={this.state.api} />
      </div>
    );
  }
}

export default App;

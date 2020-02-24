import React, { Component } from "react";
import axios from "axios";
import Body from "./body";

export const MyContext = React.createContext();

class MyData extends Component {
  state = {
    data: [],
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
    content: null,
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

  constructor(prop) {
    super(prop);
    this.setState({
      content: (
        <Body data={this.state.data} deleteByIdFromDB={this.deleteByIdFromDB} />
      )
    });
  }

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  // # see this.state.data
  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  loginformation = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  // # json = json object
  putDataToDB = json => {
    axios
      .post("http://localhost:3001/api/putData", json)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  putDataToUserDB = json => {
    axios
      .post("http://localhost:3001/api/putUser", json)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // to remove existing database information
  // # idTodelete = _id from database
  deleteByIdFromDB = idTodelete => {
    axios.delete("http://localhost:3001/api/deleteByIdData", {
      data: { id: idTodelete }
    });
  };

  //FIXME: This function has not complete yet, Dont run this
  // our update method that uses our backend api
  // to overwrite existing data base information
  //# idToUpdate = object ID
  //# updateToApply = JSON object that container information need for update
  updateDB = (idToUpdate, updateToApply) => {
    axios.post("http://localhost:3001/api/updateByIdData", {
      id: idToUpdate,
      update: updateToApply
    });
  };

  //Warning! This is use for test purpose, This will delete all data in database
  deleteAll = () => {
    this.state.data.forEach(dat => {
      axios.delete("http://localhost:3001/api/deleteByIdData", {
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
      axios.post("http://localhost:3001/api/putData", bok);
    });
  };
  //This is change
  LogintoDB = json => {
    axios
      .post("http://localhost:3001/api/login", json)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateData = datas => {
    this.setState({ data: datas });
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          getDataFromDb: this.getDataFromDb,
          loginformation: this.loginformation,
          putDataToDB: this.putDataToDB,
          putDataToUserDB: this.putDataToUserDB,
          deleteByIdFromDB: this.deleteByIdFromDB,
          updateDB: this.updateDB,
          deleteAll: this.deleteAll,
          addAll: this.addAll,
          LogintoDB: this.LogintoDB,
          updateData: this.updateData
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyData;

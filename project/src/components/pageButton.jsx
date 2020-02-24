import React, { Component } from "react";

class pageButton extends Component {
  constructor(props) {
    super(props);
    this.setNext = this.setNext.bind(this);
    this.setUp = this.setUp.bind(this);
    this.state = {
      num: 0,
      pagenum: this.props.current
    };
  }

  setNext() {
    if (this.state.pagenum < this.props.totalPage) {
      this.setState(
        {
          num: this.state.num + this.props.pageSize,
          pagenum: this.state.pagenum + 1
        },
        function() {
          console.log(this.state);
          this.props.pageNext(this.state.num);
        }
      );
    }
  }

  setUp() {
    if (this.state.pagenum > 1) {
      console.log(this.state.pagenum);
      this.setState(
        {
          num: this.state.num - this.props.pageSize,
          pagenum: this.state.pagenum - 1
        },
        function() {
          console.log(this.state);
          this.props.pageNext(this.state.num);
        }
      );
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.setUp}>Previous Page</button>
        <span>
          {this.state.pagenum}page/ {this.props.totalPage}page
        </span>
        <button onClick={this.setNext}>Next Page</button>
      </div>
    );
  }
}
export default pageButton;

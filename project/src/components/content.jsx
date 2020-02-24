import React, { Component } from "react";
import Body from "./body";

class Content extends Component {
  state = { content: <Body state={this.props.state} /> };
  render() {
    return <React.Fragment>{this.state.content}</React.Fragment>;
  }
}

export default Content;

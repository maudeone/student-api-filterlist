import './App.css';
import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Students from "./Students";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <Wrapper>
        <Students />
      </Wrapper>
    );
  }
}

export default App;
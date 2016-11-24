import React, { Component } from 'react';
import logo from './img/herewe_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Here We 는 우리가 만들어 가는것입니다.</h2>
        </div>
        <p className="App-intro">
          본문 작업 중입니다.
        </p>
      </div>
    );
  }
}

export default App;

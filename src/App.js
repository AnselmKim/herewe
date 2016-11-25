import React, { Component } from 'react';
import logo from './img/herewe_logo.png';
import './App.css';
import Editor from './Editor'
// import config from './config'
// console.log(config);
class App extends Component {
  constructor(){
    super();
    this.submit = this.submit.bind(this);
    this.doodles = [];
  }
  //버튼을 눌렀을 때 Action. 지금은 일단 콘솔 값을 확인만 함
  submit(content){
    if (content) {
      console.log(content);
    }
  }
  //익명 사용자 여부
  isAnonymous(){
    return true;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Here We 는 우리가 만들어 가는것입니다.</h2>
        </div>
        <Editor {...this}/>
      </div>
    );
  }
}

export default App;

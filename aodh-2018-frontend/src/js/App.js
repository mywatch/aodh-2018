import React, { Component } from 'react';
import ShowData from '../js/components/show_data'
import logo from '../images/logo.svg';
import '../style/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ShowData />
      </div>
    );
  }
}

export default App;

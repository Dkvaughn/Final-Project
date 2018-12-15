import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoardPage from './pages/DashBoardPage.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <DashBoardPage />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class Home extends Component { 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to="/dashboard/1" style={{textDecoration : "none"}}>Click Here !!!</Link>        
      </div>        
    );
  }
}

export default Home;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = ()=>(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{new Date(Date.now()).toLocaleTimeString()}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );

export default App;

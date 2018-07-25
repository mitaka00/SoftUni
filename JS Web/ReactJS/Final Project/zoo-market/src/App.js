import React, { Component } from 'react';
import './App.css';

import Footer from './components/common/Footer';
import Routes from './routes'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Routes/>
          <Footer/>
        </div>
    );
  }
}

export default App;

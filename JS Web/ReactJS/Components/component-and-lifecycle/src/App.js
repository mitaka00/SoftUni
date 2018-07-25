import React, { Component } from 'react';
import './App.css';

import Slider from './components/Slider'
import Roaster from './components/Roaster'
import Bio from './components/Bio'

import observerMenu from './utils/observer'


class App extends Component {
  constructor(){
    super();

    this.state={
      focusedChar:0
    }

    this.eventHandler=(newState)=>{
      this.setState(newState)
    }
  }

  componentDidMount(){
    observerMenu.addObserver('changeFocus',this.eventHandler)
  }

  render() {
    return (
      <div className="App">
      {console.log(this.state)}
        <Slider/>
        <Roaster/>
        <Bio id={this.state}/>
      </div>
    );
  }
}

export default App;

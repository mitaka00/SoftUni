import React, { Component } from 'react'
import './App.css'

import SingUpForm from './components/form/SingUpForm'
import LoginForm from './components/form/LoginForm'
import Pokedex from './components/form/Pokedex'

class App extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      token: ''
    }

    this.authenticate=(data)=>{
      if(data.success){

        this.setState({
          token:data.token,
          username:data.user.name
        })

        localStorage.setItem('token',data.token)
      }
    }
  }

  componentDidMount(){
    this.setState({token:localStorage.getItem('token')})
  }

  render () {
    if(this.state.token!=='' && this.state.token!=='undefined' && typeof(localStorage.token)!=='undefined'){
      return (
        <div>
          <Pokedex/>
        </div>
      )
    } 
      return(
        <div> 
        <SingUpForm />
        <LoginForm authFunc={this.authenticate.bind(this)}/>
        </div>
      )
  }
}

export default App

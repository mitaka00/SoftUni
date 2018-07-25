import React, { Component } from 'react';

import Login from './../user/Login'
import Register from './../user/Register';

import { Link } from 'react-router-dom'
import './../../App.css'
import emblem2 from './../../emblem2.png';

class StartingPage extends Component{
    constructor(){
        super()
    
        this.state={
          token:''
        }
      }
    
      componentDidMount(){
        if(localStorage.getItem('token')){
          this.setState({'token':localStorage.getItem('token')})

          this.props.history.push('/home')
        }
      }
    
    render(){
        return(
           <div className='startingPage'>
              <h1>Zoo Market</h1>
              <h4><img src={emblem2} className="app-emblem" alt="emblem"/>This is the right place to find your new pet</h4>
              <Link to='/home' {...this.props}><h3>Click here to see the offerts</h3></Link>
              {console.log('dasd')}
            <div className='startingAuth'>
              <Register {...this.props}/>
              <Login {...this.props}/>
            </div>
           </div>
        )
    }
}

export default StartingPage
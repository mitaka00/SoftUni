import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import requester from './../../utils/requester'

import HomePage from './../common/HomePage'
import './../../App.css';

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            username:'',
            password:'',
            error:false,
            loading:false
        }

        this.dataColletor=(e)=>{
            this.setState({[e.target.name]:e.target.value})
        }

        this.Login=(e)=>{
            e.preventDefault()
            this.setState({loading:true,error:false})

            if(this.state.password.length<3  || this.state.username.length<3){
                this.setState({error:true,loading:false})
                return
            }
            this.setState({loading:true})

            requester.login(this.state).then(res=>{
                localStorage.setItem('token',res._kmd.authtoken)
                localStorage.setItem('username',res.username)
                localStorage.setItem('userId',res._id)
                
                this.setState({loading:false,error:false})
                this.props.history.push('/home')
            }).catch((e)=>{
                this.setState({loading:false,error:true})
                this.props.history.push('/')
            })
        }
    }

    render(){
        return(
            <form className='authForm' id='loginForm' onSubmit={(e)=>{this.Login(e)}}>
            {this.state.error===true?<div className='error'>Failed to Login</div> : <div></div>}
            {this.state.loading===true?<div className='loading'>Loading...</div> : <div></div>}
                <h2>Login</h2>
                <div className='inputDiv'>
                <label>Username:</label>
                <input onChange={(e)=>this.dataColletor(e)} name='username' type='text'></input>
                </div>
                <div className='inputDiv'>
                <label>Password:</label>
                <input onChange={(e)=>this.dataColletor(e)} name='password' type='password'></input>
                </div>
                <input type='submit' value='Sign In' className='btnAuth'/>
            </form>
        )
    }
}

export default Login

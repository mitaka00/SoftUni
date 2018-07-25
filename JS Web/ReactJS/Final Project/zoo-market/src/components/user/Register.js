import React, { Component } from 'react';
import requester from './../../utils/requester'
import { Link,Redirect } from 'react-router-dom'
import './../../App.css';

class Register extends Component{
    constructor(){
        super()

        this.state={
            username:'',
            password:'',
            repeatPassword:'',
            role:'user',
            success:false,
            error:false,
            loading:false
        }

        this.dataColletor=(e)=>{
            this.setState({[e.target.name]:e.target.value})
        }

        this.Register=(e)=>{
            this.setState({error:false,success:false,loading:true})
            e.preventDefault()

            if(this.state.password.length<3 || this.state.password!==this.state.repeatPassword || this.state.username.length<3){
                this.setState({error:true,loading:false})
                return
            }
            this.setState({loading:true})

            requester.register(this.state).then(res=>{
                this.setState({error:false,success:true,loading:false})

                localStorage.setItem('token',res._kmd.authtoken)
                localStorage.setItem('username',res.username)
                localStorage.setItem('userId',res._id)

                this.props.history.push('/home')
            }).catch((e)=>{
                this.setState({loading:false,error:true,success:false})
                this.props.history.push('/')
            })
        }
    }

    render(){
        return(
            <form className='authForm' id='registerForm' onSubmit={(e)=>{this.Register(e)}}>
            {this.state.error===true?<div className='error'>Failed to Register</div> : <div></div>}
            {this.state.loading===true?<div className='loading'>Loading...</div> : <div></div>}
            {console.log('dad')}
                <h2>Register</h2>
                <div className='inputDiv'>
                <label>Username:</label>
                <input onChange={(e)=>this.dataColletor(e)} name='username' type='text'></input>
                </div>
                <div className='inputDiv'>
                <label>Password:</label>
                <input onChange={(e)=>this.dataColletor(e)} name='password' type='password'></input>
                </div>
                <div className='inputDiv'>
                <label>Repeat Password:</label>
                <input onChange={(e)=>this.dataColletor(e)} name='repeatPassword' type='password'></input>
                </div>
                <input type='submit' value='Sign Up' className='btnAuth'/>
            </form>
        )
    }
}

export default Register


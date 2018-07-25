import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Logout from './../user/Logout'

import './../../App.css'
import emblem2 from './../../emblem2.png';

class Navbar extends Component{
    constructor(){
        super()

        this.checkUser=()=>{
            if(localStorage.getItem('token')){
                return (
                <nav>
                <img src={emblem2}  className='nav-logo' alt="emblem"/>
                <Link to='/home' className='navLink'><span>Home</span></Link>
                <Link to='/addPost' className='navLink'><span>Add Post</span></Link>
                <Link to='/myPosts' className='navLink'><span>My Posts</span></Link>
                <div className='logoutContainer'>
                <span className='navLink'>Hello, {localStorage.getItem('username')}</span>
                <Logout {...this.props}/>
                </div>
                </nav>
                )
            }else{
                return (
                    <nav>
                    <Link to='/' id='NavEl'><h1>Go to Authentication Page</h1></Link>
                    </nav>
                )
            }
        }
    }
    
    render(){
        return(
            <div>
                {this.checkUser()}
            </div>
        )
    }
}

export default Navbar
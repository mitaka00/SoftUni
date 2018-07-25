import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import requester from './../../utils/requester'
import MyPost from './MyPost'
import Navbar from './../common/Navbar';

class MyPosts extends Component{
    constructor(props){
        super(props)
        
        this.state={
            posts:[]
        }

        this.checkAuthorPosts=()=>{
            if(this.state.posts.length===0){
                return <h1 className='profileTitle'>You don't have posts!</h1>
            } else{
                return this.state.posts.map(post=>{return <MyPost key={post._id} props={post} {...this.props}/>})
            }
        }
    }

    componentDidMount(){
        if(!localStorage.token){
            this.props.history.push('/')
        }else{
            requester.listMyPosts(localStorage.getItem('username')).then(res=>{
                console.log(res);

                this.setState({posts:res})
            })
        }
    }

    render(){
        return(
            <div className='postsContainer'>
                <Navbar {...this.props}/>
               {this.checkAuthorPosts()}
            </div>
        )
    }
}

export default MyPosts
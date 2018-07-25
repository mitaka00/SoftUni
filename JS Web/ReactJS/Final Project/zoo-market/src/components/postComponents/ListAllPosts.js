import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import requester from './../../utils/requester'
import Post from './Post'

class ListAllPosts extends Component{
    constructor(){
        super()
        
        this.state={
            posts:[]
        }

        this.checkPosts=()=>{
            if(this.state.posts.length===0){
                return <h1>You don't have posts!</h1>
            } else{
                return this.state.posts.map(post=>{return <Post key={post._id} props={post}/>})
            }
        }
    }

    componentDidMount(){
        requester.listAllPosts().then(res=>{
            this.setState({posts:res})
        })
    }

    render(){
        return(
            <div className='postsContainer'>
                {this.checkPosts()}
            </div>
        )
    }
}

export default ListAllPosts
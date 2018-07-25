import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import requester from './../../utils/requester'
import Post from './Post'
import Navbar from './../common/Navbar';

class Profile extends Component{
    constructor(props){
        super(props)
        
        this.state={
            posts:[]
        }

        this.banUser=(e)=>{
            e.preventDefault();

            console.log('asdad')
        }

        this.checkAuthorPosts=()=>{
            if(this.state.posts.length===0){
                return <h4 className='profileTitle'>{this.props.match.params.username} doesn't have posts!</h4>
            } else{
                return this.state.posts.map(post=>{return <Post key={post._id} props={post} {...this.props}/>})
            }
        }
    }

    async componentDidMount(){
        await requester.listAllPosts().then(res=>{
            let authors=[];
           for(let obj of res){
               if(!authors.includes(obj.author)){
                   authors.push(obj.author)
               }
           }

           if(!authors.includes(this.props.match.params.username)){
               this.props.history.push('/notFound')
           }
        })

        await requester.listMyPosts(this.props.match.params.username).then(res=>{
            this.setState({posts:res})
        })
    }

    render(){
        return(
            <div className='postsContainer'>
            
                <Navbar {...this.props}/>
                <h4 className='profileTitle'>{this.props.match.params.username} Profile</h4>
               {this.checkAuthorPosts()}
            </div>
        )
    }
}

export default Profile
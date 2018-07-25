import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import requester from './../../utils/requester'
import Navbar from './../common/Navbar';

class AddPost extends Component{
    constructor(){
        super()

        this.state={
           'author':localStorage.getItem('username'),
            'price':0,
            'description':'',
            'typeAnimal':'',
            'imageUrl':'',
            'title':'',
            'loading':false,
            'error':false
        }

        this.dataColletor=(e)=>{
            this.setState({[e.target.name]:e.target.value})
        }

        this.Post=(e)=>{
            this.setState({loading:false,error:false})
            e.preventDefault()

            if(this.state.title===''){
                this.setState({error:true})
                return;
            }
            this.setState({loading:true,error:false})

            requester.addPost(this.state).then(res=>{
                this.setState({loading:false,error:false})
                this.props.history.push('/home')
            })
        }
    }

    componentDidMount(){
        if(!localStorage.token){
            this.props.history.push('/')
        }
    }

    render(){
        return(
            <div>
                <Navbar {...this.props}/>
                <form className='postForm' onSubmit={(e)=>{this.Post(e)}}>
                {this.state.error===true?<div className='error'>Title can not be empty</div> : <div></div>}
                {this.state.loading===true?<div className='loading'>Loading...</div> : <div></div>}
                <h2 className='profileTitle'>Make Post</h2>
                <div className='inputDiv'>
                <label>Title</label>
                <input onChange={(e)=>this.dataColletor(e)} name='title' type='text'></input>
                </div>
                <div className='inputDiv'>
                <label>Animal Type</label>
                <select onChange={(e)=>this.dataColletor(e)} name='typeAnimal' type='text'>
                    <option value="">Select option</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="bird">Bird</option>
                    <option value="">Other</option>
                </select>
                </div>
                <div className='inputDiv'>
                <label>Price</label>
                <input onChange={(e)=>this.dataColletor(e)} name='price' type='number'></input>
                </div>
                <div className='inputDiv'>
                <label>ImageUrl</label>
                <input onChange={(e)=>this.dataColletor(e)} name='imageUrl' type='text'></input>
                </div>
                <div className='inputDiv' className='areaDiv'>
                <label>Description</label>
                <textarea onChange={(e)=>this.dataColletor(e)} name='description' type='text'/>
                </div>
                <input type='submit' value='Post' className='postBtn'/>
                </form>
            </div>
        )
    }
}

export default AddPost
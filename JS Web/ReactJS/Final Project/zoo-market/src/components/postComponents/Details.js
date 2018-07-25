import React, { Component } from 'react';

import requester from './../../utils/requester'
import Navbar from './../common/Navbar';
import { Link } from 'react-router-dom'

class Details extends Component{
    constructor(props){
        super(props)

        this.state={
            'price':'',
            'description':'',
            'typeAnimal':'',
            'imageUrl':'',
            'title':'',
            'author':'',
            'error':false,
            'loading':false
        }

        this.dataColletor=(e)=>{
            this.setState({[e.target.name]:e.target.value})
        }

        this.Edit=(e)=>{
            e.preventDefault()
            this.setState({loading:false,error:false})

            if(this.state.title===''){
                this.setState({loading:false,error:true})
                return
            }
            this.setState({loading:true,error:false})

            requester.editPost(this.props.match.params.id,this.state).then(res=>{
                this.setState({loading:false,error:false})
                this.props.history.push('/home')
            })
        }

        this.Delete=(e)=>{
            e.preventDefault()
            this.setState({loading:true,error:false})

            requester.deletePost(this.props.match.params.id).then(res=>{
                this.setState({loading:false,error:false})
                this.props.history.push('/home')
            })
        }
    }

    componentDidMount(){
        if(!localStorage.token){
            this.props.history.push('/')
        }

        requester.getPost(this.props.match.params.id).then(res=>{
            console.log(res)
            if(res.error){
                this.props.history.push('/notFound')
            }
            this.setState({
                'title':res.title,
                'description':res.description,
                'typeAnimal':res.typeAnimal,
                'price':res.price,
                'imageUrl':res.imageUrl,
                'author':res.author
            })
        })
    }
    render(){
        return(
            <div>
                <Navbar {...this.props}/>
                <form className='postForm' onSubmit={(e)=>{this.Edit(e)}}>
                {this.state.error===true?<div className='error'>Fail to Edit</div> : <div></div>}
                {this.state.loading===true?<div className='loading'>Loading...</div> : <div></div>}
                <h2 className='profileTitle'>Edit Post</h2>
                <div className='inputDiv'>
                <label>Title</label>
                <input onChange={(e)=>this.dataColletor(e)} name='title' type='text' value={this.state.title}></input>
                </div>
                <div className='inputDiv'>
                <label>Animal Type</label>
                <select onChange={(e)=>this.dataColletor(e)} name='typeAnimal' type='text' value={this.state.ty}>
                    <option value="">Select option</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="bird">Bird</option>
                    <option value="">Other</option>
                </select>
                </div>
                <div className='inputDiv'>
                <label>Price</label>
                <input onChange={(e)=>this.dataColletor(e)} name='price' type='number'value={this.state.price}></input>
                </div>
                <div className='inputDiv'>
                <label>ImageUrl</label>
                <input onChange={(e)=>this.dataColletor(e)} name='imageUrl' type='text' value={this.state.imageUrl}></input>
                </div>
                <div className='inputDiv' className='areaDiv'>
                <label>Description</label>
                <textarea onChange={(e)=>this.dataColletor(e)} name='description' type='text' value={this.state.description}/>
                </div>
                <div className='inputDiv'>
                <input type='submit' value='Edit' className='postBtn'/>
                <button onClick={e=>{this.Delete(e)}} type='submit' id='deleteBtn'>Delete</button>
                <Link to='/home' id='cancelBtn'>Cancel</Link>
                </div>
                </form>
            </div>
        )
    }
}

export default Details
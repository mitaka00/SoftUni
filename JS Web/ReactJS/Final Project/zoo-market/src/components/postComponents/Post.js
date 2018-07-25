import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Post extends Component{
    constructor(props){
        super(props)

        this.state={
            role:''
        }

        this.addAdminBtn=()=>{
            if(this.state.role==='admin' || localStorage.getItem('username')===this.props.props.author){
                return(
                        <Link to={`details/${this.props.props._id}`} className='detailsBtn'>Details</Link>
                )
            }
        }
    }

    componentDidMount(){
       if(localStorage.username==='admin'){
           this.setState({role:'admin'})
       }
    }

    render(){
        return(
            <div className='postContainer'>
            <h3>{this.props.props.title}</h3>
            <img src={this.props.props.imageUrl}/>
            <span className='price'>Price: {this.props.props.price}lv</span>
            <div className='description'>{this.props.props.description}</div>
            <span className='postAuthor'>Offer is made by <Link to={`profile/${this.props.props.author}`}>{this.props.props.author}</Link></span>
            {this.addAdminBtn()}
            </div>
        )
    }
}

export default Post
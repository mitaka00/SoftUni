import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import requester from './../../utils/requester'

class MyPost extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='postContainer'>
            <h3>{this.props.props.title}</h3>
            <img src={this.props.props.imageUrl}/>
            <span className='price'>Price: {this.props.props.price}</span>
            <div className='description'>{this.props.props.description}</div>
            <Link to={`details/${this.props.props._id}`} className='detailsBtn'>Details</Link>
            </div>
        )
    }
}

export default MyPost
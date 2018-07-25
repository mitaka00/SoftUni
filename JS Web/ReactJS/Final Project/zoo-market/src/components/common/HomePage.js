import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Navbar from './Navbar';
import ListAllPosts from './../postComponents/ListAllPosts'

class HomePage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Navbar {...this.props}/>
                <h4 className='profileTitle'>All Offers</h4>
                <ListAllPosts/>
            </div>
        )
    }
}

export default HomePage
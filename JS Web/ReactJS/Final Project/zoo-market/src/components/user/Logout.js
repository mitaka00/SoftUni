import React, { Component } from 'react';

import './../../App.css'
class Logout extends Component{
    constructor(props){
        super(props);

        this.Logout=(e)=>{
            e.preventDefault()

            console.log('asd')
            localStorage.clear();
            this.props.history.push('/')
        }
    }
    render(){
        return(
            <input id='logoutBtn' type="button" value="Logout" onClick={(e)=>{this.Logout(e)}}/>
        )
    }
}

export default Logout
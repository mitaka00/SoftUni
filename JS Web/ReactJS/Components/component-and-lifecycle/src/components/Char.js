import React, {Component} from 'react';

import observerMenu from './../utils/observer'
import './../App.css';

class SingleChar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div onClick={()=>observerMenu.executeObserver('changeFocus',{id:this.props.element.id})} className='char-img'>
                <img className='char-img' alt ='char' src={this.props.element.url}/>
            </div>
        )
    }
}

export default SingleChar;
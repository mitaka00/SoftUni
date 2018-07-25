import React, {Component} from 'react';

import SingleChar from './Char'

class Bio extends Component{
    constructor(props){
        super(props)

        this.state={
            id:0,
            curChar:{}
        }
    }

    componentDidMount(){
        fetch('http://localhost:9999/character/'+this.state.id).then(data=>{
            return data.json()
        }).then(parsedData=>{
            this.setState({curChar:parsedData})
        })
    }
    render(){
        return(
            <div>
                {console.log(this.state.id)}
                <fieldset>
                <SingleChar element={{url:this.state.curChar.url}}/>
                <p>{this.state.curChar.bio}</p>
                </fieldset>
            </div>
        )
    }
}

export default Bio
import React, {Component} from 'react';
import SingleChar from './Char';

class Roaster extends Component{
    constructor(props){
        super(props);

        this.state={
            charArr:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:9999/roster').then(data=>{
            return data.json();
        }).then(parsedData=>{
           this.setState({charArr:parsedData})
        })
    }
       

    render(){
        return(
        <div>
            {this.state.charArr.map((x,index)=>{
                return <SingleChar key={index} element={x}/>
            })}
        </div>
        )
    }
}

export default Roaster;
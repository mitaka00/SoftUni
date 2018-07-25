import React, {Component} from 'react'

import left from './../resources/left.png'
import right from './../resources/right.png'

class Slider extends Component{
    constructor(props){
        super(props)

        this.state={
            focusedEpId:0
        }

        this.getNewEp=(id)=>{
            fetch('http://localhost:9999/episodePreview/'+id).then(data=>{
                return data.json();
            }).then(parsedData=>{
                this.setState({imgUrl:parsedData.url})
                this.setState({focusedEpId:parsedData.id})
            })
        }
    }

    componentDidMount(){
        fetch('http://localhost:9999/episodePreview/'+this.state.focusedEpId).then(data=>{
            return data.json();
        }).then(parsedData=>{
            this.setState({imgUrl:parsedData.url})
        })
    }
    render(){
        return(
            <div className='warper'>
                <img onClick={
                    ()=>{this.getNewEp(Number(this.state.focusedEpId)-1)}
                    } className='slider-button case-left' alt='leftArrow' src={left}/>
                <img className='sliderImg' alt='focusedEp' src={this.state.imgUrl}/>
                <img  onClick={
                    ()=>{this.getNewEp(Number(this.state.focusedEpId)+1)}
                    }className='slider-button case-right' alt='leftArrow' src={right}/>
            </div>
        )
    }
}

export default Slider;


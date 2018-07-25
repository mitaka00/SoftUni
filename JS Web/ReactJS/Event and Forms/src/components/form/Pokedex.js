import React, {Component} from 'react'

import validationFunc from './../../utils/formValidator'
import Input from './formFields/Input'

import PokemonField from './formFields/PokemonField'

class Pokedex extends Component{
    constructor(){
        super()

        this.state={
            pokemonName:'',
            pokemonImg:'',
            pokemonInfo:'',
            data:{pokemonColection:[]}
        }
    }

    createPokemon(e){
        e.preventDefault();

        let payload = {
            pokemonName: this.state.pokemonName,
            pokemonImg:this.state.pokemonImg,
            pokemonInfo:this.state.pokemonInfo
          }
          this.createPokemonToServer(payload)

    }
    
    createPokemonToServer(payload){
        fetch('http://localhost:5000/pokedex/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => {
            console.log('created')
          return res.json()
        })
        .then(d => {
         
        })
    }

    componentDidMount(){
        fetch('http://localhost:5000/pokedex/pokedex').then(data=>{
            return data.json()
        }).then(d=>{
            this.setState({data:d})
        })
    }

    render(){
        return(
            <form onSubmit={this.createPokemon.bind(this)}>
                <fieldset className='App'>
                    <Input
                        data='PokeName'
                        name='Pokemon Name'
                        func={(e=>this.setState({pokemonName:e.target.value}))}
                        valid
                    />
                    <Input
                        data='PokeImage'
                        name='Pokemon Image'
                        func={(e=>this.setState({pokemonImg:e.target.value}))}
                        valid
                    />
                    <Input
                        data='PokeBio'
                        name='Pokemon Bio'
                        func={(e=>this.setState({pokemonInfo:e.target.value}))}
                        valid
                    />
                    <input type='submit' value='Create Pokemon'/> 
                </fieldset>

                <div style={({display:'inline-block'})}>
                {
                    this.state.data.pokemonColection.map((x,index)=>{
                        return <PokemonField key={index} data={x}/>
                    })
                }
                </div>             
            </form>
        )
    }
}

export default Pokedex;
/*
 <div style={({display:'inline-block'})}>
                {
                    this.state.data.pokemonColection.map((x,index)=>{
                        return <PokemnonField key={index} data={x}/>
                    })
                }
    </div>
*/


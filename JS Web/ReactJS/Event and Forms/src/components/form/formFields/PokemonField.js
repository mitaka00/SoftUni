import React, { Component } from 'react'

let PokemonField = (props) => {
  return (
    <div style={({ display: "inline-block", "width": "200px", "height": "200px", border: "2px solid orange" })}>
      <h1>{props.data.pokemonName}</h1>
      <h1>{props.data.pokemonInfo}</h1>
      <img style={({ "width": "100px" })} alt='pokemon' src={props.data.pokemonImg} />

    </div>
  )
}

export default PokemonField

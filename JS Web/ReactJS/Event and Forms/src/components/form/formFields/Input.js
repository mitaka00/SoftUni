import React from 'react'

import Valid from './../validationComponents/Valid'
import Invalid from './../validationComponents/Invalid'

let Input = props => {
  
  return (
    <div>
      <label htmlFor={props.data}>{props.name}</label>
      <div>
        <input
          style={{ width: '300px' }}
          onChange={(e)=>  props.func(e)}
          id={props.data}
          name={props.data}
          type={props.type}
        />
        <Valid display={props.valid} />
        <Invalid display={props.valid} />
      </div>

    </div>
  )
}

export default Input
import React from 'react'

let Valid = prop => {
  return (
    <span
      role='img'
      aria-label='valid'
      style={{
        display: prop.display ? 'none' : '',
        marginLeft: '-23px'
      }}
    >
      ❌
    </span>
  )
}

export default Valid

import React from 'react'
import './Center.css'
const Center = (props) => {
    const {children ,...rest} = props;
  return (
    <div className='center'>{children}</div>
  )
}

export default Center
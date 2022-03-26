import React from 'react'
import './input.css'
function Input(props) {
    const {size , ...rest} = props;
  return (
    <div>
        <input className={`input ${size}`} {...rest}/>
    </div>
  )
}

export default Input
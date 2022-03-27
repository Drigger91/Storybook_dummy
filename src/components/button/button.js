import React from 'react'
import './button.css'
function Button(props) {
    const{ variant, children , ...rest} = props;
  return (
    <div>
        <button className={`button ${variant}`} {...rest}>
                {children}
        </button>
    </div>
  )
}

export default Button
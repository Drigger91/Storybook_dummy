import React ,{useState} from 'react'
import './popup.css'
const PopUp = (props) => {
    const [display, setDisplay] = useState('popup')
    const {type,children, ...rest} = props;
  return (
    <div className={`${display} ${type}`}>
        <button className='btn' onClick={()=>{setDisplay("none")}}>close</button>
        {children}
    </div>
  )
}

export default PopUp
import React, { useState } from "react";
import Button from "../button/button";
import "./popup.css";
const PopUp = (props) => {
  const [display, setDisplay] = useState("popup");
  const { type, children, ...rest } = props;
  return (
    <div className={`${display} ${type}`}>
      {/* <button className='btn' onClick={()=>{setDisplay("none")}}>close</button> */}
      <div className="btn">
        <p onClick={()=>{setDisplay("none")}}> X </p>
      </div>
      <div className="children">{children}</div>
    </div>
  );
};

export default PopUp;

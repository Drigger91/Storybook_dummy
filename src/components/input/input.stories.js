import React from "react"
import Input from "./input"


export default{
    title : "Input" ,
    component : Input
}
export const large = ()=>{
    return <Input size = 'large' placeholder='large text'/>
}
export const small = ()=>{
    return <Input size = 'small' placeholder = 'Small text' />
}
export const medium = ()=>{
    return <Input size = 'med' placeholder='medium text'/>
}
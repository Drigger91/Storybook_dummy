import React from "react";
import Button from "./button";

export default {
    title : "Button", //should be unique throughout the project,
    component : Button
}

//different stories
export const primary = ()=>{
    return <Button variant = 'primary'>
        Primary Button
    </Button>
}
export const success = ()=>{
    return <Button variant = 'success'>
        Success Button
    </Button>
}

export const danger = ()=>{
    return <Button variant = 'danger'>
        Alert Button
    </Button>
}
export const basic = ()=>{
    return <Button variant = 'basic'>
        Basic Button
    </Button>
}
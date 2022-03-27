import React from "react";
import Button from "./button";

export default {
    title : "Button", //should be unique throughout the project,
    component : Button,
    argTypes : {
        onClick : { action : "clicked"}
    }
}

//different stories
// export const primary = ()=>{
//     return <Button variant = 'primary'>
//         Primary Button
//     </Button>
// }
const ButtonTemplate = (args)=>{
    return <Button {...args}/>
}
export const Primary = ButtonTemplate.bind({})
Primary.args = {
    variant : "primary",
    children : "Primary Button"
}
// export const success = ()=>{
//     return <Button variant = 'success'>
//         Success Button
//     </Button>
// }
export const Success = ButtonTemplate.bind({})
Success.args = {
    variant :" success",
    children : "Success Button"
}

// export const danger = ()=>{
//     return <Button variant = 'danger'>
//         Alert Button
//     </Button>
// }
export const Danger = ButtonTemplate.bind({});
Danger.args = {
    variant  : "danger",
    children : "Danger Button"
 }
// export const basic = ()=>{
//     return <Button variant = 'basic'>
//         Basic Button
//     </Button>
// }
export const Basic  = ButtonTemplate.bind({});
Basic.args = {
    variant : "basic",
    children : "Basic Button"
}
export const Log = ButtonTemplate.bind({})
Log.args = {
    variant : "primary",
    children : "Log Button",
    onClick : ()=>{console.log('Console Logged')}
}
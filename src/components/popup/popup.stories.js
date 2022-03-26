import React from "react";
import PopUp from "./popup";


export default {
    title : "Popup",
    component : PopUp
}
const PopTemplate = (args) => <PopUp {...args}/>
export const Correct = PopTemplate.bind({});
Correct.args = {
    type : "success",
    children : <h1>This is a correct move</h1>
}
export const Hint = PopTemplate.bind({});
Hint.args = {
    type :"hint",
    children : <h1>This is the hint of the question</h1>
}
export const Retry = PopTemplate.bind({});
Retry.args = {
    type : "retry",
    children : <h1>This is not the right move , try again</h1>
}
export const Logical = PopTemplate.bind({})
Logical.args = {
    type:"logical",
    children :<h1>This is also a logical move but not the correct solution</h1>
}

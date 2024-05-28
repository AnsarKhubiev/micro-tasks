import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export const App05 = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            <Input title={title} setTitle={setTitle}/>
            <Button name="+" callBack={callBackButtonHandler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};
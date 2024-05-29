import React, {ChangeEvent, useState} from 'react';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export const App06 = () => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const messageList = message.map((el, index) => <div key={index}>{el.message}</div>)

    // универсальный input
    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message])
    }


    // input и button как отдельные компоненты
    const [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickButtonHandler = (title: string) => {
        setMessage([{message: title}, ...message])
        setTitle('')
    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            <Input callBack={onChangeInputHandler} title={title}/>
            <Button title={'+'} callback={() => onClickButtonHandler(title)}/>
            {messageList}
        </div>
    );
};
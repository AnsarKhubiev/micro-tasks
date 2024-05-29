import {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = ({addMessage}: FullInputPropsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input placeholder={'full input'} value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
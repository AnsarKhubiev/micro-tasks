import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string,
    setTitle: (title: string) => void
}

export const Input = ({title, setTitle}: InputPropsType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    return (
        <input placeholder="input" value={title} onChange={onChangeInputHandler}/>
    );
};
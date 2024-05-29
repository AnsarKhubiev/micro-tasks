import {ChangeEvent} from "react";

type InputPropsType = {
    callBack: (e: ChangeEvent<HTMLInputElement>)=> void
    title: string
}

export const Input = ({callBack, title}: InputPropsType) => {

    return (
        <input placeholder='input' onChange={callBack} value={title}/>
    );
};
import React from 'react';
import {UniversalButton} from "./components/UniversalButton";
import {Button} from "./components/Button";

export const App03 = () => {
    const myFirstSubscriber = (title: string) => {
        console.log(`Hello! I'm ${title}!`)
    }

    return (
        <div>
            <Button/>
            <UniversalButton name='Universal button' callBack={myFirstSubscriber}/>
        </div>
    );
};
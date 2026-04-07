import {useState} from 'react';

export const App04 = () => {

    let [counter, setCounter] = useState(0)

    const onClickHandler = () => setCounter(++counter)
    const resetCounter = () => setCounter(0)

    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h1>{counter}</h1>
        <div style={{display: 'flex', gap: '5px'}}>
            <button onClick={onClickHandler}>increase</button>
            <button onClick={resetCounter}>0</button>
        </div>
    </div>
}
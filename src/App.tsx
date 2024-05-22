import {UniversalButton} from "./microTasks/03_button/UniversalButton";
import {useState} from "react";


function App() {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
    }

    const reset = () => {
        setA(a = 0)
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={reset}>0</button>
        </>
    );
}

export default App;
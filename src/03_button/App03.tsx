import {Button} from './components/Button.tsx';

export const App03 = () => {

    const mySubscriber = (name: string, age: number) => {
        console.log(`Hello! My name is ${name}. I'm ${age} old!`)
    }

    const buttonFoo1 = () => console.log(100200)
    const buttonFoo2 = (value: number) => console.log(value)

    const buttonFoo3 = () => console.log("I'm stupid button.")

    return <div style={{display: 'flex', gap: '10px'}}>

        <Button title="My YouTube Channel - 1" callback={() => mySubscriber('Ansar', 36)}/>
        <Button title="My YouTube Channel - 1" callback={() => mySubscriber('Karim', 10)}/>
        <Button title="foo1" callback={buttonFoo1}/>
        <Button title="foo2" callback={() => buttonFoo2(100200)}/>
        <Button title="Stupid Button" callback={buttonFoo3}/>

    </div>
}
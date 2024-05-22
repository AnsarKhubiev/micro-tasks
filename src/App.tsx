import {UniversalButton} from "./microTasks/03_button/UniversalButton";


function App() {
    const ButtonFoo = (subscriber: string, age: number, address: string) => {
        console.log(`I'am ${subscriber}. I'am ${age}. ${address}`)
    }

    const StupidBtn = () => {
        console.log("I'am stupid button")
    }

    return (
        <>
            <UniversalButton name="My Youtube Channel 1" callBack={() => ButtonFoo("Vasya", 21, "Lomonosova 10")}/>
            <UniversalButton name="My Youtube Channel 2" callBack={() => ButtonFoo("Ivan", 24, "Lomonosova 1342")}/>
            <UniversalButton name="Stupid button" callBack={StupidBtn}/>
        </>
    );
}

export default App;
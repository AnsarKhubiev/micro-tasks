export const Button = () => {
    const myFirstSubscriber = (name: string) => {
        console.log(`Hello! I'm ${name}!`)
    }

    const foo1 = () => {
        console.log("foo1: ", 100200)
    }

    const foo2 = (number: number) => {
        console.log("foo2: ", number)
    }

    return (
        <div>
            <button onClick={() => myFirstSubscriber('Vasya')}>MyYoutubeChanel-1</button>
            <button onClick={() => myFirstSubscriber("Ivan")}>MyYoutubeChanel-2</button>
            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>
        </div>
    );
};
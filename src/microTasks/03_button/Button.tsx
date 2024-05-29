
type ButtonType = {
    name: string
    callback: () => void
}

export const Button = ({ name, callback}: ButtonType) => {


    return (
        <div>
            <button onClick={callback}>{name}</button>
        </div>
    );
};
type ButtonType = {
    name: string
    callBack: (title: string) => void
}

export const UniversalButton = ({name, callBack}: ButtonType) => {
    const onClickHandler = () => callBack(name)

    return <button onClick={onClickHandler}>{name}</button>
};
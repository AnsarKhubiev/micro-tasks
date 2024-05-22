type ButtonType = {
    name: string
    callBack: () => void
}

export const UniversalButton = ({name, callBack}: ButtonType) => {

    const onClickHandler = () => {
        callBack()
    }

    return <button onClick={onClickHandler}>{name}</button>
};
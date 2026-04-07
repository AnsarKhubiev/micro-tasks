type Props = {
    title: string
    callback: () => void
}

export const Button = ({title, callback} : Props) => {

    const onClickHandler = () => callback()

    return <button onClick={onClickHandler}>{title}</button>
}
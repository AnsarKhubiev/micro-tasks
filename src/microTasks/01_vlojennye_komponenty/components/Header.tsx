type  HeaderPropsType = {
    title: string
}

export const Header = ({title}: HeaderPropsType) => {
    return (
        <div>{title}</div>
    )
}
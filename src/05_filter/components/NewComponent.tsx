import type {Filter, Money} from '../App05.tsx';

type Props = {
    currentMoney: Money[]
    onClickHandler: (filter: Filter) => void
}

export const NewComponent = ({currentMoney, onClickHandler}: Props) => {
    return (
        <div>
            <table>
                <tbody>
                {currentMoney.map((money, index) => {
                    return (
                        <tr key={index}>
                            <td>{money.banknotes}</td>
                            <td>{money.value}</td>
                            <td>{money.number}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <button onClick={() => onClickHandler('Rubles')}>Rubles</button>
            <button onClick={() => onClickHandler('Dollars')}>Dollars</button>
            <button onClick={() => onClickHandler('All')}>All</button>
        </div>
    )
}
import {useState} from 'react';
import {NewComponent} from './components/NewComponent.tsx';

export type Filter = 'All' | 'Rubles' | 'Dollars'
export type Money = {
    banknotes: string
    value: number
    number: string
}
export const App05 = () => {

    const money: Money[] = [
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Rubles', value: 50, number: ' v1234567890'},
    ]

    const [filter, setFilter] = useState<Filter>('All')

    const currentMoney = money.filter((money) => {
        return filter === 'All' ? money : money.banknotes === filter
    })

    const onClickHandler = (filter: Filter) => setFilter(filter)

    return (
        <div>
            <NewComponent currentMoney={currentMoney} onClickHandler={onClickHandler}/>
        </div>
    )
}
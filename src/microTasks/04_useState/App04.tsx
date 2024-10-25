import {UseStateComponent} from "./components/useStateComponent";
import React, {useState} from "react";

export type MoneyType = {
    banknote: string
    nominal: number
    number: string
}[]

export type FilterType = 'ruble'| 'dollar' | 'all'

export const App04 = () => {
    const money = [
        {banknote: 'ruble', nominal: 30, number:'346433223123'},
        {banknote: 'dollar', nominal: 100, number:'54313223123'},
        {banknote: 'ruble', nominal: 5, number:'4323223123'},
        {banknote: 'dollar', nominal: 20, number:'43213223123'},
        {banknote: 'ruble', nominal: 10, number:'54313223123'},
        {banknote: 'ruble', nominal: 200, number:'45313223123'},
        {banknote: 'dollar', nominal: 30, number:'3213223123'},
    ]

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money

    if (filter !== 'all') {
        currentMoney = money.filter((item) => item.banknote === filter)
    }



    const onClickFilterHandler = (nameBtn: FilterType) => {
        setFilter(nameBtn)
    }

    return (
        <div>
            <UseStateComponent
                currentMoney={currentMoney}
                onClickFilterHandler={onClickFilterHandler}
            />
        </div>
    );
};

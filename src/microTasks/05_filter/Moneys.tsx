import React, {useState} from 'react';
import {UniversalButton} from "../03_button/UniversalButton";

type MoneyType = {
    banknote: string
    value: number
    number: string
}

export const Moneys = () => {

    const [money, setMoney] = useState([
        {banknote: 'Dollars', value: 100, number: ' a1234567890'},
        {banknote: 'Dollars', value: 50, number: ' z1234567890'},
        {banknote: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknote: 'Dollars', value: 100, number: ' e1234567890'},
        {banknote: 'Dollars', value: 50, number: ' c1234567890'},
        {banknote: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknote: 'Dollars', value: 50, number: ' x1234567890'},
        {banknote: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<"All" | "RUBLS" | "Dollars">('All')

    let currentMoney: MoneyType[] = money;
    if (filter !== "All") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === filter)
    }

    return (
        <ul>
            {currentMoney.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknote} </span>
                        <span>{objFromMoneyArr.value} </span>
                        <span>{objFromMoneyArr.number} </span>
                    </li>
                )
            })}

            <UniversalButton name="All" callBack={() => setFilter("All")}/>
            <UniversalButton name="Dollars" callBack={() => setFilter("Dollars")}/>
            <UniversalButton name="RUBLS" callBack={() => setFilter("RUBLS")}/>
        </ul>
    );
};
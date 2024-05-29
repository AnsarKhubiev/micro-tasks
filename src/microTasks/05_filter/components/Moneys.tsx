import React, {useState} from 'react';
import {UniversalButton} from "../../03_button/components/UniversalButton";

type MoneyType = {
    banknote: string
    value: number
    number: string
}

type MoneysPropsType = {
    moneys: MoneyType[]
}

export const Moneys = ({moneys}: MoneysPropsType) => {
    const [filter, setFilter] = useState<"All" | "RUBLS" | "Dollars">('All')

    let currentMoney: MoneyType[] = moneys;
    if (filter !== "All") {
        currentMoney = moneys.filter(filteredMoney => filteredMoney.banknote === filter)
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
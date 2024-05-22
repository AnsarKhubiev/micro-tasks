import React, {Dispatch, SetStateAction} from 'react';
import {UniversalButton} from "../03_button/UniversalButton";

type MoneyPropsType = {
    currentMoney: MoneyType[]
    setFilter: Dispatch<SetStateAction<"Dollars" | "RUBLS" | "All">>
}

type MoneyType = {
    banknote: string
    value: number
    number: string
}

export const Moneys = ({currentMoney, setFilter}: MoneyPropsType) => {

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
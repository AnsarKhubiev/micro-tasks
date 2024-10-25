import React from "react";
import {FilterType, MoneyType} from "../App04";


type UseStateComponentPropsType = {
    currentMoney: MoneyType
    onClickFilterHandler: (nameBtn: FilterType)=> void
}

export const UseStateComponent = ({currentMoney, onClickFilterHandler}: UseStateComponentPropsType) => {


    return (
        <div>
            <ul>
                {currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknote} </span>
                            <span>{item.nominal}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: "35px"}}>
                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={() => onClickFilterHandler("dollar")}>dollar</button>
                <button onClick={() => onClickFilterHandler("ruble")}>ruble</button>
            </div>
        </div>
    );
};
import {useState} from "react";
import {Moneys} from "./microTasks/05_filter/Moneys";


function App() {
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

    let currentMoney = money;
    if (filter !== "All") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === filter)
    }


    return (
        <Moneys currentMoney={currentMoney} setFilter={setFilter}/>
    );
}

export default App;
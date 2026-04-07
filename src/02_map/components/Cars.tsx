import type {Car} from '../App02.tsx';
import './style.css';

type Props = {
    cars: Car[]
}

export const Cars = ({cars}: Props) => {

    const listOfCars = cars.map((car, index) => {
        return (
            <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {listOfCars}
            </tbody>
        </table>
    )
}
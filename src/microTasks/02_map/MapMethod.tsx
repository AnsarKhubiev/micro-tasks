type NewComponentType = {
    students: StudentType[]
    topCars: CarType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

type CarType = {
    manufacturer: string
    model: string
}

export const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 108}
]

export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


export const MapMethod = ({students, topCars}: NewComponentType) => {
    return (
        <>
            <ul>
                {students.map((s, index) => {
                    return (
                        <li key={index}>
                            <span>{s.name}: </span>
                            <span>{s.age}</span>
                        </li>
                    )
                })}
            </ul>

            <table>
                <tbody>
                {topCars.map((c, index) => {
                    return (
                        <tr key={index}>
                            <th style={{border: "1px solid black"}}>{c.manufacturer}</th>
                            <td style={{border: "1px solid black"}}>{c.model}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
};
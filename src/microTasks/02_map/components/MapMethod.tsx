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
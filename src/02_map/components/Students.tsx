import type {Student} from '../App02.tsx';

type Props = {
    students: Student[]
}

export const Students = ({students}: Props) => {

    const listOfStudents = students.map((student: Student) => {
       return <li key={student.id}>
            <span>{student.name} age: {student.age}</span>
        </li>
    })

    return (
        <ul>{listOfStudents}</ul>
    )
}
import React from "react";

type StudentType = {
    id: number
    name: string
    age: number
}

type MapComponentType = {
    students: StudentType[]
}

export const MapComponent = (props: MapComponentType) => {
    const studentsList = props.students.map((student) => {
        return <li key={student.id}>
            <span>{student.name} </span>
            <span>{student.age}</span>
        </li>
    })

    return <ul>{studentsList}</ul>
};
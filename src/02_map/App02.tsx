import {Students} from './components/Students.tsx';
import {Cars} from './components/Cars.tsx';

export type Student = {
    id: number
    name: string
    age: number
}

export type Car = {
    manufacturer: string
    model: string
}

export const App02 = () => {

    const students: Student[] = [
        {id: 1, name: 'James', age: 8},
        {id: 2, name: 'Robert', age: 18},
        {id: 3, name: 'John', age: 28},
        {id: 4, name: 'Michael', age: 38},
        {id: 5, name: 'William', age: 48},
        {id: 6, name: 'David', age: 58},
        {id: 7, name: 'Richard', age: 68},
        {id: 8, name: 'Joseph', age: 78},
        {id: 9, name: 'Thomas', age: 88},
        {id: 10, name: 'Charles', age: 98},
        {id: 11, name: 'Christopher', age: 100},
    ]

    const cars : Car[] = [
        {manufacturer: 'BMW', model: 'm5'},
        {manufacturer: 'Mercedes', model: 'C200'},
        {manufacturer: 'Audi', model: 'S6'},
    ]

    return <>
            <Students students={students}/>
            <Cars cars={cars}/>
        </>
}
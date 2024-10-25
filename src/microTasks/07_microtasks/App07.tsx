import React, {useState} from "react";
import "./App07.css";
import {Todolist} from "./Todolist";
import {v1} from "uuid";


export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export const App07 = () => {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: "What to learn", filter: "all"},
        {id: todolistID2, title: "What to buy", filter: "all"},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todolistID: string, id: string) {
        setTasks({...tasks, [todolistID]: [...tasks[todolistID].filter(filtered => filtered.id !== id)]})
    }

    function addTask(todolistID: string, title: string) {
        const newTask = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(t => t.id === taskId ? {...t, isDone} : t)})
    }


    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map(todolist => todolist.id === todolistID ? {...todolist, filter: value} : todolist))
    }


    return (
        <div className="App">
            {todolists.map(todolist => {
                let tasksForTodolist = tasks[todolist.id]
                if (todolist.filter === 'active') {
                    tasksForTodolist =  tasks[todolist.id].filter(f => !f.isDone)
                }
                if (todolist.filter === 'completed') {
                    tasksForTodolist =  tasks[todolist.id].filter(f => f.isDone)
                }
                return (
                    <Todolist
                        key={todolist.id}
                        todolistID={todolist.id}
                        title={todolist.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={todolist.filter}
                    />
                )
            })}
        </div>
    );
}
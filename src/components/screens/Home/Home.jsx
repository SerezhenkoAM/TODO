import TodoItem from "./todoItem/TodoItem";
import { useState } from "react";
import React from "react";
import CreateTodoField from "./todoItem/todofield/CreateTodoField";
const Home = () => {
    const data = [
        {id: 1, title:'Download new app ABAKA', isCompleted: false},
        {id: 2, title:'Coock dinner for friend', isCompleted: false},
        {id: 3, title:'Call to Michael', isCompleted: false},
    ]

    const [todos, setTodos] = useState(data)


    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(value => value.id == id )
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(value => value.id != id));
    }

    const addTodo = (title) => {
        const newTodo = { id: new Date(), title: title, isCompleted: false };
        setTodos([...todos, newTodo]);
    }

    return (
        <>
            <div className="text-white w-4/5 mx-auto">
                <h1 className="text-2xl font-bold text-center mb-10 pt-10">TODO List</h1>
                <CreateTodoField addTodo={addTodo}/>
                {
                todos.map((value) => {
                    return <TodoItem className="" key={value.id} todo={value} changeTodo={changeTodo} removeTodo={removeTodo} />
                })
                }
            </div>
        </>
    );
}

export default Home;
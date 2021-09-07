import React, { useState } from 'react';
import './style/TodoCard.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoCard() {
    const [todos, setTodos] = useState([]);

    const addTodo = (e, name) => {
        e.preventDefault();
        setTodos([...todos, name]);
    };

    const editTodo = (e, id) => {
        e.preventDefault();
        const newTodos = [...todos];
        newTodos.splice(id, 1, e.target[0].value);
        setTodos(newTodos);
    };

    const removeTodo = id => {
        const newTodos = [...todos];
        newTodos.splice(id, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todo-card">
            <h1>Todo</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} />

            {todos.length >= 1 ? <button onClick={() => setTodos([])} style={{ margin: "1.5em 0em" }}>Clear Tasks</button> : ""}

        </div>
    );
}


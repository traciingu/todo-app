import React, { useState } from 'react';
import './style/TodoCard.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoCard() {
    const [todos, setTodos] = useState([]);

    const addTodo = (name, completed) => {
        setTodos([...todos, {name: name, completed: completed}]);
    };

    const editTodo = (id, name, completed) => {
        const newTodos = [...todos];
        newTodos.splice(id, 1, {name: name, completed: completed});
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

            <div className="todo-card-options">
                <p>{todos.length} items left</p>
                <div className="todo-card-filter">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                {todos.length >= 1 ? <button onClick={() => setTodos([])} style={{ margin: "1.5em 0em" }}>Clear Tasks</button> : ""}
            </div>

        </div>
    );
}


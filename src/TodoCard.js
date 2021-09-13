import React, { useState } from 'react';
import './style/TodoCard.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { BsMoon } from 'react-icons/bs';

export default function TodoCard() {
    const [todos, setTodos] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const addTodo = (name, completed) => {
        setTodos([...todos, { name: name, completed: completed }]);
    };

    const editTodo = (id, name, completed) => {
        const newTodos = [...todos];
        newTodos.splice(id, 1, { name: name, completed: completed });
        setTodos(newTodos);
    };

    const removeTodo = id => {
        const newTodos = [...todos];
        newTodos.splice(id, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todo-card">
            <header>
                <div className="inner-header">
                    <h1 className="uppercase title">Todo</h1>
                    <button type="button" className="theme-switch-btn"><BsMoon /></button>
                </div>
            </header>

            <div className="todo-card-body">
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} />

                <div className="todo-card-options">
                    <div className="inner-card-options">
                        <p>{todos.length} items left</p>
                        {todos.length >= 1 ? <button onClick={() => setTodos([])} >Clear Tasks</button> : ""}
                    </div>
                    <div className="todo-card-filters">
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
                </div>
            </div>

        </div>
    );
}


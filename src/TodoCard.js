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

    const filterTodos = () => {
        return (
            todos.filter(todo => {
                if(activeFilter === "all") {
                    return todo;
                } else if(activeFilter === "active") {
                    return todo.completed == false;
                } else if(activeFilter === "completed") {
                    return todo.completed == true;
                }
            })
        )
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
                <TodoList todos={filterTodos()} editTodo={editTodo} removeTodo={removeTodo} />

                <div className="todo-card-options">
                    <div className="inner-card-options">
                        <p>{todos.length} items left</p>
                        <button onClick={() => setTodos(todos.filter(todo => todo.completed == false))} >Clear Completed</button>
                    </div>
                    <div className="todo-card-filters">
                        <button onClick={() => setActiveFilter('all')} className={activeFilter.toLowerCase() === "all" ? "active" : ""}>All</button>
                        <button onClick={() => setActiveFilter('active')} className={activeFilter.toLowerCase() === "active" ? "active" : ""}>Active</button>
                        <button onClick={() => setActiveFilter('completed')} className={activeFilter.toLowerCase() === "completed" ? "active" : ""}>Completed</button>
                    </div>
                </div>
            </div>

        </div>
    );
}


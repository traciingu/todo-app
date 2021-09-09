import React, { useState } from 'react';
import './style/TodoList.css';
import {AiOutlineCheckCircle, AiFillCheckCircle} from 'react-icons/ai';

export default function TodoList({ todos, editTodo, removeTodo }) {
    const [editingItemId, setEditingItemId] = useState(-1);
    const [editInput, setEditInput] = useState("");


    const submitEdit = (e, id, name, completed) => {
        e.preventDefault();
        editTodo(id, name, completed);
        setEditingItemId(-1);
        setEditInput("");
    };

    return (
        <div style={{ width: "50%" }}>
            {todos.map((todo, index) => {
                return editingItemId === index ?
                    <form className="todo-item" key={index} onSubmit={e => { console.log(e.target[0].value); submitEdit(e, index, e.target[0].value, todo.completed) }}>
                        <div className="complete-icon">{todo.completed ? <AiFillCheckCircle onClick={() => editTodo(index, todo.name, !todo.completed)}/> : <AiOutlineCheckCircle onClick={() => editTodo(index, todo.name, !todo.completed)}/>}</div>
                        <input type="text" value={editInput} onChange={(e) => { setEditInput(e.target.value) }} />
                        <div className="todo-item-options">
                            <button type="button" className="todo-item-cancel" onClick={() => setEditingItemId(-1)}>C</button>
                            <button type="submit" className="todo-item-submit">S</button>
                        </div>
                    </form>
                    : <div className="todo-item" key={index}>
                        <div className="complete-icon">{todo.completed ? <AiFillCheckCircle onClick={() => editTodo(index, todo.name, !todo.completed)}/> : <AiOutlineCheckCircle onClick={() => editTodo(index, todo.name, !todo.completed)}/>}</div>
                        <p className={todo.completed ? "strike" : ""}>{todo.name}</p>
                        <div className="todo-item-options">
                            <button className="todo-item-delete" onClick={() => { removeTodo(index); }}>D</button>
                            <button className="todo-item-edit" onClick={() => { setEditingItemId(index); setEditInput(todo.name); }}>E</button>
                        </div>
                    </div>
            }
            )}
        </div>
    );
}
import React, { useState } from 'react';
import './style/TodoList.css';

export default function TodoList({ todos, editTodo, removeTodo }) {
    const [editingItemId, setEditingItemId] = useState(-1);
    const [editInput, setEditInput] = useState("");

    const submitEdit = (e, id) => {
        editTodo(e, id);
        setEditingItemId(-1);
        setEditInput("");
    };

    return (
        <div style={{ width: "50%" }}>
            {todos.map((todo, index) => {
                return editingItemId === index ?
                    <form className="todo-item" key={index} onSubmit={e => { submitEdit(e, index) }}>
                        <input type="text" value={editInput} onChange={(e) => { setEditInput(e.target.value) }} />
                        <div className="todo-item-options">
                            <button type="button" className="todo-item-cancel" onClick={() => setEditingItemId(-1)}>C</button>
                            <button type="submit" className="todo-item-submit">S</button>
                        </div>
                    </form>
                    : <div className="todo-item" key={index}>
                        <p>{todo}</p>
                        <div className="todo-item-options">
                            <button className="todo-item-delete" onClick={() => { removeTodo(index); }}>D</button>
                            <button className="todo-item-edit" onClick={() => { setEditingItemId(index); setEditInput(todo); }}>E</button>
                        </div>
                    </div>
            }
            )}
        </div>
    );
}
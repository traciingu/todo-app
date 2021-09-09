import React, { useState } from 'react';
import {AiOutlineCheckCircle, AiFillCheckCircle} from 'react-icons/ai';

export default function TodoForm({ addTodo }) {
    const [name, setName] = useState("");
    const [completed, setCompleted] = useState(false);

    return (
        <form className="create-todo-form" onSubmit={e => { e.preventDefault(); addTodo(name, completed); setName(""); }}>
            <div className="complete-icon">{completed ? <AiFillCheckCircle onClick={() => setCompleted(!completed)}/> : <AiOutlineCheckCircle onClick={() => setCompleted(!completed)} />}</div>
            <input type="text" className={completed ? "strike" : ""} value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">S</button>
        </form>
    );
}
import React, { useState } from 'react';


export default function TodoForm({ addTodo }) {
    const [name, setName] = useState("");

    return (
        <form className="create-todo-form" onSubmit={e => { addTodo(e, name); setName(""); }}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}
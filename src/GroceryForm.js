import React, { useState, useEffect } from 'react';


export default function GroceryCard({ addItem }) {
    const [name, setName] = useState("");

    return (
        <form className="create-item-form" onSubmit={e => { addItem(e, name); setName(""); }}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}
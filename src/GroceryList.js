import React, { useState } from 'react';
import './style/GroceryList.css';

export default function GroceryList({ list, editItem, removeItem }) {
    const [editingItemId, setEditingItemId] = useState(-1);
    const [editInput, setEditInput] = useState("");

    const submitEdit = (e, id) => {
        editItem(e, id);
        setEditingItemId(-1);
        setEditInput("");
    };

    return (
        <div style={{ width: "50%" }}>
            {list.map((item, index) => {
                return editingItemId === index ?
                    <form className="grocery-item" key={index} onSubmit={e => { submitEdit(e, index) }}>
                        <input type="text" value={editInput} onChange={(e) => { setEditInput(e.target.value) }} />
                        <div className="grocery-item-options">
                            <button type="button" className="grocery-item-cancel" onClick={() => setEditingItemId(-1)}>C</button>
                            <button type="submit" className="grocery-item-submit">S</button>
                        </div>
                    </form>
                    : <div className="grocery-item" key={index}>
                        <p>{item}</p>
                        <div className="grocery-item-options">
                            <button className="grocery-item-delete" onClick={() => { removeItem(index); }}>D</button>
                            <button className="grocery-item-edit" onClick={() => { setEditingItemId(index); setEditInput(item); }}>E</button>
                        </div>
                    </div>
            }
            )}
        </div>
    );
}
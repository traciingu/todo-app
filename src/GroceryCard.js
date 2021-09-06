import React, { useState, useEffect } from 'react';
import GroceryItem from './GroceryList';
import './style/GroceryCard.css';


export default function GroceryCard() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [editingItemId, setEditingItemId] = useState(-1);
    const [editInput, setEditInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, name]);
        setName("");
        console.log(list.length);
        list.map((item, index) => console.log(`Index: ${index} - ${item} `))
    }

    const editItem = (e, id) => {
        e.preventDefault();
        const newList = [...list];
        newList.splice(id, 1, e.target[0].value);
        setList(newList);
        setEditingItemId(-1);
    };

    const removeItem = id => {
        const newList = [...list];
        newList.splice(id, 1);
        setList(newList);
    };

    return (
        <div className="grocery-card">
            <h1>Grocery List</h1>
            <form className="create-item-form" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            {list.map((item, index) => {
                return editingItemId === index ?
                    <div className="grocery-item editting" key={index}>
                        <form onSubmit={e => { return editItem(e, index);}}>
                            <input type="text" value={editInput} onChange={(e) => { setEditInput(e.target.value) }} />
                            <div className="grocery-item-options">
                            <button type="button" className="grocery-item-cancel" onClick={() => setEditingItemId(-1)}>C</button>
                            <button type="submit" className="grocery-item-submit">S</button>
                            </div>
                        </form>
                    </div>
                    : <div className="grocery-item" key={index}>
                        <p>{item}</p>
                        <div className="grocery-item-options">
                            <button className="grocery-item-delete" onClick={() => { console.log("Delete"); removeItem(index); }}>D</button>
                            <button className="grocery-item-edit" onClick={() => { console.log("Edit"); setEditingItemId(index); setEditInput(item); }}>E</button>
                        </div>
                    </div>
            }
            )}

            {list.length >= 1 ? <button onClick={() => setList([])} style={{ margin: "1.5em 0em" }}>Clear Items</button> : ""}
        </div>
    );
}
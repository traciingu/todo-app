import React, { useState } from 'react';
import './style/GroceryCard.css';
import GroceryForm from './GroceryForm';
import GroceryList from './GroceryList';

export default function GroceryCard() {
    const [list, setList] = useState([]);

    const addItem = (e, name) => {
        e.preventDefault();
        setList([...list, name]);
        console.log(list.length);
        list.map((item, index) => console.log(`Index: ${index} - ${item} `))
    };

    const editItem = (e, id) => {
        e.preventDefault();
        const newList = [...list];
        newList.splice(id, 1, e.target[0].value);
        setList(newList);
    };

    const removeItem = id => {
        const newList = [...list];
        newList.splice(id, 1);
        setList(newList);
    };

    return (
        <div className="grocery-card">
            <h1>Grocery List</h1>
            <GroceryForm addItem={addItem} />
            <GroceryList list={list} editItem={editItem} removeItem={removeItem} />
            {list.length >= 1 ? <button onClick={() => setList([])} style={{ margin: "1.5em 0em" }}>Clear Items</button> : ""}
        </div>
    );
}


import React, { useState, useEffect } from 'react';
import './style/GroceryCard.css';

export default function GroceryCard() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setList([...list, name]);
    }

    return (
        <div className="grocery-card">
            <h1>Grocery List</h1>
            {/* <div className="inner-grocery-card"> */}
                <form className="create-item-form" onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                {list.map(item => <p style={{width: "50%", margin: ".2em 0em", padding: ".2em 0em", paddingLeft: "1em", backgroundColor: "#fffef0", borderRadius: ".15em" }}>{item}</p>)}
                <button onClick={() => setList([])} style={{ margin: "1.5em 0em" }}>Clear Items</button>
            {/* </div> */}
        </div>
    );
}
import React, {useState, useEffect } from 'react';

export default function GroceryCard(){
    const [name, setName] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, name])
    }

    return(
        <div>
            <h1>Grocery List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            {list.map(item => <p>{item}</p>)}
        </div>
    );
}
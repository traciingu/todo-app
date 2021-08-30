import React from 'react';
import ReactDOM from 'react-dom';

import GroceryCard from './GroceryCard';

export default function App(){
    return(
        <div>
            <GroceryCard/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
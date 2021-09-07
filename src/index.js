import React from 'react';
import ReactDOM from 'react-dom';

import TodoCard from './TodoCard';

export default function App(){
    return(
        <div>
            <TodoCard/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
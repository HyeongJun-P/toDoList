import React from 'react';
import DoLitem from './DoLitem';
import './DoList.scss';

const DoList = ({todos}) => {
    return (
        <div className="DoList">
            {todos.map((todo) => (
                <DoLitem todo = {todo} id = {todo.id}/>
            ))}
        </div>
    );
}

export default DoList;
import React from 'react';
import DoLitem from './DoLitem';
import './DoList.scss';

const DoList = () => {
    return (
        <div className="DoList">
            <DoLitem/>
            <DoLitem/>
            <DoLitem/>
        </div>
    );
}

export default DoList;
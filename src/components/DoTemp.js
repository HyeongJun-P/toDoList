import React from 'react';
import './DoTemp.scss';

const DoTemp = ({children}) => {
    return (
    <div className="doTemp">
        <div className="title">일정 관리</div>
        <div className="content">{children}</div>
    </div>
    );
}
 
export default DoTemp;
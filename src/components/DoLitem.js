import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import './DoLitem.scss';

const DoLitem = () => {
    return (
        <div className="DoLitem">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank/>
                <div className="text">할 일</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
}

export default DoLitem;
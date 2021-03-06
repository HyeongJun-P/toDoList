import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import './DoLitem.scss';

const DoLitem = ({todo, onRemove, onToggle}) => {
    const {id,text, checked} = todo; 

    return (
        <div className="DoLitem">
            <div className={cn('checkbox', {checked})} onClick={() => {
                onToggle(id)
            }}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => {
                onRemove(id)
            }}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
}

export default DoLitem;
import React from "react";
import DoLitem from "./DoLitem";
import "./DoList.scss";

const DoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="DoList">
      {todos.map((todo) => (
        <DoLitem todo={todo} id={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default DoList;

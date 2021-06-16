import React from "react";
import DoLitem from "./DoLitem";
import "./DoList.scss";

const DoList = ({ todos, onRemove }) => {
  return (
    <div className="DoList">
      {todos.map((todo) => (
        <DoLitem todo={todo} id={todo.id} onRemove={onRemove}/>
      ))}
    </div>
  );
};

export default DoList;

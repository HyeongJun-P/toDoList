import React, {memo} from "react";
import DoLitem from "./DoLitem";
import "./DoList.scss";

const DoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="DoList">
      {todos.map((todo) => (
        <DoLitem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default memo(DoList);

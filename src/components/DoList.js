import React, {memo, useCallback} from "react";
import DoLitem from "./DoLitem";
import { List } from 'react-virtualized';
import "./DoList.scss";

const DoList = ( {todos, onRemove, onToggle} ) => {

  const rowRenderer = useCallback(
    ({ index, key, style}) => {
      const todo = todos[index];
      return(
        <DoLitem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );
  return (
    <List 
      className="DoList"
      width={512}
      list={todos}
      rowCount={todos.length()}
      rowHeight={57}
      rowRenderer={rowRenderer}
      style= {{outline : 'none'}}
    />
  );
}

export default memo(DoList);


// <div className="DoList">
    //   {todos.map((todo) => (
    //     <DoLitem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
    //   ))}
    // </div>
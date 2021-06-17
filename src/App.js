import React, { useReducer, useRef, useCallback } from "react";
import DoTemp from "./components/DoTemp";
import DoInsert from "./components/DoInsert";
import DoList from "./components/DoList";

const createTodos = () => {
  const array = [];

  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
};

const DoReducer = (todos, action) => {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
};


const App = () => {
  const [todos, dispatch] = useReducer(DoReducer, undefined, createTodos);
  
  const nextId = useRef(2501);
  
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);
  
  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);
  
  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <DoTemp>
      <DoInsert onInsert={onInsert} />
      <DoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </DoTemp>
  );
};

export default App;

// const App = () => {

//   const [todos, setTodos] = useState([{
//     id:1,
//     text:'리액트의 기초 알아보기',
//     checked:true
//   },
//   {
//     id:2,
//     text:'컴포넌트 스타일링해 보기',
//     checked:true
//   },
//   {
//     id:3,
//     text:'일정 관리 앱 만들어 보기',
//     checked:false
//   }]);

//   const nextId = useRef(4);

//   const onInsert = useCallback(
//     text => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked:false,
//       }
//       setTodos(todos => todos.concat(todo));
//       nextId.current += 1;
//     }
//     ,[]
//   );

//   const onRemove = useCallback(
//     id => {
//       setTodos(todos => todos.filter(todo => todo.id !== id))
//     },
//     []
//   );

//   const onToggle = useCallback(
//     id => {
//       setTodos(todos =>
//         todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked}:todo)
//       );
//     },[]
//   );

//   return (
//     <DoTemp>
//       <DoInsert onInsert={onInsert}/>
//       <DoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
//     </DoTemp>
//   );
// }
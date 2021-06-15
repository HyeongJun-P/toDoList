import React, {Component, createRef} from "react";
import DoTemp from "./components/DoTemp";
import DoInsert from "./components/DoInsert";
import DoList from "./components/DoList";

class App extends Component {
  state = {
    todos:[
      {id:1, text:"리액트의 기초 알아보기", checked:true},
      {id:1, text:"컴포넌트 스타일링해 보가", checked:true},
      {id:1, text:"일정 관리 앱 만들어 보기", checked:false},
    ]
  }
  render() { 

    const nextId = createRef(4);

    const onInsert = (
      text => {
        const todo = {
          id: nextId.current,
          text,
          checked:false,
        }
      }
    )
    
      const todos = this.state

  return (
        <div>
          <DoTemp>
            <DoInsert />
            <DoList todos={todos}/>
          </DoTemp>
        </div>
    );
  }
}

export default App

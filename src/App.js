import React from "react";
import DoTemp from "./components/DoTemp";
import DoInsert from "./components/DoInsert";
import DoList from "./components/DoList";

class App extends React.Component {
  state = {  }
  render() { 
  return (
        <div>
          <DoTemp>
            <DoInsert />
            <DoList />
          </DoTemp>
        </div>
    );
  }
}

export default App

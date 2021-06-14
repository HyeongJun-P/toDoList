import React from "react";
import DoTemp from "./components/DoTemp";
import DoInsert from "./components/DoInsert";

const App = () => {
  return (
    <div>
      <DoTemp>
        <DoInsert />
      </DoTemp>
    </div>
  );
};

export default App;

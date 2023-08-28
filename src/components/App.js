
import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  const [completed, setCompeleted] = useState(false);
  return (
    <div>
        <Todo completed={completed} setCompeleted={setCompeleted}/>
    </div>
  )
}

export default App

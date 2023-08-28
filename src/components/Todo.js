import React from 'react'

const Todo = ({completed, setCompleted}) => {

    const handleTask = ()=>{
        setCompleted(true);
    }

  return (
    <div>
        <li>Lear React<button onClick={handleTask} className={completed?"active":""}>Complete</button></li>
        <li>Build a React app<button onClick={handleTask} className={completed?"active":""}>Complete</button></li>
        <li>Deploy the React app<button onClick={handleTask} className={completed?"active":""}>Complete</button></li>
    </div>
  )
}

export default Todo
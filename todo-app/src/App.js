import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodo] = useState([]);
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === '') {
      alert("Todo name can not be empty!");
      return
    }
    // add to todo list
    setTodo(prevTodos => {
      return [...prevTodos, {id: 1, name: name, completed: false}]
    })

    // clear textbox
    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
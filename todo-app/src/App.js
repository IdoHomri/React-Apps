import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import {v4 as uuid} from "uuid"

const LOCAL_STORAGE_KEY = "todos"

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  // load existing todos from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // store current session created todos in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === '') {
      alert("Todo name can not be empty!");
      return
    }
    // add to todo list
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: name, completed: false}]
    })

    // clear textbox
    todoNameRef.current.value = null
  }

  function handleClearCompleted() {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <>
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearCompleted}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.completed).length} left to do</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
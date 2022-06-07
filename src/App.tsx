import './App.css';
import { Todos } from './components/Todos';
import React, { useState, useReducer, FunctionComponent } from 'react'


function App() {
  const [todo, setTodo] = useState<string[]>([])
  const [value, setValue] = useState('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    return (
      setValue(e.target.value)
    )
  }

  const handleClick = () =>{
    let todos = [...todo, value]
    setTodo(todos)
  }

  console.log(todo)
  return (
    <>
      <div className='todo-container'>
        <label htmlFor="todo">Enter  Todo:</label>
        <input type="text" id="todo" className='input' onChange={handleChange} value={value} /> <input type="submit" onClick={handleClick} />
        <Todos todo={todo} />
      </div>

    </>
  )
}

export default App;

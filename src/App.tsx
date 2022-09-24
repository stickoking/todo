import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './models'
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault()
    if (todo !== '') {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo('')
    }
  }
  console.log(todos)
  return (
    <div className='app'>
      <span className='heading'>Todo</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  )
}

export default App

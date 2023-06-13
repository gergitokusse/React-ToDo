import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoHeader from './Components/todo-header'
import ToDoLogic from './Components/todoLogic'

function App() {
  return (
    <>
      <div className='todoApp'>
        < ToDoHeader />
        < ToDoLogic />
      </div>
    </>
  )
}

export default App

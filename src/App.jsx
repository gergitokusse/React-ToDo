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

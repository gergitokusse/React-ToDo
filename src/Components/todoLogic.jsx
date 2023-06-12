import { useState } from "react";
import ToDoInput from "./todoInput";
import ToDoList from "./todolist";
const ToDoLogic = () => {
    const [todos, setTodos] = useState([
        {
            task: 'task-1',
            id: 1,
            complete: false
        },
        {
            task: 'Task-2',
            id:2,
            complete: true
        },
        {
            task: 'Task-3',
            id:3,
            complete: false,
        }
    ]);
    return(
        <div className="todologic">
            <ToDoInput />
            <ToDoList todosProps={todos} setTodos={setTodos} />
        </div>
    );
}

export default ToDoLogic;
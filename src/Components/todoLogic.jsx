import ToDoInput from "./todoInput";
import ToDoList from "./todolist";
const ToDoLogic = () => {
    return(
        <div className="todologic">
            <ToDoInput />
            <ToDoList />
        </div>
    );
}

export default ToDoLogic;
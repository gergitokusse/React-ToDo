import { useRef, useState, useEffect } from "react";
const ToDoInput = () => {
    const ref = useRef();
    let [data, setData] = useState([{task: 'Task-1', completed: false, index: 1}]);
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('React-Todo')));
    }, [data])
    const sbt = ((e) => {
        e.preventDefault();
        const task = ref.current.value;
        const newtask = {task: task, completed: false, index: data.length+1};
        const newa = data.push(newtask);
        console.log(newtask)
        localStorage.setItem('React-Todo', JSON.stringify(newa));
    });
    
    const changeValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const [state, setState] = useState({
        fname: "",
    });
    return(
        <div className="todoinput">
            <form className="form" id="form">
                <input type="text" ref={ref} name="fname" id="myid" value={state.fname} onChange={changeValue} placeholder="Add your task here!!!" />
                <button type="submit" onClick={sbt}>
                    <i className="bi-plus-circle-fill" ></i>
                </button>               
            </form>
            <p>New input taask : { state.fname}</p>
        </div>      
    );
}

export default ToDoInput;
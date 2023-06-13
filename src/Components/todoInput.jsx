import { useRef, useState, useEffect } from "react";
import { GetLocalData, updateLocaData } from "./localsrotage";
const ToDoInput = () => {
    const ref = useRef();
    let [data, setData] = useState(GetLocalData);

    useEffect(() => {
        const savedData = GetLocalData();
        if(savedData){
            setData(savedData);
        }
    }, [])

    const sbt = ((e) => {
        const task = ref.current.value;
        if(task){
            const newtask = {task: task, completed: false, index: data.length+1};
            updateLocaData(newtask);
            ref.current.value = "";
        } else { e.preventDefault(); }
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
            <p>Live New Task : { state.fname}</p>
        </div>      
    );
}

export default ToDoInput;
const ToDoInput = () => {
    return(
        <div className="todoinput">
            <form className="form">
                <input type="text" placeholder="Add your task here!!!" />
                <button>
                <i className="bi-plus-circle-fill" ></i>
                </button>   
            </form>
        </div>      
    );
}

export default ToDoInput;
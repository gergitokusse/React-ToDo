const ToDoItemLists = () => {
    const change = () => {
        alert('message')
    }
    return(
        <>
            <div className="todoitem">
                <span>
                    <input type="checkbox" onClick={change} />
                    <span>Item-1</span>
                </span>
                <span>
                <i className="bi-pencil-fill" />
                <i className="bi-trash" />
                </span>
            </div>
            <div className="todoitem">
                <span>
                    <input type="checkbox" />
                    <span>Item-2</span>
                </span>
                <span>
                <i className="bi-pencil-fill" />
                <i className="bi-trash" />
                </span>
            </div>
        </>
    );
}

export default ToDoItemLists;
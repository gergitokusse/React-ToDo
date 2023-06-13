import { GetLocalData } from "./localsrotage";

const ToDoItemLists = () => {
    const localData = GetLocalData();
    return(
        <>            
        {localData.map((data, key) => (
            <div key={key} className="todoitem">
                <span>
                    <input type = "checkbox" />
                    <span>{data.task} </span>
                </span>
                <span>
                    <i className="bi-pencil-fill" />
                    <i className="bi-trash" />
                </span>
            </div>                    
        ))}

        </>
    );
}

export default ToDoItemLists;
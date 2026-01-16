import { useState } from 'react';


function ToDo() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, task]);
        setTask('');
    }

    return (
        <div className="todo-container">
            <form>
                <input type="text" name="task" value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={addTask}
                >
                    Add Task
                </button>
            </form>
            <h3>Current Task: {task}</h3>
            <ul>
                {taskList.map((task) => (
                    <li>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo;
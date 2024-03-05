import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Task } from "./components/Task";
import { useState,useEffect } from "react";
function App() {

    const [task, setTask] = useState(Task);

    useEffect(() => {
    setTask(task);
    }, []);

    function createTask (Task) {
        setTask([...Task, Task])
    }
    return (
        <div>
            <TaskForm createTask={createTask}/>
            <TaskList Task={task}/>
        </div>
    )
}

export default App
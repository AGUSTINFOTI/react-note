import React from 'react'
import { useState } from 'react'

function TaskForm({createTask}) {

    const [title, setTitle] = useState()

    const handlesubmit = (e) => {
        e.preventDefould();
        const newTask = {
            title: title,
            id: 4,
            description: "algo nuevo"
        }
        createTask(newTask)
    }

return (
        <form onSubmit={handlesubmit}>
            <input placeholder='Escribe tu tarea'
            onChange={(e) => setTitle (e.target.value)}/>
            <button>
                Guardar
            </button>
        </form>
)
}

export default TaskForm
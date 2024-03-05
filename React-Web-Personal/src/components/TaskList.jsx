import { Task } from "./Task";


console.log(Task);

function TaskList({task}) {


  if (Task.length === 0) {
    return <h1>no hay tareas aun</h1>;
  }

  return (
    <div>
      {Task.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

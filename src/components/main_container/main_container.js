import "./main_container.css";
import TaskContainer from "../task_container/task_container.js";

export default function MainContainer() {
  return (
    <div className="main-container">
      <h1> Task Manager </h1>
      <div className="task-control">
        <input type="text" placeholder="Enter a new task..." />
        <button> + Add </button>
      </div>
      <TaskContainer></TaskContainer>
    </div>
  );
}

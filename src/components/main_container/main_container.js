import "./main_container.css";

export default function MainContainer() {
  return (
    <div className="main-container">
      <h1> Task Manager </h1>
      <input type="text" placeholder="Enter a new task..." />
      <button> + Add task </button>
      {/* component for displaying the list of tasks will go here - a container */}
    </div>
  );
}

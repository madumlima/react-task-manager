import "./task_input.css";

export default function TaskInput({ value, onChange, placeholder }) {
  return (
    <>
      <input
        type="text"
        className="task-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {/* This placeholder needs to be dynamic. When used to enter a new task, then show the placeholder. When used to edit an existing task, it should show the current text */}
    </>
  );
}

import "./task_count.css";

export default function TaskCount({
	totalTaskCount,
	pendingTaskCount,
	completedTaskCount,
}) {
	return (
		<div className="task-count-container">
			<p className="task-count-stat">
				Total: {totalTaskCount}{" "}
				{totalTaskCount === 1 ? <span>task</span> : <span>tasks</span>} |
			</p>
			<p className="task-count-stat">Completed: {completedTaskCount} |</p>
			<p className="task-count-stat">Pending: {pendingTaskCount}</p>
		</div>
	);
}

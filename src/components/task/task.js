"use client";

import { useState } from "react";
import "./task.css";
import { FaCheck, FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import TaskInput from "../task_input/task_input";

export default function Task({
	description,
	id,
	onDelete,
	handleToggleTaskCompleted,
	isCompleted,
}) {
	const [isEditing, setIsEditing] = useState(false);

	const [taskText, setTaskText] = useState(description);

	const [draftText, setDraftText] = useState("");

	const handleEditClick = () => {
		setIsEditing(true);
		setDraftText(taskText);
	};

	const handleSaveClick = () => {
		setTaskText(draftText);
		setIsEditing(false);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSaveClick();
		}
	};

	const handleCancelClick = () => {
		setIsEditing(false);
	};

	const handleDeleteClick = () => {
		onDelete(id);
	};

	return (
		<div className="task">
			<div className="task-wrapper task-content">
				<input
					type="checkbox"
					className="checkbox"
					onClick={() => handleToggleTaskCompleted(id)}
				></input>

				{isEditing ? (
					<TaskInput
						value={draftText}
						onChange={(e) => setDraftText(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder=""
					/>
				) : (
					<p className={isCompleted ? "completed-task-text-decoration" : ""}>
						{" "}
						{taskText}{" "}
					</p>
				)}
			</div>

			<div className="task-wrapper">
				{isEditing ? (
					<>
						<button className="check-button" onClick={handleSaveClick}>
							<FaCheck />
						</button>
						<button className="cancel-button" onClick={handleCancelClick}>
							<FaTimes />
						</button>
					</>
				) : (
					<>
						<button className="edit-button" onClick={handleEditClick}>
							<FaPencilAlt />
						</button>
						<button className="delete-button" onClick={handleDeleteClick}>
							<FaRegTrashAlt />
						</button>
					</>
				)}
			</div>
		</div>
	);
}

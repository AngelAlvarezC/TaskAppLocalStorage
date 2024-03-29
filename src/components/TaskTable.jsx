import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
	const TaskTableRows = (doneValue) => {
		return tasks
			.filter((task) => task.done === doneValue)
			.map((task) => (
				<TaskRow task={task} key={task.name} toggleTask={toggleTask} />
			));
	};
	return (
		<table className="table table-dark table-striped table-bordered bordered-secondary">
			<thead>
				<tr className="table-primary">
					<th>Tasks</th>
				</tr>
			</thead>
			<tbody>{TaskTableRows(showCompleted)}</tbody>
		</table>
	);
};

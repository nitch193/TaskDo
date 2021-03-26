export default function createTaskBody() {
  const task = document.createElement("div");
  task.className = "task";
  const taskName = document.createElement("div");
  taskName.className = "task-name";
  const taskControl = document.createElement("div");
  taskControl.className = "task-control";
  const editTaskBtn = document.createElement("button");
  editTaskBtn.className = "edit-task-btn";
  editTaskBtn.textContent = "✍";
  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.className = "delete-task";
  deleteTaskBtn.textContent = "X";
  taskControl.appendChild(editTaskBtn);
  taskControl.appendChild(deleteTaskBtn);
  task.appendChild(taskName);
  task.appendChild(taskControl);
  return task;
}
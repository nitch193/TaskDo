import deleteThisTask from "./deleteThisTask";
import updateTask from "./updateTask";
export default function createTaskBody(allProjects) {
  const task = document.createElement("div");
  task.className = "task";
  const taskName = document.createElement("div");
  taskName.className = "task-name";
  const taskControl = document.createElement("div");
  taskControl.className = "task-control";
  const editTaskBtn = document.createElement("button");
  editTaskBtn.className = "edit-task-btn";
  editTaskBtn.innerHTML = "&#x1F589";
  editTaskBtn.onclick = function () {
    updateTask(this, allProjects);
  };
  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.className = "delete-task";
  deleteTaskBtn.innerHTML = "&#128465";
  deleteTaskBtn.onclick = function () {
    deleteThisTask(this, allProjects);
  };
  taskControl.appendChild(editTaskBtn);
  taskControl.appendChild(deleteTaskBtn);
  task.appendChild(taskName);
  task.appendChild(taskControl);
  return task;
}

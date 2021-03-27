import { editTaskForm } from "../index";
import createTaskObject from "./createTaskObject";
import renderupDatedTask from "./renderUpdatedTask";

export default function updateTask(task, allProjects) {
  editTaskForm.classList.add("show-edit-task");
  let [
    taskName,
    due,
    priority,
  ] = task.parentNode.previousSibling.textContent.split("/");
  editTaskForm.children[0].value = taskName;
  editTaskForm.children[1].value = due;
  editTaskForm.children[2].value = priority;
  editTaskForm.children[3].onclick = function () {
    editTaskForm.classList.remove("show-edit-task");
    let valid =
      editTaskForm.children[2].value &&
      editTaskForm.children[1].value &&
      editTaskForm.children[1].value;
    if (valid) {
      taskName = editTaskForm.children[0].value;
      due = editTaskForm.children[1].value;
      priority = editTaskForm.children[2].value;
      let upDatedTask = new createTaskObject(taskName, due, priority);
      renderupDatedTask(upDatedTask, task, allProjects);
    } else return;
  };
}

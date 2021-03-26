import createTaskObject from "./createTaskObject";
import getAllProject from "./getAllProject";
import renderTasks from "./renderTasks";
import saveLocalStorage from "./saveLocalStorage";
import { taskBody } from "../index";
export default function newTask(
  addTaskbtn,
  editTask,
  allProjects,
  selectedProject
) {
  addTaskbtn.addEventListener("click", () => {
    editTask.style.transform = "translateY(200px)";
    selectedProject = taskBody.firstChild.textContent;
  });
  editTask.children[3].addEventListener("click", () => {
    editTask.style.transform = "translateY(800px)";
    let taskName = editTask.children[0].value;
    let due = editTask.children[1].value;
    let priority = editTask.children[2].value;
    let TaskObject = new createTaskObject(taskName, due, priority);
    let index = getAllProject(allProjects).indexOf(selectedProject);
    allProjects[index].Tasks.push(TaskObject);
    saveLocalStorage(allProjects);
    renderTasks(selectedProject, allProjects);
  });
}

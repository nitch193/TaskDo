import createTaskObject from "./createTaskObject";
import getAllProject from "./getAllProject";
import renderTasks from "./renderTasks";
import saveLocalStorage from "./saveLocalStorage";
import { taskBody } from "../index";
export default function newTask(editTask, allProjects, selectedProject) {
  editTask.children[6].addEventListener("click", () => {
    console.log(taskBody);
    selectedProject = taskBody.childNodes[0].textContent;
    console.log(selectedProject);
    let taskName = editTask.children[1].value;
    let due = editTask.children[3].value;
    let priority = editTask.children[5].value;
    let TaskObject = new createTaskObject(taskName, due, priority);

    let index = getAllProject(allProjects).indexOf(selectedProject);
    allProjects[index].Tasks.push(TaskObject);
    saveLocalStorage(allProjects);
    renderTasks(selectedProject, allProjects);
  });
}

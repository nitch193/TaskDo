import getAllProject from "./getAllProject";
import renderTasks from "./renderTasks";
import saveLocalStorage from "./saveLocalStorage";

export default function deleteThisTask(button, allProjects) {
  let selectedProject =
    button.parentNode.parentNode.parentNode.firstChild.textContent;
    
  let projectIndex = getAllProject(allProjects).indexOf(selectedProject);
  let allTasks = allProjects[projectIndex].Tasks;
  let selectedTask = button.parentNode.previousSibling.textContent.split(
    "/"
  )[0];
  let allTasksNames = allTasks.map((task) => task.taskName);
  let index = allTasksNames.indexOf(selectedTask);
  allTasks.splice(index, 1);
  allProjects[projectIndex].Tasks = allTasks;
  saveLocalStorage(allProjects);
  renderTasks(selectedProject, allProjects);
}

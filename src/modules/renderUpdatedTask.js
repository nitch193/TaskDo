import getAllProject from "./getAllProject";
import saveLocalStorage from "./saveLocalStorage";
import renderTasks from "./renderTasks";
export default function renderupDatedTask(upDatedTask, task, allProjects) {
  let tobeUpdated = task.parentNode.previousSibling.textContent.split("/")[0];
  let selectedProject =
    task.parentNode.parentNode.parentNode.firstChild.textContent;
  let projectIndex = getAllProject(allProjects).indexOf(selectedProject);
  for (let i = 0; i < allProjects[projectIndex].Tasks.length; i++) {
    if (allProjects[projectIndex].Tasks[i].taskName === tobeUpdated) {
      allProjects[projectIndex].Tasks[i] = upDatedTask;
    }
  }
  saveLocalStorage(allProjects);
  renderTasks(selectedProject, allProjects);
}

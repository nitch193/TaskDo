import { taskBody } from "../index";
import clearTaskBody from "./clearTaskBody";
import createTaskBody from "./createTaskBody";
import getAllProject from "./getAllProject";
import getAllTasks from "./getAllTasks";
export default function renderTasks(selectedProject, allProjects) {
  let allProjectNames = getAllProject(allProjects);
  if (allProjectNames.includes(selectedProject)) {
    clearTaskBody(taskBody);
    let tasks = getAllTasks(allProjects, selectedProject);
    taskBody.firstChild.textContent = tasks.name;
    for (let i = 0; i < tasks.Tasks.length; i++) {
      let taskDiv = createTaskBody();
      taskDiv.firstChild.textContent =
        tasks.Tasks[i].taskName + tasks.Tasks[i].due + tasks.Tasks[i].priority;
      taskBody.appendChild(taskDiv);
    }
  }
}

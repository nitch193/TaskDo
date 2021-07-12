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
    const projectnamediv = document.createElement("div");  
    taskBody.appendChild(projectnamediv);
    projectnamediv.textContent = selectedProject
    for (let i = 0; i < tasks.Tasks.length; i++) {
      let taskDiv = createTaskBody(allProjects);
      taskDiv.firstChild.textContent = `${i+1}`;
      taskDiv.childNodes[1].firstChild.firstChild.textContent = tasks.Tasks[i].taskName;
      taskDiv.childNodes[1].childNodes[1].firstChild.textContent = `Priority: ${tasks.Tasks[i].priority}`
      taskDiv.childNodes[1].childNodes[2].firstChild.textContent = `Due-Date: ${tasks.Tasks[i].due}` 
      taskBody.appendChild(taskDiv);
    }
  }
}

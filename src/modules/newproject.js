import createProject from "./createProject";
import getAllProject from "./getAllProject";
import renderProjects from "./renderprojects";
import saveLocalStorage from "./saveLocalStorage";

export default function newProject(projectsDiv, editProject, allProjects) {
  let okButton = editProject.children[2];
  okButton.addEventListener("click", () => {
    let projectInput = editProject.children[1];
    if (!projectInput.value.length) return;
    let allProjectNames = getAllProject(allProjects);
    if (allProjectNames.includes(projectInput.value.toLowerCase())) return;
    let projects = new createProject(projectInput.value, []);
    allProjects.push(projects);
    renderProjects(projectsDiv, allProjects);
    saveLocalStorage(allProjects);
  });
}

import createProject from "./createProject";
import getAllProject from "./getAllProject";
import renderProjects from "./renderprojects";
import saveLocalStorage from "./saveLocalStorage";

export default function newProject(addProject, editProject, allProjects) {
  let okButton = editProject.children[1];
  addProject.addEventListener("click", () => {
    editProject.style.transform = "translateY(300px)";
  });
  okButton.addEventListener("click", () => {
    let projectInput = editProject.children[0];
    if (!projectInput.value.length) return;
    let allProjectNames = getAllProject(allProjects);
    if (allProjectNames.includes(projectInput.value.toLowerCase())) return;
    let projects = new createProject(projectInput.value, []);
    allProjects.push(projects);
    renderProjects(addProject.nextElementSibling, allProjects);
    saveLocalStorage(allProjects);
    editProject.style.transform = "translateY(-300px)";
  });
}

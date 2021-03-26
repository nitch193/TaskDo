import clearPrjoectList from "./clearProjectList";
import projectDiv from "./projectDiv";

export default function renderProjects(projects, allProjects, selectedProject) {
  clearPrjoectList(projects);
  for (let i = 0; i < allProjects.length; i++) {
    let project = projectDiv(selectedProject, allProjects);
    project.firstChild.textContent = allProjects[i].name;
    projects.append(project);
  }
}

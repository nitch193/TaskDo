import getAllProject from "./getAllProject";

export default function getAllTasks(allProjects, selectedProject) {
  let index = getAllProject(allProjects).indexOf(selectedProject);
  let project = allProjects[index];
  return project;
}

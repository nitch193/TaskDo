import getAllProjects from "./getAllProject";
import renderProjects from "./renderprojects";
import renderTasks from "./renderTasks";
import saveLocalStorage from "./saveLocalStorage";
export default function deleteThisProject(button, allProjects) {
  let toBeDeleted = button.parentNode.previousSibling.textContent;
  let projectList = getAllProjects(allProjects);
  let index = projectList.indexOf(toBeDeleted);
  allProjects.splice(index, 1);
  saveLocalStorage(allProjects);
  renderProjects(
    button.parentNode.parentNode.parentNode,
    allProjects,
    "defaultproject"
  );
  renderTasks("defaultproject", allProjects);
}

import renderTasks from "./renderTasks";
import deleteThisProject from "./deleteProject";
import { editProjectForm } from "../index";
import getAllProject from "./getAllProject";
import createProject from "./createProject";
import saveLocalStorage from "./saveLocalStorage";
import renderProjects from "./renderprojects";
// import getAllProject from "./getAllProject";
// import saveLocalStorage from "./saveLocalStorage";
// import renderProjects from "./renderprojects";
export default function projectDiv(selectedProject, allProjects) {
  const project = document.createElement("div");
  project.className = "project";
  const projectName = document.createElement("div");
  projectName.className = "project-name";
  projectName.onclick = function () {
    selectedProject = this.firstChild.textContent;
    console.log(selectedProject);
    renderTasks(selectedProject, allProjects);
  };
  const projectControls = document.createElement("div");
  projectControls.className = "project-control";
  const editProjectBtn = document.createElement("button");
  editProjectBtn.className = "edit-project-btn";
  editProjectBtn.textContent = "✍";
  editProjectBtn.onclick = function () {
    let project = this.parentNode.previousSibling.textContent;
    if (project === "defaultproject") return;
    editProjectForm.classList.add("show-edit-project");
    editProjectForm.children[0].value = project;
    editProjectForm.children[1].onclick = function () {
      editProjectForm.classList.remove("show-edit-project");
      const index = getAllProject(allProjects).indexOf(project);
      console.log(index);
      if (!editProjectForm.children[0].value.length) return;
      if (
        getAllProject(allProjects).includes(
          editProjectForm.children[0].value.toLowerCase()
        )
      )
        return;
      let updatedProject = new createProject(
        editProjectForm.children[0].value,
        allProjects[index].Tasks
      );
      allProjects[index] = updatedProject;
      saveLocalStorage(allProjects);
      renderProjects(
        editProjectBtn.parentNode.parentNode.parentNode,
        allProjects,
        project
      );
    };
  };
  const delProjectBtn = document.createElement("button");
  delProjectBtn.textContent = "X";
  delProjectBtn.className = "delete-project";
  delProjectBtn.onclick = function () {
    if (this.parentNode.previousSibling.textContent === "defaultproject")
      return;
    deleteThisProject(this, allProjects);
  };
  project.appendChild(projectName);
  projectControls.appendChild(editProjectBtn);
  projectControls.appendChild(delProjectBtn);
  project.appendChild(projectControls);
  return project;
}

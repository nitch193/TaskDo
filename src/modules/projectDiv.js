import renderTasks from "./renderTasks";

export default function projectDiv(selectedProject, allProjects) {
  const project = document.createElement("div");
  project.className = "project";
  const projectName = document.createElement("div");
  projectName.onclick = function () {
    selectedProject = this.firstChild.textContent;
    console.log(selectedProject);
    renderTasks(selectedProject, allProjects);
  };
  projectName.className = "project-name";
  const projectControls = document.createElement("div");
  projectControls.className = "project-control";
  const editProjectBtn = document.createElement("button");
  editProjectBtn.className = "edit-project-btn";
  editProjectBtn.textContent = "✍";
  const delProjectBtn = document.createElement("button");
  delProjectBtn.textContent = "X";
  delProjectBtn.className = "delete-project";
  project.appendChild(projectName);
  projectControls.appendChild(editProjectBtn);
  projectControls.appendChild(delProjectBtn);
  project.appendChild(projectControls);
  project.firstChild;
  return project;
}

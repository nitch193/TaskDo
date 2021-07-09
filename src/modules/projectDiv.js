import renderTasks from "./renderTasks";
import deleteThisProject from "./deleteProject";
import { editProjectForm } from "../index";
import getAllProject from "./getAllProject";
import createProject from "./createProject";
import saveLocalStorage from "./saveLocalStorage";
import renderProjects from "./renderprojects";
export default function projectDiv(selectedProject, allProjects, i) {
  const project = document.createElement("div");
  project.className = "project";
  const projectName = document.createElement("div");
  projectName.className = "project-name";
  projectName.onclick = function () {
    selectedProject = this.firstChild.textContent;
    renderTasks(selectedProject, allProjects);
  };
  project.appendChild(projectName);
  const projectControls = document.createElement("div");
  projectControls.className = "project-control";
  const editProjectDiv = document.createElement("div");
  projectControls.appendChild(editProjectDiv);
  const editProjectBtn = document.createElement("div");
  editProjectBtn.classList.add("row", "flex-spaces", "child-borders");
  editProjectDiv.appendChild(editProjectBtn);
  const editProjectopenModal = document.createElement("label");
  editProjectopenModal.classList.add("paper-btn");
  editProjectopenModal.htmlFor = `modal-${i}`;
  editProjectopenModal.textContent = "✍";
  editProjectBtn.appendChild(editProjectopenModal);
  const editProjectInput = document.createElement("input");
  editProjectInput.classList.add("modal-state");
  editProjectInput.type = "checkbox";
  editProjectInput.id = `modal-${i}`;
  editProjectDiv.appendChild(editProjectInput);
  const modal = document.createElement("div");
  modal.classList.add("modal");
  editProjectDiv.appendChild(modal);
  const editProjectLabel = document.createElement("label");
  editProjectLabel.classList.add("modal-bg");
  editProjectLabel.htmlFor = `modal-${i}`;
  modal.appendChild(editProjectLabel);
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modal.appendChild(modalBody);
  const modalClose = document.createElement("label");
  modalClose.classList.add("btn-close");
  modalClose.htmlFor = `modal-${i}`;
  modalClose.innerHTML = "X";
  modalBody.appendChild(modalClose);
  const editForm = document.createElement("div");
  editForm.classList.add("form-group");
  modalBody.appendChild(editForm);
  const projectnameLabel = document.createElement("label");
  projectnameLabel.htmlFor = `edit-project-input${i}`;
  editForm.appendChild(projectnameLabel);
  const projectNameinput = document.createElement("input");
  projectNameinput.type = "text";
  projectNameinput.placeholder = "Proejct Name";
  projectNameinput.id = `edit-project-input${i}`;
  editForm.appendChild(projectNameinput);
  const ok = document.createElement("button");
  ok.className = "ok";
  ok.textContent = "OK";
  editForm.appendChild(ok);

  editProjectDiv.onclick = function () {
    let project = this.parentNode.previousSibling.textContent;
    console.log(project);
    if (project === "defaultproject") return;
    editForm.children[2].onclick = function () {
      const index = getAllProject(allProjects).indexOf(project);
      console.log(index);
      if (!editProjectForm.children[1].value.length) return;
      if (
        getAllProject(allProjects).includes(
          editProjectForm.children[1].value.toLowerCase()
        )
      )
        return;
      let updatedProject = new createProject(
        editForm.children[1].value,
        allProjects[index].Tasks
      );
      allProjects[index] = updatedProject;
      saveLocalStorage(allProjects);
      renderProjects(
        editProjectDiv.parentNode.parentNode.parentNode,
        allProjects,
        project
      );
    };
  };
  const delProjectBtn = document.createElement("button");
  delProjectBtn.innerHTML = "&#128465";
  delProjectBtn.className = "delete-project";
  delProjectBtn.onclick = function () {
    if (this.parentNode.previousSibling.textContent === "defaultproject")
      return;
    deleteThisProject(this, allProjects);
  };

  projectControls.appendChild(delProjectBtn);
  project.appendChild(projectControls);
  return project;
}

import renderTasks from "./renderTasks";
import deleteThisProject from "./deleteProject";
import getAllProject from "./getAllProject";
import createProject from "./createProject";
import saveLocalStorage from "./saveLocalStorage";
import renderProjects from "./renderprojects";
export default function projectDiv(selectedProject, allProjects, i) {
  const project = document.createElement("div");
  project.className = "project";
  project.classList.add('border', 'border-5')
  const projectNameDiv = document.createElement("div");
  const projectName = document.createElement('p')
  projectName.className = "project-name";
  projectName.onclick = function () {
    selectedProject = this.textContent;
    renderTasks(selectedProject, allProjects);
  };
  projectNameDiv.appendChild(projectName)
  const editProjectName = document.createElement('input');
  editProjectName.type = 'text'
  editProjectName.id  =`p-input${i}`
  editProjectName.style.display = 'none'
  projectNameDiv.appendChild(editProjectName)
  project.appendChild(projectNameDiv);
  const projectControls = document.createElement("div");
  projectControls.className = "project-control";
  const editdiv = document.createElement('div')
  const editButton = document.createElement('button');
  editButton.innerHTML = "&#9997";
  editdiv.appendChild(editButton)
  const okbutton = document.createElement('button')
  okbutton.innerHTML = 'ok'
  okbutton.style.display = 'none';
  editdiv.appendChild(okbutton)
  projectControls.appendChild(editdiv);
  
  editButton.onclick = function () {
    let project = projectName.textContent;
    if (project === "defaultproject") return;
    projectName.style.display = 'none';
    editProjectName.style.display  ='block'
    editButton.style.display = 'none';
    okbutton.style.display = 'block'
    okbutton.onclick = function() {
      const index = getAllProject(allProjects).indexOf(project);
      if (!editProjectName.value.length) return;
      if (
        getAllProject(allProjects).includes(
          editProjectName.value.toLowerCase()
        )
      )
        return;
      let updatedProject = new createProject(
        editProjectName.value,
        allProjects[index].Tasks
      );
      okbutton.style.display = 'none'
      editButton.style.display = 'block'
      projectName.style.display = 'block'
      editProjectName.style.display = 'none'
      allProjects[index] = updatedProject;
      saveLocalStorage(allProjects);
      renderProjects(
        projectNameDiv.parentNode.parentNode,
        allProjects,
        selectedProject
      );
    }
  };
  const delProjectBtn = document.createElement("button");
  delProjectBtn.innerHTML = "&#128465";
  delProjectBtn.className = "delete-project";
  delProjectBtn.onclick = function () {
    if (this.parentNode.previousSibling.textContent === "defaultproject"){
      alert('Can not delete default project');
      return;
    }
    deleteThisProject(this, allProjects);
  };

  projectControls.appendChild(delProjectBtn);
  project.appendChild(projectControls);
  return project;
}

import "./index.css";
import "./paper.min.css";
import newProject from "./modules/newproject";
import newTask from "./modules/newtask.js";
import renderProjects from "./modules/renderprojects.js";
import renderTasks from "./modules/renderTasks";
const taskBody = document.querySelector(".tasks");
const editTaskForm = document.querySelector(".edit-task");
const editProjectForm = document.querySelector(".edit-project");
export { taskBody, editTaskForm, editProjectForm };
(function init() {
  const newProjectForm = document.querySelector(".new-project");
  const newTaskFormDiv = document.querySelector(".new-task-form");
  const projects = document.querySelector(".all-projects");
  let selectedProject = "defaultproject";
  const defaultProject = {
    name: "defaultproject",
    Tasks: [],
  };
  let allProjects = [];
  if (localStorage.getItem("allProjects") === null) {
    allProjects.push(defaultProject);
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
  } else {
    let getProjects = [...JSON.parse(localStorage.getItem("allProjects"))];
    allProjects = [...getProjects];
  }

  newTask(newTaskFormDiv, allProjects, selectedProject);
  renderProjects(projects, allProjects, selectedProject);
  renderTasks(selectedProject, allProjects);
  newProject(projects, newProjectForm, allProjects);
})();

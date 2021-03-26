import "./index.css";
import sideBar from "./modules/sidebar";
import newProject from "./modules/newproject";
import newTask from "./modules/newtask.js";
import renderProjects from "./modules/renderprojects.js";
import renderTasks from "./modules/renderTasks";
const taskBody = document.querySelector(".tasks");
export { taskBody };
(function init() {
  const closeBtn = document.querySelector(".close-sidebar");
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector(".sidebar");
  const addProjectBtn = document.querySelector(".project-btn");
  const editProjectForm = document.querySelector(".edit-project");
  const addTaskbtn = document.querySelector(".add-task");
  const editTaskForm = document.querySelector(".edit-task");
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
  sideBar(menuBtn, menu, closeBtn);
  newTask(addTaskbtn, editTaskForm, allProjects, selectedProject);
  renderProjects(projects, allProjects, selectedProject);
  renderTasks(selectedProject, allProjects);
  newProject(addProjectBtn, editProjectForm, allProjects);
})();

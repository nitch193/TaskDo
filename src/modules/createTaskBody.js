import createTaskObject from "./createTaskObject";
import deleteThisTask from "./deleteThisTask";
import getAllProject from "./getAllProject";
import renderTasks from "./renderTasks";
import saveLocalStorage from "./saveLocalStorage";
export default function createTaskBody(allProjects) {
  const task = document.createElement("div");
  task.className = "task";
  const taskDetail = document.createElement("div");
  
  const taskNameDiv = document.createElement('div');
  const taskPriorityDiv = document.createElement('div');
  const taskDueDiv = document.createElement('div')
  const taskName = document.createElement('p')
  const taskPriority = document.createElement('p')
  const taskDue = document.createElement('p')
  const editTaskName = document.createElement('input')
  const tasknumber = document.createElement('div')
  tasknumber.className = 'task-number'
  editTaskName.type = 'text'
  editTaskName.style.display = 'none';
  const editTaskPriority = document.createElement('input');
  editTaskPriority.type = 'number';
  editTaskPriority.style.display = 'none';
  const editTaskDue = document.createElement('input')
  editTaskDue.type  = 'date';
  editTaskDue.style.display = 'none';
  taskNameDiv.appendChild(taskName)
  taskNameDiv.appendChild(editTaskName)
  taskPriorityDiv.appendChild(taskPriority)
  taskPriorityDiv.appendChild(editTaskPriority)
  taskDueDiv.appendChild(taskDue)
  taskDueDiv.appendChild(editTaskDue);
  taskDetail.appendChild(taskNameDiv)
  taskDetail.appendChild(taskPriorityDiv)
  taskDetail.appendChild(taskDueDiv)
  taskDetail.classList.add('task-detail')

  const taskControl = document.createElement("div");
  taskControl.className = "task-control";
  const editTaskDiv = document.createElement('div')
  const okTaskButton = document.createElement('button')
  okTaskButton.textContent = 'OK'
  okTaskButton.style.display = 'none'
  const editTaskBtn = document.createElement("button");
  editTaskBtn.className = "edit-task-btn";
  editTaskBtn.innerHTML = "&#9997";
  editTaskDiv.appendChild(editTaskBtn)
  editTaskDiv.appendChild(okTaskButton)
  editTaskBtn.onclick = function () {
    taskName.style.display = 'none'
    editTaskName.style.display = 'block'
    taskPriority.style.display = 'none'
    editTaskPriority.style.display = 'block'
    taskDue.style.display = 'none'
    editTaskDue.style.display = 'block'
    editTaskBtn.style.display = 'none'
    okTaskButton.style.display = 'block'
    okTaskButton.onclick = function() {
      let taskValue = editTaskName.value;
      let taskPriorityValue = editTaskPriority.value
      let taskDueValue = editTaskDue.value
      let upDatedTask = new createTaskObject(taskValue,taskDueValue, taskPriorityValue)
      let tobeUpdated =  taskName.textContent;
      let selectedProject = task.parentNode.firstChild.textContent
      let projectIndex = getAllProject(allProjects).indexOf(selectedProject);
      for (let i = 0; i < allProjects[projectIndex].Tasks.length; i++) {
        if (allProjects[projectIndex].Tasks[i].taskName === tobeUpdated) {
          allProjects[projectIndex].Tasks[i] = upDatedTask;
        }
      }
      saveLocalStorage(allProjects);
      renderTasks(selectedProject, allProjects);
    }
  };
  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.className = "delete-task";
  deleteTaskBtn.innerHTML = "&#128465";
  deleteTaskBtn.onclick = function () {
    deleteThisTask(this, allProjects);
  };
  taskControl.appendChild(editTaskDiv);
  taskControl.appendChild(deleteTaskBtn);
  task.appendChild(tasknumber);
  task.appendChild(taskDetail);
  task.appendChild(taskControl);
  return task;
}

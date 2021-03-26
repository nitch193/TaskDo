export default function clearTaskBody(taskBody) {
  while (taskBody.childNodes.length > 1) {
    taskBody.removeChild(taskBody.lastChild);
  }
}

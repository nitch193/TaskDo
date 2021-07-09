export default function clearTaskBody(taskBody) {
  while (taskBody.childNodes.length > 0) {
    taskBody.removeChild(taskBody.lastChild);
  }
}

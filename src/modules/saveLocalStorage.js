export default function saveLocalStorage(allProjects) {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}

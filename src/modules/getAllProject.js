export default function getAllProject(allProjects) {
  let allProjectNames = [];
  for (let i = 0; i < allProjects.length; i++) {
    allProjectNames.push(allProjects[i].name.toLowerCase());
  }
  return allProjectNames;
}

export default function sideBar(menuBtn, menu, closeBtn) {
  menuBtn.addEventListener("click", () => {
    menu.style.width = "250px";
  });
  closeBtn.addEventListener("click", () => {
    menu.style.width = "0";
  });
}

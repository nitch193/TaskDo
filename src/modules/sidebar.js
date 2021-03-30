import "../index.css";
export default function sideBar(menuBtn, menu, closeBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.add("show");
  });
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
  });
}

const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menu-list");

hamburger.addEventListener("click", () => {
  menuList.classList.toggle("open");
});

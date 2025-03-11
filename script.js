const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menu-list");

hamburger.addEventListener("click", () => {
  menuList.classList.toggle("open");
});

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
  if (!menuList.contains(event.target) && !hamburger.contains(event.target)) {
    menuList.classList.remove("open");
  }
});

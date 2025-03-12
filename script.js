const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menu-list");

if (hamburger && menuList) {
  hamburger.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event bubbling
    menuList.classList.toggle("open"); // Toggle the .open class
  });

  // Close the menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!menuList.contains(event.target) && !hamburger.contains(event.target)) {
      menuList.classList.remove("open"); // Remove the .open class
    }
  });
} else {
  console.error("Hamburger or menuList element not found");
}

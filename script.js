function displayDropdown() {
  var menu = document.getElementById("nav-menu")
  var navContent = document.getElementById("nav-content")

  menu.classList.toggle("change-icon");
  navContent.classList.toggle("show-dropdown");
}
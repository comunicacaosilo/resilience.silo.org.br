function showMenuSilo() {
  document.getElementById('menu').classList.remove("menu-hide-silo");
  document.getElementById('menu').classList.add("menu-show-silo");

  document.getElementById('menu-button').classList.remove("fa-chevron-down");
  document.getElementById('menu-button').classList.add("fa-chevron-up");
  document.getElementById('menu-button').onclick = hideMenuSilo;
}

function hideMenuSilo() {
  document.getElementById('menu').classList.remove("menu-show-silo");
  document.getElementById('menu').classList.add("menu-hide-silo");

  document.getElementById('menu-button').classList.remove("fa-chevron-up");
  document.getElementById('menu-button').classList.add("fa-chevron-down");
  document.getElementById('menu-button').onclick = showMenuSilo;
}

document.getElementById('menu-button').onclick = showMenuSilo;




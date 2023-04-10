const searchIcon = document.querySelector(".icon-search");
const searchInput = document.querySelector(".search-input");
const menuIcon = document.querySelector(".menu-icon");
const panel = document.querySelector(".panel-1");
const menu = document.querySelector(".menu");

searchIcon.addEventListener("click", function () {
  searchInput.classList.toggle("active");
});
menuIcon.addEventListener("click", function () {
  panel.classList.toggle("show-menu");
  menu.classList.toggle("active");
});
/**
 * 
 *     $('.panel').toggleClass('show-menu');
    $('.menu').toggleClass('active');
 */

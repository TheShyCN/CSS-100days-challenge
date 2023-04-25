const menu_icon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menu_icon.addEventListener("click", () => {
  menu_icon.classList.remove("paused");
  menu_icon.classList.add("active");

  menu.classList.remove("paused");
  menu.classList.add("active");
});

menu.addEventListener("click", () => {
  menu.classList.remove("active");
  menu_icon.classList.remove("active");
});

// 阻止事件冒泡
document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

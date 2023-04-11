const profiles = document.querySelectorAll(".profile");
const detail = document.querySelector(".detail");
const close = document.querySelector(".close");
profiles.forEach((item) => {
  item.addEventListener("click", function () {
    detail.classList.add("active");
  });
});

close.addEventListener("click", function () {
  detail.classList.remove("active");
});

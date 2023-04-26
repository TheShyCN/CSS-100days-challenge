document.querySelectorAll(".pic").forEach((pic) => {
  pic.addEventListener("click", () => {
    pic.classList.toggle("active");
  });
});

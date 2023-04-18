let number = 0;
document.querySelector(".minus").addEventListener("click", () => {
  updateNumber(-1);
});
document.querySelector(".plus").addEventListener("click", () => {
  updateNumber(1);
});

const container = document.querySelector(".number span");

function updateNumber(value) {
  number += value;
  if (value > 0) {
    document.querySelector(".number").innerHTML =
      '<span class="fadeIn">' + number + "</span>";
  } else {
    document.querySelector(".number").innerHTML =
      '<span class="fadeIn">' + number + "</span>";
  }
}

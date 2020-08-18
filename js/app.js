var clicked = document.getElementById("circle1");
var newCircle = document.getElementById("tickCircle");

clicked.addEventListener("click", function () {
  clicked.style.display = "none";
  console.log("clicked");
});

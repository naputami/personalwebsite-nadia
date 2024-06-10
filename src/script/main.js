import "../style/output.css";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

const typed = new Typed("#profile", {
  strings: ["Full Stack Developer", "Biology Tutor", "Long Life Learner"],
  typeSpeed: 30,
  cursorChar: "_",
});

document.addEventListener("DOMContentLoaded", function () {
  let currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});

AOS.init();


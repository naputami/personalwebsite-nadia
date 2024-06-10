import "../style/output.css";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

const cvDownloadButton = document.getElementById("cv-download");

const typed = new Typed("#profile", {
  strings: ["Full Stack Developer", "Biology Tutor", "Long Life Learner"],
  typeSpeed: 40,
  cursorChar: "_",
  fadeOut: true,
  fadeOutDelay: 500,
});

document.addEventListener("DOMContentLoaded", function () {
  let currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});

AOS.init();

const googleDriveLink =
  "https://drive.google.com/uc?id=11uA-q1GwCVDUjSm7T9xvW8gThI5r-rVT&export=download";

cvDownloadButton.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = googleDriveLink;
  link.setAttribute("download", "cv-dummy");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

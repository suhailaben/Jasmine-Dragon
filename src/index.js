import frame from "./frame.js";
import header from "./header.js";
import nav from "./nav.js";
import about from "./about.js";
import menu from "./menu.js";
import contact from "./contact.js";
import "./style.css";

about();
setActive("about-tab");

(() => {
  let aboutTab = document.querySelector("#about-tab");
  aboutTab.addEventListener("click", about);
  aboutTab.addEventListener("click", () => setActive("about-tab"));
  let menuTab = document.querySelector("#menu-tab");
  menuTab.addEventListener("click", menu);
  menuTab.addEventListener("click", () => setActive("menu-tab"));
  let contactTab = document.querySelector("#contact-tab");
  contactTab.addEventListener("click", contact);
  contactTab.addEventListener("click", () => setActive("contact-tab"));
})();

function setActive(tabID) {
  let toClear = document.querySelectorAll("section");
  toClear.forEach((element) => {
    element.removeAttribute("class");
  });
  let toActivate = document.querySelector(`#${tabID}`);
  toActivate.setAttribute("class", "active");
}
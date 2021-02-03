import logo from "./jasmine-dragon-logo.svg";

var header = (() => {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  content.appendChild(header);
  const myLogo = new Image();
  myLogo.src = logo;
  header.appendChild(myLogo);
  const title = document.createElement("h1");
  title.textContent = "The Jasmine Dragon";
  header.appendChild(title);
})();

export default { header };

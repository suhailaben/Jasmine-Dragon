let nav = (() => {
  const content = document.querySelector("#content");
  const navbar = document.createElement("nav");
  const about = document.createElement("section");
  about.setAttribute("id", "about-tab");
  about.textContent = "About";
  const menu = document.createElement("section");
  menu.setAttribute("id", "menu-tab");
  menu.textContent = "Menu";
  const contact = document.createElement("section");
  contact.setAttribute("id", "contact-tab");
  contact.textContent = "Contact Us";
  navbar.appendChild(about);
  navbar.appendChild(menu);
  navbar.appendChild(contact);
  content.appendChild(navbar);
  const main = document.createElement("main");
  content.appendChild(main);
})();

export default nav;

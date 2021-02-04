let contact = () => {
  const main = document.querySelector("main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const p = document.createElement("p");
  p.textContent = "contacts";
  main.appendChild(p);
};

export default contact;

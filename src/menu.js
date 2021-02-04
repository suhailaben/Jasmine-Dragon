let menu = () => {
  const main = document.querySelector("main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const p = document.createElement("p");
  p.textContent = "the mENU";
  main.appendChild(p);
};

export default menu;
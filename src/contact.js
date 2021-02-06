import contactus from "./contactus.png";

let contact = () => {
  const main = document.querySelector("main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const photo1 = new Image();
  photo1.src = contactus;
  main.appendChild(photo1);
  const div = document.createElement("div");
  div.textContent = "The best way to reach us is through messenger hawk.";
  main.appendChild(div);
};

export default contact;

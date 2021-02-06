import tea from "./tea.png";
import whitelotus from "./whitelotus.png";

let menu = () => {
  const main = document.querySelector("main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const photo1 = new Image();
  photo1.src = tea;
  photo1.style.width = "50%";
  photo1.style.justifySelf = "center";
  main.appendChild(photo1);
  const ol = document.createElement("ol");
  const li1 = document.createElement("li");
  li1.textContent = "Chi enhancing tea";
  const li2 = document.createElement("li");
  li2.textContent = "Ginger Tea";
  const li3 = document.createElement("li");
  li3.textContent = "Ginseng Tea";
  const li4 = document.createElement("li");
  li4.textContent = "Green Tea";
  const li5 = document.createElement("li");
  li5.textContent = "Lychee Tea";
  const li6 = document.createElement("li");
  li6.textContent = "Oolong Tea";
  const li7 = document.createElement("li");
  li7.textContent = "Red-blooded Nephew Tea";
  const li8 = document.createElement("li");
  li8.textContent = "Spiced Tea";
  const li9 = document.createElement("li");
  li9.textContent = "Tapioca Tea";
  const li10 = document.createElement("li");
  li10.textContent = "White Lotus Tile Tea";
  const li11 = document.createElement("li");
  li11.textContent = "White Dragon/White Jade Tea";
  ol.appendChild(li1);
  ol.appendChild(li2);
  ol.appendChild(li3);
  ol.appendChild(li4);
  ol.appendChild(li5);
  ol.appendChild(li6);
  ol.appendChild(li7);
  ol.appendChild(li8);
  ol.appendChild(li9);
  ol.appendChild(li10);
  ol.appendChild(li11);
  main.appendChild(ol);
  const lotus = new Image();
  lotus.src = whitelotus;
  lotus.style.width = "40%";
  lotus.style.justifySelf = "center";
  main.appendChild(lotus);
  const seniorDiscount = document.createElement("p");
  seniorDiscount.textContent = "Ask about our senior discount!";
  main.appendChild(seniorDiscount);
};

export default menu;

import about1 from "./about1.png";
import about2 from "./about2.png";

let about = () => {
  const main = document.querySelector("main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const photo1 = new Image();
  photo1.src = about1;
  main.appendChild(photo1);
  const div = document.createElement("div");
  div.textContent =
    "The Jasmine Dragon has been voted best tea shop in Ba Sing Se every year since it was taken over by General Iroh. According to Iroh, the secret ingredient is love. Reservations recommended. See the 'Contact Us' page to make your reservation today.";
  main.appendChild(div);
  const photo2 = new Image();
  photo2.src = about2;
  main.appendChild(photo2);
};

export default about;

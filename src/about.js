let about = (() => {
  const content = document.querySelector("#content");
  const main = document.createElement("main");
  const p = document.createElement("p");
  p.textContent =
    "The Jasmine Dragon is a traditional tea shop in the Upper Ring of Ba Sing Se; due to its location, its clientele mostly consists of the upper class citizens of the Earth Kingdom capital. It was once a failing business but was completely revived after Iroh took over.";
  main.appendChild(p);
  content.appendChild(main);
})();

export default {about}
let angle = 0;
let cube = document.querySelector(".Cube");
let FPS = 60;
let space = 32;

setInterval(() => {
  angle += 1;
  cube.style.transform = "rotateY(" + angle + "deg) rotateZ(" + angle + "deg)";
}, 1000 / FPS);

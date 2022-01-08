// Script will assume that the image/background is equal to the carousel item

const news = [];
let backgrounds = [
  "/assets/bg-images/dam1.jpg",
  "/assets/bg-images/Water1.jpg",
];

function preload() {
  for (let i = 0; i < backgrounds.length; i++) {
    let image = new Image();
    image.src = backgrounds[i];
  }
}

function changeBackground(adjustment) {
  let body = document.body.style;
  switch (activeIndex(adjustment)) {
    case 0:
      body.transitionDuration = "";
      body.background = "";
      break;
    case 1:
      body.transitionDuration = "0ms";
      body.background = `url('${backgrounds[0]}')`;
      body.backgroundSize = "cover";
      break;
    case 2:
      body.background = `url('${backgrounds[1]}')`;
      body.backgroundSize = "cover";
      break;
    default:
      body.transitionDuration = "";
      body.background = "";
  }
}

function activeIndex(adjustment) {
  let carouselChildren = document.querySelector(".carousel-inner").children;
  let active = document.querySelector(".active");

  let rawIndex =
    Array.prototype.indexOf.call(carouselChildren, active) + adjustment;

  let index =
    rawIndex >= carouselChildren.length
      ? 0
      : rawIndex <= -1
      ? (rawIndex = carouselChildren.length - 1)
      : rawIndex;

  return index;
}

preload();

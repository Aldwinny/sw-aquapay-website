// Script will assume that the image/background is equal to the carousel item

const news = [];
let backgrounds = [
  "https://i.pinimg.com/564x/31/a2/5b/31a25b8bd1e8b58915c30f68f4ef8782.jpg",
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

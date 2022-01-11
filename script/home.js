// Script will assume that the image/background is equal to the carousel item

let backgrounds = ["/assets/bg-images/homepage_1.jpg"];

function changeBackground(adjustment) {
  let body = document.body.style;
  switch (activeIndex(adjustment)) {
    case 0:
      body.background = "";

      break;
    case 1:
      body.background = `url('${backgrounds[0]}')`;
      body.backgroundSize = "100% 100vh";
      break;
    default:
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

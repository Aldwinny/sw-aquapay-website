// $(window).scroll(function () {
//   if (
//     $("body").scrollTop() > 40 ||
//     $(document.documentElement).scrollTop() > 40
//   ) {
//     $("#nav").css({
//       "box-shadow": "0 0 10px #212121",
//       transition: "0.4s",
//     });
//   } else {
//     $("#nav").css({
//       "box-shadow": "none",
//       transition: "0.4s",
//     });
//   }
// });

/**
 * The following applies to the navbar,
 * 1. Fades to transparent when on top of the page
 * 2. Shows up when u scroll up a little
 * 3. Disappears when u scroll down
 */

var lastScrollTop = 0;

window.onscroll = function () {
  makeSticky();
};

function makeSticky() {
  var navbar = document.getElementById("navi");
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    navbar.classList.remove("scrolled-up");
    navbar.classList.add("scrolled-top");
    navbar.style.position = "";
  } else {
    navbar.classList.add("scrolled-up");
    navbar.classList.remove("scrolled-top");
    navbar.style.position = "fixed";

    if (window.scrollY == 0) {
      navbar.classList.add("scrolled-top");
      navbar.style.position = "";
    }
  }
  lastScrollTop = st <= 0 ? 0 : st;
}

/* End of script */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.body.classList.remove("scroll-down");
    document.body.classList.add("scroll-up");
  } else {
    document.body.classList.remove("scroll-up");
    document.body.classList.add("scroll-down");
  }
  prevScrollpos = currentScrollPos;
};

// CIRCLE POINTER

const circle = document.getElementById("circle");
const circleStyle = circle.style;

document.addEventListener("mousemove", (e) => {
  window.requestAnimationFrame(() => {
    circleStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
    circleStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;
  });
});

// STICKY NAVIGATION

const navbar = document.getElementById("nav");
const sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset.add >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function () {
  stickyNav();
};

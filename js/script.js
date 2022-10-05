import projects from "./data/projects.js";

// Scroll to top on reload
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// // CIRCLE POINTER
// const circle = document.getElementById("circle");
// const circleStyle = circle.style;

// document.addEventListener("mousemove", (e) => {
//   window.requestAnimationFrame(() => {
//     circleStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
//     circleStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;
//   });
// });

// Display projects
const projectsContainer = document.querySelector(".projects");
const loader = document.querySelector(".loader");

projects.forEach(function (project) {
  loader.style.display = "none";
  projectsContainer.innerHTML += `
                                  <div class="project">
                                    <img src=${project.img} alt=${projects.title}/>
                                    <h3>${project.title}</h3>
                                    <p>${project.description}</p>
                                    <a href= "${project.webLink}">Visit website</a>
                                    <a href= "${project.gitHubLink}">GitHub</a>
                                  </div>
                                 `;
});

// Change image
const image = document.querySelector("#aboutImg");

image.addEventListener("onclick", () => {
  document.getElementById("aboutImg").src = "images/cat1.jpg";
});

// Hovering effects

// HTML
// const htmlLink = document.querySelector(".htmlHover");

// htmlLink.addEventListener("mouseover", () => {
//   htmlLink.innerHTML = `&#60;html&#62;`;
//   htmlLink.style.fontFamily = "Source Sans Pro";
//   htmlLink.style.textTransform = "lowercase";
// });

// htmlLink.addEventListener("mouseout", () => {
//   htmlLink.innerHTML = `HTML`;
//   htmlLink.style.fontFamily = "var(--text-font)";
//   htmlLink.style.textTransform = "uppercase";
// });

// // CSS
// const cssLink = document.querySelector(".cssHover");

// cssLink.addEventListener("mouseover", () => {
//   cssLink.style.color = "var(--pink)";
//   cssLink.style.backgroundColor = "var(--burgundy)";
// });

// cssLink.addEventListener("mouseout", () => {
//   cssLink.style.color = "var(--burgundy)";
//   cssLink.style.backgroundColor = "var(--pink)";
// });

// //  Javascript
// const jsLink = document.querySelector(".jsHover");

// jsLink.addEventListener("mouseover", () => {});

// jsLink.addEventListener("mouseout", () => {});

// // Adobe XS
// const xdLink = document.querySelector(".xdHover");

// // Photoshop
// const psLink = document.querySelector(".psHover");

// // Illustrator
// const illLink = document.querySelector(".illHover");

// // Wordpress
// const wpLink = document.querySelector(".wpHover");

// wpLink.addEventListener("mouseover", () => {
//   wpLink.style.rotate = "calc(180deg)";
// });

// wpLink.addEventListener("mouseout", () => {
//   wpLink.style.rotate = "calc(0deg)";
// });

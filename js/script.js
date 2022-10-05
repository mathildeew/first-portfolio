import projects from "./data/projects.js";

// CIRCLE POINTER
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
projects.forEach(function (project) {
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

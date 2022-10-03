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

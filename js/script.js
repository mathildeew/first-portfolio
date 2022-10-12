import projects from "./data/projects.js";

// Display projects
const projectsContainer = document.querySelector(".projects");
const loader = document.querySelector(".loader");

projects.forEach(function (project) {
  loader.style.display = "none";
  projectsContainer.innerHTML += `
                                  <div class="project">
                                    <img src=${project.img} alt=${projects.title}/>
                                    <h3>${project.title}</h3>
                                    <h4>${project.project_type}</h4>
                                    <p>${project.description}</p>
                                    <a href= "${project.webLink}" alt="Screenshot of ${project.title}">Visit website</a>
                                    <a href= "${project.gitHubLink}">GitHub</a>
                                  </div>
                                 `;
});

// Navigation (when clicked, scroll to section)
const portfolioLink = document.querySelector("#pLink");
const portfolio = document.querySelector("#portfolio");

portfolioLink.addEventListener("click", () => {
  portfolio.scrollIntoView();
});

const aboutLink = document.querySelector("#aLink");
const about = document.querySelector("#about");

aboutLink.addEventListener("click", () => {
  about.scrollIntoView();
});

const contactLink = document.querySelector("#cLink");
const contact = document.querySelector("#contact");

contactLink.addEventListener("click", () => {
  contact.scrollIntoView();
});

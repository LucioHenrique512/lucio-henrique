const greetingsTextElement = document.getElementById("greetingsText");
const projectsSection = document.getElementById("projects");
const aboutSection = document.getElementById("about");
const projectsLink = document.getElementById("projects_link");
const aboutLink = document.getElementById("about_link");
const topBar = document.getElementById("topbar");

const typeText = (text) => {
  const charArray = text.split("");
  greetingsTextElement.innerHTML = "";
  charArray.forEach((char, i) =>
    setTimeout(() => (greetingsTextElement.innerHTML += char), i * 35)
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const elementText = greetingsTextElement.innerHTML;
  typeText(elementText);
});

document.onscroll = () => {
  if (window.scrollY > 0) topBar.classList.add("hover");
  else topBar.classList.remove("hover");

  if (window.scrollY >= projectsSection.offsetTop - 1) {
    projectsLink.classList.add("active");
  } else {
    projectsLink.classList.remove("active");
  }
  if (window.scrollY >= aboutSection.offsetTop - 1) {
    projectsLink.classList.remove("active");
    aboutLink.classList.add("active");
  } else {
    aboutLink.classList.remove("active");
  }
};



/* =========================================================
   JS VARIABLES + DATA TYPES (REQUIRED)
========================================================= */
let userName = "Aleeha web Developer";
let projectCount = 3;
let darkModeEnabled = false;
let score = null;
let nothing;

console.log("Name:",userName);
console.log("Project count:", projectCount);
console.log("Dark mode:", darkModeEnabled);
console.log("Score:", score);
console.log("Nothing:", nothing);



/* =========================================================
   MOBILE MENU
========================================================= */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = () => navLinks.classList.toggle("show");



/* =========================================================
   DARK MODE TOGGLE
========================================================= */
const darkToggle = document.getElementById("darkToggle");

darkToggle.onclick = () => {
  document.body.classList.toggle("dark");
  darkModeEnabled = document.body.classList.contains("dark");
  console.log("Dark mode now:", darkModeEnabled);
};



/* =========================================================
   PROJECT MODAL
========================================================= */
const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const projectData = {
  1: { title: "Project One", description: "A modern web application showcasing clean UI patterns." },
  2: { title: "Project Two", description: "A web  prototype with accessibility-focused components." },
  3: { title: "Project Three", description: "An interactive JavaScript tool demonstrating events and dynamic UI." }
};

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.project;
    modalTitle.textContent = projectData[id].title;
    modalDescription.textContent = projectData[id].description;

    modal.style.display = "flex";
  });
});

closeModal.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};



/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  console.log("Form Submitted:", { name, email, message });
  alert("Message sent successfully!");

  form.reset();
});


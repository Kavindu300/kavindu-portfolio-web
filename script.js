// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile sidebar toggle
const sidebar = document.getElementById("sidebar");
const navToggle = document.getElementById("navToggle");
const scrim = document.getElementById("scrim");

function closeNav() {
  sidebar.classList.remove("open");
  scrim.classList.remove("show");
  navToggle.setAttribute("aria-expanded", "false");
}
function openNav() {
  sidebar.classList.add("open");
  scrim.classList.add("show");
  navToggle.setAttribute("aria-expanded", "true");
}

navToggle.addEventListener("click", () => {
  sidebar.classList.contains("open") ? closeNav() : openNav();
});
scrim.addEventListener("click", closeNav);
sidebar
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeNav));

// Contact form: front-end validation + mailto hand-off
// This site has no backend, so submitting opens the visitor's email client
// with the message pre-filled, addressed to the email in the contact section.
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

function setError(fieldId, message) {
  document.getElementById(fieldId + "Error").textContent = message || "";
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  let valid = true;

  if (!name) {
    setError("name", "Please enter your name.");
    valid = false;
  } else {
    setError("name", "");
  }

  if (!email) {
    setError("email", "Please enter your email.");
    valid = false;
  } else if (!isValidEmail(email)) {
    setError("email", "Please enter a valid email address.");
    valid = false;
  } else {
    setError("email", "");
  }

  if (!message) {
    setError("message", "Please write a short message.");
    valid = false;
  } else {
    setError("message", "");
  }

  if (!valid) return;

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:kavindu.asanka@example.com?subject=${subject}&body=${body}`;

  status.textContent = "Opening your email app to send this message…";
  form.reset();
});

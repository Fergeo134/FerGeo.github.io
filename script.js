// Check user's preference for dark mode
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Set initial mode based on user's preference or default to light mode
if (localStorage.getItem("dark-mode") === "true" || (prefersDarkMode && !localStorage.getItem("dark-mode"))) {
  document.body.classList.add("dark-mode");
}

// Toggle dark mode when the switch is clicked
document.getElementById("dark-mode-toggle").addEventListener("change", function() {
  if (this.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "true");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "false");
  }
});

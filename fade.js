// fade.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get the body element
  const body = document.body;

  // Function to handle page transitions
  function fadeOut(event) {
    event.preventDefault(); // Prevent default link behavior
    body.classList.add("fade-out"); // Add the fade-out class
    const targetUrl = this.href; // Store the target URL

    // Redirect after the fade-out transition
    setTimeout(() => {
      window.location.href = targetUrl; // Redirect to the new URL
    }, 250); // Match the duration with CSS transition (250ms)
  }

  // Add fade-out effect to all links
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", fadeOut);
  });
});

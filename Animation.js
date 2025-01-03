// Animation.js

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links li a');
  const sections = document.querySelectorAll('.section');
  
  // Preloader reference
  const preloader = document.querySelector('.preloader');

  // Hide all sections (initially)
  function hideAllSections() {
    sections.forEach(section => section.classList.remove('active'));
  }

  // Show the target section
  function showSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  }

  // Navbar click-based navigation
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      hideAllSections();
      showSection(targetId);
    });
  });

  // 1. Wait until the entire window (images, etc.) is loaded
  window.addEventListener('load', () => {
    // 2. After the line animation finishes, fade out the preloader
    //    We wait 2.5s for the line to reach 100%,
    //    then a bit more for a smooth transition to 0 opacity.
    setTimeout(() => {
      // Add the fade-out class
      preloader.classList.add('fade-out');
      // Optionally remove it from the DOM after the fade-out transition
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 700); // matches the .preloader { transition: opacity 0.7s }
    }, 2500); // matches the .loader-line { animation: loadLine 2.5s }
  });
});

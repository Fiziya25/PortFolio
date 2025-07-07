// script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;

      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      if (menuBtn && mobileMenu) {
        // Toggle mobile menu
        menuBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          mobileMenu.classList.toggle('hidden');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
          const isClickInside = mobileMenu.contains(e.target) || menuBtn.contains(e.target);
          if (!isClickInside) {
            mobileMenu.classList.add('hidden');
          }
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
          });
        });
      }
    })
    .catch(err => console.error('Failed to load navbar:', err));
});

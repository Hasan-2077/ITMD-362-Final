// === BACK TO TOP BUTTON ===
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === DARK MODE TOGGLE ===
const toggleBtn = document.getElementById('dark-mode-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// === CATEGORY CLICK INTERACTION ===
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  category.addEventListener('click', () => {
    const labelElement = category.querySelector('.label');
    const categoryName = labelElement ? labelElement.innerText : 'this category';
    alert(`Browsing: ${categoryName} (Coming Soon)`);
  });
});

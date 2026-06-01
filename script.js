// Smooth scroll for navigation
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
});

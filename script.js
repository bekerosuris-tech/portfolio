const navLinks = document.querySelectorAll('.nav-links a');
const contactForm = document.querySelector('.contact-form');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 24, behavior: 'smooth' });
    }
  });
});

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (name && email && message) {
      alert(`Merci ${name} !\nVotre message a bien été pris en compte. Je reviens vers vous au plus vite.`);
      contactForm.reset();
    }
  });
}

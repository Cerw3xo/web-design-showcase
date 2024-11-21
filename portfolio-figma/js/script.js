const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section')

for (let i = 0; i < navLinks.length; i++) {
navLinks[i].addEventListener('click', (event) => {
    event.preventDefault();

    sections.forEach( section => section.style.display = 'none');

    const targetId = navLinks[i].getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.style.display = 'block';

    window.scrollTo( {
        top: 0
    })
})
}

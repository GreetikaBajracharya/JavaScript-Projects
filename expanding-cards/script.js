const panels = document.querySelectorAll('.panel');
const links = document.querySelectorAll('.details-link');
const paragraphs = document.querySelectorAll('.details-paragraph');
const headings = document.querySelectorAll('.panel h3');

document.addEventListener('DOMContentLoaded', () => {
    paragraphs.forEach(paragraph => paragraph.style.display = 'none');
    headings.forEach(heading => heading.classList.remove('shifted'));
});

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panels.forEach(p => p.classList.remove('active'));
        panel.classList.add('active');
    });
});

links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const paragraph = link.nextElementSibling;
        const heading = link.previousElementSibling; 

        if (paragraph.style.display === 'block') {
            paragraph.style.display = 'none'; 
            heading.classList.remove('shifted');
            link.textContent = 'More Info'; 
        } else {
            paragraphs.forEach(p => p.style.display = 'none');
            headings.forEach(h => h.classList.remove('shifted')); 
            links.forEach(l => l.textContent = 'More Info'); 

            paragraph.style.display = 'block';
            heading.classList.add('shifted'); 
            link.textContent = 'Less Info'; 
        }
    });
});

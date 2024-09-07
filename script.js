document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const description = this.getAttribute('data-description');
            alert(description);
        });
    });

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

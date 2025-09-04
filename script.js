    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-section');
            sections.forEach(sec => {
                sec.style.display = sec.id === target ? 'block' : 'none';
            });
        });
    });

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const icon = header.querySelector('.icon');
        const isActive = item.classList.contains('active');

        // Close all accordions
        document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.icon').textContent = '﹥';
        });

        // Open clicked one if not already active
        if (!isActive) {
            item.classList.add('active');
            icon.textContent = '﹥';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});



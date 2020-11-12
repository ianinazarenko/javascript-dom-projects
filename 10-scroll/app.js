// Date 
const date = document.querySelector('#date');
const now = new Date();

date.textContent = now.getFullYear();

// Toggle button
const navToggle = document.querySelector('.nav__toggle');
const linksContainer = document.querySelector('.nav__links-container');
const links = document.querySelector('.nav__links');

navToggle.addEventListener('click', function () {
    // linksContainer.classList.toggle('--show-links');
    if (linksContainer.getBoundingClientRect().height === 0) {
        linksContainer.style.height = links.offsetHeight + 'px';
    } else {
        linksContainer.style.height = 0;
    }
});

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth > 799) {
        linksContainer.style.height = 'auto';
    } else {
        linksContainer.style.height = 0;
    }
});


// Fixed navbar
const navbar = document.getElementById('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > navbar.offsetHeight) {
        navbar.classList.add('--fixed-nav');
    } else {
        navbar.classList.remove('--fixed-nav');
    }
});

// Showing Back to Top link
const backToTop = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('--show-top-link');
    } else {
        backToTop.classList.remove('--show-top-link');
    }
});

// Smooth scroll
const scrollLinks = document.querySelectorAll('.--scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        if (document.documentElement.clientWidth < 800 && linksContainer.offsetHeight != 0) {
            linksContainer.style.height = 0;
        }

        const targetElementId = e.currentTarget.getAttribute('href').slice(1);

        let position = document.getElementById(targetElementId).offsetTop - navbar.offsetHeight;

        console.log(navbar.offsetHeight);

        if (navbar.offsetHeight > 80) {
            position += linksContainer.offsetHeight;
        }

        window.scrollTo({
            top: position,
            left: 0,
            behavior: 'smooth'
        });


    });
});
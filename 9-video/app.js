const video = document.querySelector('.video-container');
const toggle = document.querySelector('.video-toggle');

toggle.addEventListener('change', function () {
    if (toggle.checked) {
        video.pause();
    } else {
        video.play();
    }
});

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
    preloader.classList.add('hide-preloader');
});
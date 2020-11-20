const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

slides.forEach(function (item, index) {
    item.style.left = `${index * 100}%`;
});

let counter = 0;
prevBtn.style.visibility = 'hidden';

prevBtn.addEventListener('click', function () {
    counter--;
    moveCarousel();
});

nextBtn.addEventListener('click', function () {
    counter++;
    moveCarousel();
});

function moveCarousel() {

    // if (counter == slides.length) {
    //     counter = 0;
    // } else if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    if (counter < 1) {
        prevBtn.style.visibility = 'hidden';
    } else {
        prevBtn.style.visibility = 'visible';
    }

    if (counter < slides.length - 1) {
        nextBtn.style.visibility = 'visible';
    } else {
        nextBtn.style.visibility = 'hidden';
    }

    slides.forEach(function (item) {
        item.style.transform = `translateX(-${counter * 100}%)`;
    });
}
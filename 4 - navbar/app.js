const toggleBtn = document.querySelector('.navbar__toggle');
const links = document.querySelector('.navbar__links');

toggleBtn.addEventListener('click', function(){
    links.classList.toggle('show-links');
})

window.addEventListener('resize', function(){
    if (document.documentElement.clientWidth > 767 && links.classList.contains('show-links')) {
    links.classList.remove('show-links');
    }
});


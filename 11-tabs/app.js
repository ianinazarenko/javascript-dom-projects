const btns = document.querySelectorAll(".about__tab-btn");
const about = document.querySelector(".about__info");
const articles = document.querySelectorAll(".about__content");

about.addEventListener("click", function (e) {
    const dataId = e.target.dataset.id;
    if (dataId) {
        btns.forEach(function (btn) {
            btn.classList.remove("--active");
            e.target.classList.add("--active");
        });

        articles.forEach(function (article) {
            article.classList.remove("--active");
        });
    }

    document.getElementById(dataId).classList.add("--active");
});

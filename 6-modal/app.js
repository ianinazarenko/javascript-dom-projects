const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const modal = document.querySelector(".modal__overlay");

openBtn.addEventListener("click", function () {
    modal.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
    modal.classList.remove("show-modal");
});

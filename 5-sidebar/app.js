const toggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");
const close = document.getElementById("close-btn");

toggle.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
});

close.addEventListener("click", function () {
    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");
    }
});

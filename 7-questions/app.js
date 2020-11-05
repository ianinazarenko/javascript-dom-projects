// traversing the DOM

// const btns = document.querySelectorAll('.questions__btn');
// btns.forEach( function(btn) {
//     btn.addEventListener('click', function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-content');
//     });
// });



// other
// const questions = document.querySelectorAll('.questions__item');
// questions.forEach(function(item) {
//     item.addEventListener('click', function (e) {
//         if (e.target.classList.contains('fa-plus-square')) {
//             e.currentTarget.classList.add('show-content');
//         } else {
//             e.currentTarget.classList.remove('show-content');
//         }
//     });
// });


// other

const questions = document.querySelectorAll('.questions__item');
questions.forEach(function (question) {
    const btn = question.querySelector('.questions__btn');
    btn.addEventListener('click', function () {
        questions.forEach(function(item) {
            if (item !== question && item.classList.contains('show-content')) {
                item.classList.remove('show-content');
            }
        });
        question.classList.toggle('show-content');
    });
});
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(button){
    button.addEventListener('click', function (evt) {
        let btnClass = evt.currentTarget.classList;
        if (btnClass.contains('decrease')) {
            count--;
        } else if (btnClass.contains('increase')) {
            count++;
        } else if (btnClass.contains('reset')) {
            count = 0;
        } else {
            count = 'Error';
        }

        if (count < 0) {
            value.style.color = 'red';
        } else if (count > 0) {
            value.style.color = 'green';
        } else {
            value.style.color = 'black';
        }

        value.textContent = count;
    })
});
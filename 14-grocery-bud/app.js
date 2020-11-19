//  ********** SELECTORS **********

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery__form');
const input = document.querySelector('.grocery__input');
const submitBtn = document.getElementById('submit-btn');
const listContainer = document.querySelector('.grocery__list-container');
const list = document.querySelector('.grocery__list');
const clearBtn = document.getElementById('clear-btn');


// Edit options
let editElement;
let editFlag = false;
let editID = '';



//  ********** EVENT LISTENERS **********
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);



//  ********** FUNCTIONS **********

// add item
function addItem(e) {
    e.preventDefault();
    const value = input.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement('article');
        element.classList.add('grocery__item');

        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
                            <p class="grocery__title">${value}</p>
                            <div class="grocery__controls"><button class="grocery__edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="grocery__delete">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div
                            `;

        const deleteBtn = element.querySelector('.grocery__delete');
        const editBtn = element.querySelector('.grocery__edit');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

        list.appendChild(element);
        displayAlert('Item added to the list', 'success');

        if (!listContainer.classList.contains('--show-grocery-list')) {
            listContainer.classList.add('--show-grocery-list');
        }

        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();

    } else if (value && editFlag) {
        console.log('editing');
    } else {
        displayAlert('Please, enter some value', 'danger');
    }
}


// show alert
function displayAlert(text, color) {
    alert.textContent = text;
    alert.classList.add(`alert-${color}`);

    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${color}`);
    }, 3000);
}


// clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery__item');

    if (items.length) {
        items.forEach(function (item) {
            list.removeChild(item);
        });

        listContainer.classList.remove('--show-grocery-list');
        displayAlert('Items are removed', 'danger');
        setBackToDefault();
        // localStorage.removeItem(list);
    }
}


// delete item
function deleteItem(e) {
    // e.currentTarget.parentElement.parentElement.remove();
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);

    if (!list.children.length) {
        listContainer.classList.remove('--show-grocery-list');
    }

    displayAlert('Item is removed', 'danger');
    setBackToDefault();
    // removeFromLocalStorage(id);
}


// edit item
function editItem() {
    console.log('Edit');
}


// set back to default
function setBackToDefault() {
    console.log('Set back to default');
    input.value = '';
    editFlag = false;
    aditID = '';
    submitBtn.textContent = 'submit';
}



//  ********** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    console.log('Added to local storage');
}





//  159 - Hi John, why cleare items button dissappears with a little delay?
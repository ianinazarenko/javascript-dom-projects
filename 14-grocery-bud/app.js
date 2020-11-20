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
// Event Listener for edit item button is withing the function createListItem()
// Event Listener for delete item button is withing the function createListItem()
window.addEventListener('DOMContentLoaded', setUpItems);

//  ********** FUNCTIONS **********

// add item
function addItem(e) {
    e.preventDefault();
    const value = input.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        createListItem(id, value);
        displayAlert('Item added to the list', 'success');

        if (!listContainer.classList.contains('--show-grocery-list')) {
            listContainer.classList.add('--show-grocery-list');
        }

        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();

    } else if (value && editFlag) {
        editElement.textContent = value;
        displayAlert('Item is edited', 'success');
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
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
        localStorage.removeItem('list');
    }
}


// delete item
function deleteItem(e) {
    // e.currentTarget.parentElement.parentElement.remove();
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    // list.removeChild(element);
    element.remove();

    if (!list.children.length) {
        listContainer.classList.remove('--show-grocery-list');
    }

    displayAlert('Item is removed', 'danger');
    setBackToDefault();
    removeFromLocalStorage(id);
}


// edit item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const editElement = e.currentTarget.parentElement.previousElementSibling;
    input.value = editElement.textContent;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = 'Edit';
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
    const info = {
        id: id,
        value: value
    };
    let items = getLocalStorage();

    items.push(info);
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });

    localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function (item) {
        return item.id !== id;
    });

    localStorage.setItem('list', JSON.stringify(items));
}



//  ********** SET UP ITEMS **********

function createListItem(id, value) {
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

    // set Event Listener to dynamically added buttons
    const deleteBtn = element.querySelector('.grocery__delete');
    const editBtn = element.querySelector('.grocery__edit');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    list.appendChild(element);
}

function setUpItems() {
    let items = getLocalStorage();
    if (items.length) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });

        listContainer.classList.add('--show-grocery-list');
    }
}
//  159 - Hi John, why cleare items button dissappears with a little delay?
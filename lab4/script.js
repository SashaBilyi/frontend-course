const el9 = document.getElementById('ninth-element');
const el10 = document.querySelector('.tenth-element');

el9.onclick = function() {
    if (el9.style.backgroundColor === 'blue') {
        el9.style.backgroundColor = 'purple';
        el9.style.color = 'yellow';
    } else {
        el9.style.backgroundColor = 'blue';
        el9.style.color = 'white';
    }
};

el10.onclick = function() {
    if (el10.style.backgroundColor === 'green') {
        el10.style.backgroundColor = 'orange';
        el10.style.color = 'black';
    } else {
        el10.style.backgroundColor = 'green';
        el10.style.color = 'white';
    }
};

const imgContainer = document.getElementById('image-link');
const btnAdd = document.getElementById('btn-add');
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnDelete = document.getElementById('btn-delete');

let currentWidth = 600;

btnAdd.onclick = function() {
    if (!document.getElementById('city-image')) {
        const newImg = document.createElement('img');
        newImg.id = 'city-image';
        newImg.src = 'https://visitlviv.net/wp-content/uploads/2023/11/lviv-313.webp';
        newImg.alt = 'Панорама міста Львів';
        newImg.width = currentWidth;
        imgContainer.appendChild(newImg);
    }
};

btnDelete.onclick = function() {
    const img = document.getElementById('city-image');
    if (img) {
        img.remove();
    }
};

btnIncrease.onclick = function() {
    const img = document.getElementById('city-image');
    if (img) {
        currentWidth += 50;
        img.width = currentWidth;
    }
};

btnDecrease.onclick = function() {
    const img = document.getElementById('city-image');
    if (img && currentWidth > 50) {
        currentWidth -= 50;
        img.width = currentWidth;
    }
};
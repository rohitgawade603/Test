const gray = document.getElementById('color1');
const white = document.getElementById('color2');
const blue = document.getElementById('color3');
const yellow = document.getElementById('color4');


gray.addEventListener('click', () => {
    document.body.style.backgroundColor = 'gray';
    gray.style.borderColor = 'red';
    white.style.borderColor = 'black';
    blue.style.borderColor = 'black';
    yellow.style.borderColor = 'black';
});

white.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    white.style.borderColor = 'red';
    gray.style.borderColor = 'black';
    blue.style.borderColor = 'black';
    yellow.style.borderColor = 'black';
});

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
    blue.style.borderColor = 'red';
    gray.style.borderColor = 'black';
    white.style.borderColor = 'black';
    yellow.style.borderColor = 'black';
});

yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
    yellow.style.borderColor = 'red';
    gray.style.borderColor = 'black';
    white.style.borderColor = 'black';
    blue.style.borderColor = 'black';
});
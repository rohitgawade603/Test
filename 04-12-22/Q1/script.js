let counterValue = document.getElementsByClassName('value')[0];
const decrBtn = document.getElementsByClassName('decr')[0];
const resetBtn = document.getElementsByClassName('reset')[0];
const incrBtn = document.getElementsByClassName('incr')[0];

let counter = 0;
incrBtn.addEventListener('click', () => {
    counter += 1;
    if(counter > 0){
        counterValue.style.color = 'green';
    }
    counterValue.innerHTML = counter;
});

decrBtn.addEventListener('click', () => {
    counter -= 1;
    if(counter < 0){
        counterValue.style.color = 'red';
    }
    counterValue.innerHTML = counter;
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterValue.innerHTML = 0;
    counterValue.style.color = 'black';
})
let notify = document.querySelector ('.notify');
let fab = document.querySelector('fab');
let btn = document.querySelector('btn');

btn.addEventListener('click', active);  

function active(){
    let add = Number(notify.getAttribute('data-count') || 0)

    // convert into number (Number)

    // defaults value 0

    notify.setAttribute('data-count', add+1);

    // add 1 to the data-count

    if (add ===0){
        notify.classList.add('add-numb')
    }
    false;
}


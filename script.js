const grid = document.querySelector('#grid');


function makeGrid(cols, rows) {
    grid.style.setProperty('--num-cols', cols);
    grid.style.setProperty('--num-rows', rows);
    for (let i = 0; i < (cols*rows); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'cell';
    }
}

makeGrid(16,16);

const draw = document.querySelectorAll('.cell');

draw.forEach((element, key) => {
    element.addEventListener('mouseover',()=> {
        element.classList.add('filled');
    })
})

const btn = document.querySelector('#btn');
btn,addEventListener('click', () => {
    draw.forEach((e, key) => {
        e.classList.remove('filled');
    })
})
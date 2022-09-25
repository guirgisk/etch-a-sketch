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

let currentColor = "black";
const colorPallet = ["black", "red", "yellow", "green", "teal", "blue", "purple"];

function getColor() {
    let x = Math.floor(Math.random() * 7);
    currentColor = colorPallet[x];
}
const randColor = document.querySelector('#randColor');
randColor.addEventListener('click', getColor);

const draw = document.querySelectorAll('.cell');

draw.forEach((element, key) => {
    element.addEventListener('mouseover',()=> {
        element.setAttribute('id',`cell-${key}`);
        document.getElementById(`cell-${key}`).style.backgroundColor = currentColor;
    })
})

const resetCol = document.querySelector('#reset');
resetCol.addEventListener('click', () => {
    draw.forEach((e, key) => {
        //e.removeAttribute('id');
        e.style.backgroundColor = 'white';
    })
})

function rainbowBrush() {
    draw.forEach((element, key) => {
        element.addEventListener('mouseover',()=> {
            getColor();
            element.setAttribute('id',`cell-${key}`);
            document.getElementById(`cell-${key}`).style.backgroundColor = currentColor;
        })
    })
}
const rainbow = document.getElementById('Rainbow');
rainbow.addEventListener('click', rainbowBrush())
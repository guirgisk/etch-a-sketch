const grid = document.querySelector('#grid');

/**
 * creates cols x rows size grid
 * @param {int} cols number of columns
 * @param {int} rows number of rows
 */
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

/**
 * sets currentColor to random color from colorPallet
 */
function getColor() {
    let x = Math.floor(Math.random() * 7);
    currentColor = colorPallet[x];
}

function getCells() {
    return document.querySelectorAll('.cell');
}


function getColorReset() {
    let x = Math.floor(Math.random() * 7);
    currentColor = colorPallet[x];
    getCells().forEach((element, key) => {
        var new_element = element.cloneNode(true);
        element.parentNode.replaceChild(new_element, element);
        new_element.addEventListener('mouseover',()=> {
            new_element.setAttribute('id',`cell-${key}`);
            document.getElementById(`cell-${key}`).style.backgroundColor = currentColor;
        })
    })
    
}

const randColor = document.querySelector('#randColor');
randColor.addEventListener('click', getColorReset);


const resetCol = document.querySelector('#reset');
resetCol.addEventListener('click', () => {
    getCells().forEach((e, key) => {
        //e.removeAttribute('id');
        e.style.backgroundColor = 'white';
    })
})

function rainbowBrush() {
    getCells().forEach((element, key) => {
        element.addEventListener('mouseover',()=> {
            getColor();
            element.setAttribute('id',`cell-${key}`);
            document.getElementById(`cell-${key}`).style.backgroundColor = currentColor;
        })
    })
}
const rainbow = document.getElementById('Rainbow');
rainbow.addEventListener('click', rainbowBrush)
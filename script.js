const body = document.querySelector('#body');
const initialSize = 16;
let mouse = false;
let color = "black";
function setBoard(size) {
    if (size >= 2 && size <= 100) {
        let currentBoard = document.querySelector('.board');
        if (currentBoard == null) {
            console.log("Continue");
        } else {
            body.firstChild.remove();
        }
        createSquares(size);
    } else {
        alert("Enter a number between 2 and 100!");
    }
    
}

function createSquares(size) {
    let board = document.createElement('div');
    board.classList.add('board');
    body.prepend(board);
    for (let i = 0; i < size; i++) {
        const height = document.createElement('div');
        height.classList.add("high");
        board.appendChild(height);
        for (let j = 0; j < size; j++) {
            const width = document.createElement('div');
            width.classList.add("wide");
            height.appendChild(width);
        }
    }
    
    const squares = document.querySelectorAll('.wide');
    body.addEventListener('mousedown', () => {
        mouse = true;
    });
    body.addEventListener('mouseup', () => {
        mouse = false;
    });
    console.log(mouse);
    
    squares.forEach(squares => squares.addEventListener('mouseover', addColor));
    
}

function addColor() {
    if (color == 'random') {
        if (mouse) {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
    } else {
        if(mouse) {
            console.log(color);
            this.style.backgroundColor = color;
        }
    }
    
}

function changeMouse() {
    mouse = !mouse;
}

function newSize(size) {
    setBoard(size);
}

function changeColor(newColor) {
    color = newColor;
    console.log(color);
}

function resetBoard() {
    const squares = document.querySelectorAll('.wide');
    squares.forEach(squares => squares.style.backgroundColor = "white");
}

setBoard(initialSize);




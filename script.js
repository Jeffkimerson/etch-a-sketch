//Create 16 div rows with 16 squares
for (let i = 0; i <= 15; i++) {
    const div = document.createElement('div');
    div.classList.add('row');
    for (let j = 0; j<= 15; j++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });
        square.classList.add('square');
        div.appendChild(square);
    }
    const container = document.querySelector('#container');
    container.appendChild(div);

}

//Button to reset and create new grid
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const colored = document.querySelectorAll('.hover');
    colored.forEach((div) => {
        div.classList.remove('hover');
    })
})
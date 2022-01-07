//Create 16 div rows with 16 squares
for (let i = 0; i <= 15; i++) {
    const div = document.createElement('div');
    div.classList.add('row');
    for (let j = 0; j<= 15; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        div.appendChild(square);
    }
    const container = document.querySelector('#container');
    container.appendChild(div);

}
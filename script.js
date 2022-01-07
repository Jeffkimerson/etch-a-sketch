
grid(16);
//Grid creation that can be called for initial and user dimensions
function grid(number) {
    //Creates every row in the grid
    for (let i = 1; i <= number; i++) {
        const div = document.createElement('div');
        div.classList.add('row');

        //Creates each square in each row
        for (let j = 1; j<= number; j++) {
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
}

//Button to reset and create new grid
const button = document.querySelector('button');
button.addEventListener('click', () => {
    //Removes all squares that are changed
    const colored = document.querySelectorAll('.hover');
    colored.forEach((div) => {
        div.classList.remove('hover');
    });
    let dimensions = prompt("Enter new grid dimensions:");
    if (dimensions > 100) {
        alert('Please enter a number smaller than 100');
    } 
    else if (dimensions < 0) {
        alert('Please enter a valid integer');
    }
    else if (Number.isInteger(dimensions)) {
        alert('Please enter a valid integer');
    }
    else {
        //Removes just rows to reduce runtime
        let rows = document.querySelectorAll('.row');
        rows.forEach((div) => {
            div.remove();
        })
        grid(dimensions);
    }

});
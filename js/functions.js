const button = document.querySelector('button');
const table = document.querySelector('table');
const pElement = document.querySelector('p');
let count = 0; 

button.addEventListener('click', addRow);

function addRow() {
    const newRow = table.insertRow();
    for (let i = 0; i < 7; i++) {
        const newCell = newRow.insertCell();
        const randomNumber = Math.floor(Math.random() * 10);
        newCell.textContent = randomNumber;
    }

    count++;
    pElement.textContent = `Valmiita rivejä: ${count}`;
}



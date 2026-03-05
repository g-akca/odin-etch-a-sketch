const squareContainer = document.getElementById("container");
const popupButton = document.getElementById("popup-button");

function getRandomColor() {
    return Math.floor(Math.random() * 256);
}

function createGrid(size) {
    squareContainer.innerHTML = "";
    squareContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    squareContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.opacity = 1;
        squareContainer.appendChild(square);

        square.addEventListener("mouseenter", () => {
            if (!square.style.backgroundColor) square.style.backgroundColor =`rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
            if (square.style.opacity > 0) square.style.opacity -= 0.1;
        });
    }
}

popupButton.addEventListener("click", () => {
    const numOfSquares = prompt("Enter the number of squares per side (max 100):");
    if (numOfSquares == null) return;

    const size = parseInt(numOfSquares);
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a number between 1 and 100!");
        return;
    }

    createGrid(size);
});

createGrid(16);
const squareContainer = document.getElementById("container");
const popupButton = document.getElementById("popup-button");

function createGrid(size) {
    squareContainer.innerHTML = "";
    squareContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    squareContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        squareContainer.appendChild(square);

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "orange";
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
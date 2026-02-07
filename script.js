const squareContainer = document.getElementById("container");
const popupButton = document.getElementById("popup-button");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    squareContainer.appendChild(square);

    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "orange";
    });

    square.addEventListener("mouseleave", () => {
        square.style.backgroundColor = "white";
    });
}

popupButton.addEventListener("click", () => {
    const numOfSquares = prompt("Enter the number of squares per side for the new grid (max. 100):");
    if (numOfSquares > 100 || numOfSquares < 0) {
        alert("Please enter a number between 0 and 100!");
        return;
    }

    squareContainer.innerHTML = "";
    const squareSize = squareContainer.clientWidth / numOfSquares;

    for (let i = 0; i < numOfSquares * numOfSquares; i++) {
        const square = document.createElement("div");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        squareContainer.appendChild(square);

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "orange";
        });

        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "white";
        });
    }
});
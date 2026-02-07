const squareContainer = document.getElementById("container");
const popupButton = document.getElementById("popup-button");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    squareContainer.appendChild(square);
}
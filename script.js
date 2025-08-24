const gridContainer = document.querySelector(".grid");
const gridSizeButton = document.querySelector("#size-btn");

const DEFAULT_GRID_SIZE = 16;
let userGridSize = undefined;

renderGrid();

function renderGrid() {
  // reset the grid before building it
  gridContainer.innerHTML = "";
  const gridSize = userGridSize || DEFAULT_GRID_SIZE;
  for (let i = 0; i < gridSize * gridSize; i++) {
    createGridSquare(gridSize);
  }
}

// on hover fill the square with a random rgb color
gridContainer.addEventListener(
  "mouseenter",
  (event) => {
    if (event.target.classList.contains("square")) {
      event.target.style.backgroundColor = generateRandomRGBColor();
    }
  },
  true
);

function generateRandomRGBColor() {
  return `rgb(
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`;
}

// create and style squares on grid
function createGridSquare(gridSize) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.flex = `1 0 ${100 / gridSize}%`; // gives each square an even space on the grid
  square.style.boxSizing = "border-box";
  square.style.border = "1px solid rgba(255, 255, 255, 0.1)";
  gridContainer.appendChild(square);
  return square;
}

gridSizeButton.addEventListener("click", () => {
  const size = parseInt(prompt("Enter a grid size (max 100):"));
  if (size && size > 0 && size <= 100) {
    userGridSize = size;
    renderGrid();
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

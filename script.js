const grid = document.querySelector(".grid");

const defaultGridSize = 16;

// create and styles squares in grid
for (let i = 0; i < defaultGridSize * defaultGridSize; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  // gives each square an even space on the grid
  square.style.flex = `1 0 ${100 / defaultGridSize}%`;
  square.style.boxSizing = "border-box";
  square.style.border = "1px solid #ccc";
  grid.appendChild(square);
}

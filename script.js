const grid = document.querySelector(".grid");
const defaultGridSize = 16;

// create and styles squares o grid
for (let i = 0; i < defaultGridSize * defaultGridSize; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.flex = `1 0 ${100 / defaultGridSize}%`; // gives each square an even space on the grid
  square.style.boxSizing = "border-box";
  square.style.border = "1px solid #ccc";
  grid.appendChild(square);
  // on hover fill the square with a random rgb color
  square.addEventListener(
    "mouseenter",
    (event) => {
      event.target.style.backgroundColor = getRandomColor();
    },
    false
  );
}

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

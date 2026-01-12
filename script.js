console.log("Script Running");

// Helper function to move a penguin across the grid
const movePenguin = (penguin, column) => {
  if (column <= 6) {
    penguin.style.setProperty("grid-column", column);
  }
};

// Initialize position variables for each penguin
let tux_position = 1;
let daisy_position = 1;
let rocky_position = 1;

// Query selectors for all buttons and penguins
const tuxBtn = document.querySelector("#tux-btn");
const daisyBtn = document.querySelector("#daisy-btn");
const rockyBtn = document.querySelector("#rocky-btn");

const tuxPenguin = document.querySelector("#tux-penguin");
const daisyPenguin = document.querySelector("#daisy-penguin");
const rockyPenguin = document.querySelector("#rocky-penguin");

const winnerBox = document.querySelector("#winner-box");

// Finish line position (column 6)
const finishLine = 6;

// Function to move Tux forward
const moveTux = () => {
  tux_position += 1;
  movePenguin(tuxPenguin, tux_position);
  checkWinner(tux_position, "Tux");
};

// Function to move Daisy forward
const moveDaisy = () => {
  daisy_position += 1;
  movePenguin(daisyPenguin, daisy_position);
  checkWinner(daisy_position, "Daisy");
};

// Function to move Rocky forward
const moveRocky = () => {
  rocky_position += 1;
  movePenguin(rockyPenguin, rocky_position);
  checkWinner(rocky_position, "Rocky");
};

// Function to check if a penguin has reached column 6 (finish line)
const checkWinner = (position, penguinName) => {
  if (position >= finishLine) {
    winnerBox.textContent = `${penguinName} got the fish! 🐟`;
    alert(`${penguinName} got the fish! 🐟`);
    disableButtons(); // Disable all buttons after a winner is found
  }
};

// Function to disable all buttons after a winner is found
const disableButtons = () => {
  tuxBtn.disabled = true;
  daisyBtn.disabled = true;
  rockyBtn.disabled = true;
};

// Add event listeners for each button
tuxBtn.addEventListener("click", moveTux);
daisyBtn.addEventListener("click", moveDaisy);
rockyBtn.addEventListener("click", moveRocky);

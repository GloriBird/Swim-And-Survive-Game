// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of `"app"`
const gameEngine = new Engine(document.getElementById("app"));

document.querySelector("body").style.display = "flex";
document.querySelector("body").style.paddingTop = `${50}px`;
document.querySelector("body").style.justifyContent = "center";
document.getElementById("app").style.position = "relative";

//Added event listeners for Up & Down arrows
const keydownHandler = (event) => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }

  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }

  if (event.code === "ArrowUp") {
    gameEngine.player.moveUp();
  }

  if (event.code === "ArrowDown") {
    gameEngine.player.moveDown();
  }
};

document.addEventListener("keydown", keydownHandler);

gameEngine.gameLoop();

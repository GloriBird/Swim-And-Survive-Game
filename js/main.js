const gameEngine = new Engine(document.getElementById("app"));

document.querySelector("body").style.display = "flex";
document.querySelector("body").style.paddingTop = `${50}px`;
document.querySelector("body").style.justifyContent = "center";
document.getElementById("app").style.position = "relative";

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

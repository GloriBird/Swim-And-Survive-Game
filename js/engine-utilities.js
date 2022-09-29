const nextEnemySpot = (enemies) => {
  const enemySpots = GAME_WIDTH / ENEMY_WIDTH;
  const spotsTaken = [false, false, false, false, false];
  enemies.forEach((enemy) => {
    spotsTaken[enemy.spot] = true;
  });
  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * enemySpots);
  }
  return candidate;
};

const addBackground = (root) => {
  const bg = document.createElement("img");
  bg.src = "images/DeepWater.png";
  bg.style.height = `${GAME_HEIGHT}px`;
  bg.style.width = `${GAME_WIDTH + 10}px`;
  bg.style.outline = `5px solid white`;
  bg.style.borderRadius = `5px`;
  root.append(bg);
};

//removed the bottom white background

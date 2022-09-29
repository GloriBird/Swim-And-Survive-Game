let score = 0;
let lives = 0;
class Engine {
  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    this.enemies = [];
    this.score = new Score(this.root);
    addBackground(this.root);
  }

  gameLoop = () => {
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });
    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });
    while (this.enemies.length < MAX_ENEMIES) {
      const spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }

    if (this.isPlayerDead()) {
      this.restart = new Restart(this.root); // Show restart button if dead
      return;
    }

    setTimeout(this.gameLoop, 20);
    this.overallScore(); //log in the score on screen
  };

  overallScore = () => {
    const scoreEl = document.getElementById(`scoreEl`);
    scoreEl.innerHTML = Math.round(`${score}`);
  };

  isPlayerDead = () => {
    for (let i = 0; i < MAX_ENEMIES; i++) {
      if (
        this.player.x + PLAYER_WIDTH >= this.enemies[i].x &&
        this.player.x <= this.enemies[i].x + ENEMY_WIDTH &&
        this.player.y + PLAYER_HEIGHT >= this.enemies[i].y &&
        this.player.y <= this.enemies[i].y + ENEMY_HEIGHT &&
        this.player.x === this.enemies[i].x
      ) {
        lives += 6; //increase the amount of damage by 6 times
        this.healthBar = document.getElementById(`healthBar`);
        this.healthBar.style.width = `${lives}`;
        if (lives === 300) {
          //300 is when health bar is depleted
          this.player.moveLeft = null;
          this.player.moveRight = null;
          this.player.moveUp = null;
          this.player.moveDown = null;
          return true;
        }
      } else {
        score += 1 / 40;
      }
    }
  };
}

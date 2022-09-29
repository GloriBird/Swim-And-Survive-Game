class Enemy {
  constructor(theRoot, enemySpot) {
    this.root = theRoot;
    this.spot = enemySpot;
    this.x = enemySpot * ENEMY_WIDTH;
    this.y = 0;
    this.destroyed = false;
    this.domElement = document.createElement("img");
    this.domElement.src = "./images/enemy.png"; // Updated enemy but kept the image name the same
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;
    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.3;
  }

  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;
    if (this.y + this.domElement.height > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  }
}

// There will only be one instance of this class. This instance will contain the
// data and methods related to the burger that moves at the bottom of your screen
class Player {
  constructor(root) {
    this.x = 7 * PLAYER_WIDTH;
    this.y = GAME_HEIGHT - PLAYER_HEIGHT - 35;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/player.png";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = ` ${this.y}px`;
    this.domElement.style.zIndex = "10";
    root.appendChild(this.domElement);
  }

  moveLeft() {
    if (this.x > 0) {
      this.x = this.x - PLAYER_WIDTH;
    }

    this.domElement.style.left = `${this.x}px`;
  }
  moveRight() {
    if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
      this.x = this.x + PLAYER_WIDTH;
    }
    this.domElement.style.left = `${this.x}px`;
  }

  moveUp() {
    if (this.y >= GAME_HEIGHT - 682) {
      this.y = this.y - PLAYER_HEIGHT;
    }
    this.domElement.style.top = `${this.y}px`;
  }

  moveDown() {
    if (this.y + PLAYER_HEIGHT < GAME_HEIGHT - 80) {
      this.y = this.y + PLAYER_HEIGHT;
    }
    this.domElement.style.top = `${this.y}px`;
  }
}

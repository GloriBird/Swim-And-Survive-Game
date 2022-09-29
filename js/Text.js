// This class is not used in the project yet.

class Restart {
  constructor(root) {
    this.root = root;
    this.div = document.createElement(`div`);
    this.p = document.createElement(`p`);
    this.p.style.color = `white`;
    this.p.style.textShadow = `2px 2px 2px  #0a6198`;
    this.p.style.fontWeight = 700;
    this.p.style.fontFamily = `arial`;
    this.p.style.fontSize = `${1.5}rem`;
    const message = document.createTextNode(`Better luck next time!`);
    this.div.style.position = "absolute";
    this.div.style.left = `${GAME_WIDTH / 2 - 100}`;
    this.div.style.top = `${GAME_HEIGHT / 2 - 100}`;
    this.div.style.textAlign = `center`;
    this.div.style.zIndex = 15;
    this.btn = document.createElement(`button`);
    this.btn.type = `buttton`;
    this.btn.innerHTML = `Restart`;
    this.btn.onclick = function () {
      location.reload();
    };
    this.p.appendChild(message);
    this.div.appendChild(this.p);
    this.div.appendChild(this.btn);
    root.appendChild(this.div);
  }
}
class Score {
  constructor(root) {
    this.root = root;
    this.div = document.createElement(`div`);
    this.div.style.color = `white`;
    this.div.style.position = `absolute`;
    this.div.style.fontSize = `${1.5}rem`;
    this.div.style.fontFamily = `arial`;
    this.div.style.fontWeight = 700;
    this.div.style.marginLeft = `${15}px`;
    this.div.style.padding = `${10}px`;
    this.div.style.marginTop = `${10}px`;
    this.div.style.backgroundColor = `#0a4271`;
    this.div.style.borderRadius = `${5}px`;
    this.div.style.zIndex = 1000;
    this.span1 = document.createElement(`span`);
    const score = document.createTextNode(`Score: `);
    this.span1.appendChild(score);
    this.span2 = document.createElement(`span`);
    this.span2.setAttribute(`id`, `scoreEl`);
    const currentScore = document.createTextNode(`0`);
    this.span2.appendChild(currentScore);
    this.div.appendChild(this.span1);
    this.div.appendChild(this.span2);
    root.appendChild(this.div);
  }
}

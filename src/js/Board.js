export default class Board {
  constructor() {
    this.size = 4;
  }

  draw() {
    const container = document.querySelector(".container");
    for (let i = 0; i < this.size * this.size; i++) {
      const block = document.createElement("div");

      block.classList.add("block");
      container.appendChild(block);
    }
  }
}

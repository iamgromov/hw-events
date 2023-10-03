/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Board.js
class Board {
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
;// CONCATENATED MODULE: ./src/js/Goblin.js
class Goblin {
  constructor() {
    this.misses = 0;
    this.score = 0;
  }
  changePosition() {
    const position = [...document.querySelectorAll(".block")];
    let goblinPosition = 0;
    const missesCounter = document.querySelector(".misses");
    let interval = setInterval(() => {
      const random = Math.floor(Math.random() * position.length);
      if (random !== goblinPosition) {
        position[goblinPosition].classList.remove("goblin");
        position[random].classList.add("goblin");
        goblinPosition = random;
        this.misses += 1;
        missesCounter.innerText = `MISSES: ${this.misses}`;
      }
      if (this.misses === 5) {
        position[random].classList.remove("goblin");
        alert("YOU LOSE!");
        clearInterval(interval);
      }
    }, 1000);
  }
  gotCaught() {
    const container = document.querySelector(".container");
    const scoreCounter = document.querySelector(".score");
    container.addEventListener("click", event => {
      const e = event.target;
      if (e.className.includes("goblin")) {
        e.classList.remove("goblin");
        this.misses -= 1;
        this.score += 1;
        scoreCounter.innerText = `SCORE: ${this.score}`;
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/components/cursor/Cursor.js

class Cursor {
  constructor(elem) {
    if (typeof elem === "string") {
      this.cell = document.querySelector(elem);
    }
    this.body = document.querySelector("body");
    this.cursor = document.createElement("div");
    this.customCursor = this.customCursor.bind(this);
    this.defaultCursor = this.defaultCursor.bind(this);
    this.cursorMove = this.cursorMove.bind(this);
    this.addBodyStyle = this.addBodyStyle.bind(this);
    this.removeBodyStyle = this.removeBodyStyle.bind(this);
    this.cell.addEventListener("mouseenter", this.customCursor);
    this.cell.addEventListener("mouseleave", this.defaultCursor);
  }
  customCursor() {
    document.addEventListener("mousemove", this.cursorMove);
    this.cursor.classList.toggle("custom-cursor");
    this.addBodyStyle();
  }
  defaultCursor() {
    document.removeEventListener("mousemove", this.cursorMove);
    this.cursor.classList.toggle("custom-cursor");
    this.removeBodyStyle();
  }
  cursorMove(event) {
    let x = event.clientX;
    let y = event.clientY;
    this.cursor.style.left = x + "px";
    this.cursor.style.top = y + "px";
  }
  addBodyStyle() {
    this.body.classList.add("cursor-none");
    this.body.insertAdjacentElement("beforeend", this.cursor);
  }
  removeBodyStyle() {
    this.body.classList.remove("cursor-none");
    this.cursor.remove();
  }
}
;// CONCATENATED MODULE: ./src/js/app.js



let board = new Board();
const goblin = new Goblin();
const cursor = new Cursor(".container");
board.draw();
goblin.changePosition();
goblin.gotCaught();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
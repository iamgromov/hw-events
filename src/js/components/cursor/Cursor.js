import "./cursor.css";

export default class Cursor {
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

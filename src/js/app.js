import Board from "./board";
import Goblin from "./Goblin";
import Cursor from "./components/cursor/Cursor";

let board = new Board();
const goblin = new Goblin();
const cursor = new Cursor(".container");

board.draw();
goblin.changePosition();
goblin.gotCaught();

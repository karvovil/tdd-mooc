import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Line filling tetrimino", () => {
  let board;
  beforeEach(() => {
    board = new Board(10,6);
  });

  it("clears a line", () => {
    board.setBoard(
      '..........\n..........\n..........\n..........\n..........\nIIIIIIII..\n');
    
    board.drop(Tetromino.O_SHAPE);
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    fallToBottom(board)

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ..........
       ........OO`
    );
  })
  it("clears two lines", () => {
    board.setBoard('..........\n..........\n..........\n..........\nIIIIIIII..\nIIIIIIII..\n');
    
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       IIIIIIII..
       IIIIIIII..`
    );
    board.drop(Tetromino.O_SHAPE);
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
  })

});

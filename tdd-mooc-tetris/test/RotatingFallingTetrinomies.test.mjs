import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Rotating falling tetromino", () => {
  let board;
  beforeEach(() => {
    board = new Board(10,6);
  });

  it("test", () => {
    board.drop(Tetromino.T_SHAPE);


  })
  it("can be rotated left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.tick();
    board.rotateLeft();
    expect(board.toString()).to.equalShape(
      `....T.....
       ....TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  })
  it("can be rotated right", () => {
    board.drop(Tetromino.T_SHAPE);
    board.tick();
    board.rotateRight();
    expect(board.toString()).to.equalShape(
      `....T.....
       ...TT.....
       ....T.....
       ..........
       ..........
       ..........`
    );
  })
  xit("can't be rotated if no space", () => {
    board.drop(Tetromino.T_SHAPE);
    board.tick();
    board.rotateLeft();
    board.moveLeft();
    board.moveLeft();
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE);
    board.rotateLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.tick();
    board.tick();
    board.tick();
    board.rotateLeft()

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       T.T.......
       TTTT......
       T.T.......`
    );
  })

  xit("does wall kick on left wall", () => {
    board.drop(Tetromino.T_SHAPE);
    board.tick();
    board.rotateLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `TTT.......
       .T........
       ..........
       ..........
       ..........
       ..........`
    );
  })
  xit("does wall kick on right wall", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `.......TTT
       ........T.
       ..........
       ..........
       ..........
       ..........`
    );
  })
});

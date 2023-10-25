import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { AfricaTetromino } from "../src/AfricaTetromino.mjs";

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

  xit("can be rotated left", () => {
    board.drop(AfricaTetromino.T_SHAPE);
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
  xit("can be rotated right", () => {
    board.drop(AfricaTetromino.T_SHAPE);
    board.tick();
    board.rotateRight();
    expect(board.toString()).to.equalShape(
      `....T.....
       ...TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  })
  xit("can't be rotated if no space", () => {
    board.drop(AfricaTetromino.T_SHAPE);
    board.tick();
    board.rotateLeft();
    board.moveLeft();
    board.moveLeft();
    fallToBottom(board);
    board.drop(AfricaTetromino.T_SHAPE);
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
    board.drop(AfricaTetromino.T_SHAPE);
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
    board.drop(AfricaTetromino.T_SHAPE);
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

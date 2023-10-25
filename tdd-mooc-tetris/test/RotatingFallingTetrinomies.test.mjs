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

  it("can be rotated left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateLeft();
    expect(board.toString()).to.equalShape(
      `....T.....
       ...TT.....
       ....T.....
       ..........
       ..........
       ..........`
    );
  })
  it("can be rotated right", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateRight();
    expect(board.toString()).to.equalShape(
      `....T.....
       ....TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  })
  it("can't be rotated if no space", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateLeft()
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE);
    board.rotateRight();
    board.moveRight();
    board.tick();
    board.tick();
    board.tick();
    
    const shape =       
     `..........
      ..........
      ..........
      ....TT....
      ...TTTT...
      ....TT....`
      
    expect(board.toString()).to.equalShape(shape);
    board.rotateLeft();
    expect(board.toString()).to.equalShape(shape);
  })

  it("does wall kick on left wall", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateRight();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `.T........
       TTT.......
       ..........
       ..........
       ..........
       ..........`
    );
  })
});
